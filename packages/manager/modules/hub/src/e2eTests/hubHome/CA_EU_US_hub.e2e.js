import config from '../../../../../tools/testcafe/config';
import {
  userRole,
  userRoleDisconnect,
} from '../../../../../tools/testcafe/roles/index';
import HubPage from '../../../../../tools/testcafe/pages/hub/hubPage';
import OrdersList from '../../../../../tools/testcafe/pages/billing/orders';
import ServersListDashboard from '../../../../../tools/testcafe/pages/hub/dedicatedServerDashboard';
import BillsList from '../../../../../tools/testcafe/pages/billing/bills';

const user = userRole(config);

fixture('check hub page')
  .meta({
    team: 'BU.Ops.SU.DigitalTools.Product',
    service: config.allowedServices([
      'ovh.com-manager',
      'ca.ovh.com-manager',
      'us.ovhcloud.com-manager',
    ]),
    type: 'regression',
    severity: 'critical',
    priority: 'high',
    scope: 'hub',
  })
  .beforeEach(async (t) => {
    await t.useRole(user);
  });

test('go to all orders list', async () => {
  const hubPage = new HubPage();
  const ordersPage = new OrdersList();
  await hubPage.confirmCurrentPage();
  await hubPage.goToOrdersList();
  await ordersPage.confirmCurrentPage();
});

test('go to last month bills', async () => {
  const hubPage = new HubPage();
  const billsPage = new BillsList();
  await hubPage.confirmCurrentPage();
  await hubPage.goToBills();
  await billsPage.confirmCurrentPage();
});

test('go to dedicated server dashboard', async () => {
  const hubPage = new HubPage();
  const serversListDashboard = new ServersListDashboard();
  await hubPage.confirmCurrentPage();
  await HubPage.accessProductListDashboard('DEDICATED_SERVER');
  await serversListDashboard.confirmCurrentPage();
}).after(async () => {
  await userRoleDisconnect(config);
});
