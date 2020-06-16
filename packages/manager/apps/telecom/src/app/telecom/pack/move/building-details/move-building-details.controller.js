import has from 'lodash/has';

import { FIBER_PTO } from './move-building-details.constant';

export default class MoveBuildingDetailsCtrl {
  /* @ngInject */
  constructor($scope, $translate, OvhApiConnectivityEligibilitySearch) {
    this.$scope = $scope;
    this.$translate = $translate;
    this.OvhApiConnectivityEligibilitySearch = OvhApiConnectivityEligibilitySearch;
  }

  $onInit() {
    this.selectedOffer = {
      buildingReference: null,
      stair: null,
      floor: null,
      pto: null,
      ptoReference: null,
    };
    this.loading = {
      init: true,
    };
    this.model = {
      engageMonths: null,
      selectedBuilding: null,
      selectedStair: null,
      selectedFloor: null,
      pto: null,
      ptoReference: null,
      ptoReferenceNotKnown: false,
    };

    this.buildings.forEach((building, i) => {
      // check if the building name is empty to set a name to display in the select component
      if (building.buildingName === '') {
        this.buildings[i].buildingName = this.$translate.instant(
          'pack_move_building_details_unknown',
        );
      }

      const params = {
        building: building.buildingReference,
      };

      this.OvhApiConnectivityEligibilitySearch.v6()
        .buildingDetails({}, params)
        .$promise.then((buildingDetails) => {
          if (has(buildingDetails, 'result.stairs')) {
            this.buildings[
              i
            ].stairs = buildingDetails.result.stairs.map((stair) =>
              this.convertStairs(stair),
            );
          }
        })
        .finally(() => {
          this.loading.init = false;
        });
    });
  }

  nextStep() {
    this.selectedOffer.buildingReference = this.model.selectedBuilding.buildingReference;
    this.selectedOffer.stair = this.model.selectedStair.stair.value;
    this.selectedOffer.floor = this.model.selectedFloor.value;
    switch (this.model.pto) {
      case 'yes':
        this.selectedOffer.pto = true;
        this.selectedOffer.ptoReference = this.model.ptoReference;
        break;
      case 'no':
        this.selectedOffer.pto = false;
        break;
      case 'yesNotKnown':
        this.selectedOffer.pto = true;
        break;
      default:
        break;
    }

    this.$scope.$emit('updateBuildingDetails', this.selectedOffer);
  }

  isValidSelection() {
    if (
      this.model.selectedBuilding != null &&
      this.model.selectedStair != null &&
      this.model.selectedFloor != null &&
      this.model.pto != null
    ) {
      switch (this.model.pto) {
        case FIBER_PTO.FIBER_PTO_YES:
          if (
            this.model.ptoReference != null &&
            this.model.ptoReference !== ''
          ) {
            return true;
          }
          return false;
        case FIBER_PTO.FIBER_PTO_NO:
        case FIBER_PTO.FIBER_PTO_YES_BUT_NOT_KNOWN:
          return true;
        default:
          return false;
      }
    }
    return false;
  }

  convertStairs(stair) {
    const stairsModel = {};
    if (stair.stair === '_NA_') {
      stairsModel.stair = {
        label: this.$translate.instant('pack_move_building_details_none'),
        value: stair.stair,
      };
    } else {
      stairsModel.stair = {
        label: stair.stair,
        value: stair.stair,
      };
    }

    if (stair.floors[0] === '_NA_') {
      stairsModel.floors = [
        {
          label: this.$translate.instant('pack_move_building_details_none'),
          value: stair.floors[0],
        },
      ];
    } else {
      stairsModel.floors = stair.floors.map((floor) => ({
        label: floor,
        value: floor,
      }));
    }
    return stairsModel;
  }

  /**
   * Set default stairs model for empty stairs
   */
  defaultStairsModel() {
    return {
      stair: {
        label: this.$translate.instant('pack_move_building_details_none'),
        value: '_NA_',
      },
      floors: [
        {
          label: this.$translate.instant('pack_move_building_details_none'),
          value: '_NA_',
        },
      ],
    };
  }

  changeSelection(isFromStairs) {
    if (!isFromStairs) {
      if (
        !this.model.selectedBuilding.stairs ||
        this.model.selectedBuilding.stairs.length === 0
      ) {
        const params = {
          building: this.model.selectedBuilding.buildingReference,
        };
        this.OvhApiConnectivityEligibilitySearch.v6()
          .buildingDetails({}, params)
          .$promise.then((buildingDetails) => {
            if (has(buildingDetails, 'result.stairs')) {
              if (buildingDetails.result.stairs.length === 0) {
                const stairModel = this.defaultStairsModel();
                this.model.selectedBuilding.stairs.push(stairModel);
              } else {
                this.model.selectedBuilding.stairs = buildingDetails.result.stairs.map(
                  (stair) => this.convertStairs(stair),
                );
              }
            }
          });
      }
      if (this.model.selectedStair != null) {
        this.model.selectedStair = null;
      }
      if (this.model.selectedFloor != null) {
        this.model.selectedFloor = null;
      }
    } else {
      this.model.selectedFloor = null;
    }
  }
}
