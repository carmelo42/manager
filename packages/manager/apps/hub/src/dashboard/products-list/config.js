import {
  camelCase,
  find,
  get,
  head,
  isEmpty,
  map,
  pickBy,
  startCase,
} from 'lodash-es';

import { ListLayoutHelper } from '@ovh-ux/manager-ng-layout-helpers';
import columnsConfiguration from '@ovh-ux/manager-product-listing-configuration';
import { DEFAULT_NUMBER_OF_COLUMNS } from './constants';

const mapApiProperties = (properties) => {
  const displayedProperties = pickBy(
    properties,
    (property) => ListLayoutHelper.matchingTypes[property.type],
  );
  return map(displayedProperties, (value, name) => ({
    label: name,
    property: name,
  }));
};

const getDefaultConfiguration = (dataModel, propertyId, displayedColumns) => {
  const columns = mapApiProperties(dataModel.properties).filter(
    ({ label }) => label !== propertyId,
  );
  columns.unshift({
    label: propertyId,
    property: propertyId,
    serviceLink: true,
  });
  return columns.map((column, index) => ({
    ...column,
    label: startCase(column.label),
    hidden: isEmpty(displayedColumns)
      ? index > DEFAULT_NUMBER_OF_COLUMNS
      : !displayedColumns.includes(column.label),
  }));
};

export const component = 'managerListLayout';

export const resolves = {
  products: /* @ngInject */ (productType, services) =>
    get(services, `data.data.${productType}.data`),
  resourcePath: /* @ngInject */ (products) => get(head(products), 'route.path'),
  propertyId: /* @ngInject */ (products) => get(head(products), 'propertyId'),

  dataModel: /* @ngInject */ (resourcePath, schema) => {
    const model = get(
      find(get(find(schema.apis, { path: resourcePath }), 'operations'), {
        httpMethod: 'GET',
      }),
      'responseType',
    );
    return schema.models[model];
  },

  serviceNameTracker: () => 'hub::product-listing::go-to-service',

  columnConfig: /* @ngInject */ (
    $q,
    dataModel,
    displayedColumns,
    productType,
    propertyId,
  ) =>
    columnsConfiguration[camelCase(productType)]
      ? columnsConfiguration[camelCase(productType)].getConfig()
      : $q.resolve({
          data: getDefaultConfiguration(
            dataModel,
            propertyId,
            displayedColumns,
          ),
        }),

  displayedColumns: /* @ngInject */ ($transition$) =>
    JSON.parse($transition$.params().columns),

  getServiceNameLink: /* @ngInject */ (products, propertyId) => (service) =>
    get(
      products.find(({ resource }) => resource.name === service[propertyId]),
      'url',
    ),

  id: /* @ngInject */ (productType) => productType,
  defaultFilterColumn: /* @ngInject */ (propertyId) => propertyId,
  header: /* @ngInject */ ($translate, productType) =>
    $translate.instant(`manager_hub_products_${productType}`),

  description: /* @ngInject */ (notifications, productType) => {
    const filteredNotifications = notifications.filter(
      ({ type }) => type === productType,
    );
    return `<ovh-manager-hub-carousel
        class="w-100"
        data-ng-if="${filteredNotifications.length}"
        data-items="${filteredNotifications}"
    ></ovh-manager-hub-carousel>`;
  },
  customizableColumns: () => true,

  hideBreadcrumb: () => false,
  breadcrumb: /* @ngInject */ ($translate, productType) =>
    $translate.instant(`manager_hub_products_${productType}`),
};

export default {
  component,
  resolves,
};
