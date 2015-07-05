"use strict";

angular.module('locator.accommodation-equipment-chooser', []).directive('accEquChooser', function () {

    var template = [
        '<div class="wifi equi-ico pointer tt tt-small" aria-label="Wlan" ng-hide="containsAccommodation(wifi) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(wifi)" ng-class="{wifiGrey: containsAccommodation(wifi) == false, wifiWhite: iconsColor == white}"></div>',
        '<div class="tv equi-ico pointer tt tt-small" aria-label="Fernsehen" ng-hide="containsAccommodation(tv) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(tv)" ng-class="{tvGrey: containsAccommodation(tv) == false, tvWhite: iconsColor == white}"></div>',
        '<div class="shower equi-ico pointer tt tt-small"  aria-label="Dusche/WC" ng-hide="containsAccommodation(shower) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(shower)" ng-class="{showerGrey: containsAccommodation(shower) == false, showerWhite: iconsColor == white}"></div>',
        '<div class="meal equi-ico pointer tt tt-small" aria-label="Kochmöglichkeiten" ng-hide="containsAccommodation(meal) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(meal)" ng-class="{mealGrey: containsAccommodation(meal) == false, mealWhite: iconsColor == white}"></div>',
        '<div class="breakfast equi-ico pointer tt tt-small" aria-label="Frühstück" ng-hide="containsAccommodation(breakfast) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(breakfast)" ng-class="{breakfastGrey: containsAccommodation(breakfast) == false, breakfastWhite: iconsColor == white}"></div>',
        '<div class="smoker equi-ico pointer tt tt-small" aria-label="Rauchermöglichkeiten" ng-hide="containsAccommodation(smoker) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(smoker)" ng-class="{smokerGrey: containsAccommodation(smoker) == false, smokerWhite: iconsColor == white}"></div>',
        '<div class="parking equi-ico pointer tt tt-small" aria-label="Parkmöglichkeiten" ng-hide="containsAccommodation(parking) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(parking)" ng-class="{parkingGrey: containsAccommodation(parking) == false, parkingWhite: iconsColor == white}"></div>',
        '<div class="handicapped equi-ico pointer tt tt-small" aria-label="Behindertengerecht" ng-hide="containsAccommodation(handicapped) == false && getJustShowSelected() == true" ng-click="addAccommodationEquipment(handicapped)" ng-class="{handicappedGrey: containsAccommodation(handicapped) == false, handicappedWhite: iconsColor == white}"></div>'
    ];

    return {
        scope: {
            'accommodationEquipmentSelectable': '=',
            'accommodationEquipment': '=',
            'justShowSelected': '=',
            'iconsColor': '='
        },

        controller: function ($scope, lodash) {
            $scope.wifi = 'wifi';
            $scope.tv = 'tv';
            $scope.shower = 'shower';
            $scope.meal = 'meal';
            $scope.breakfast = 'breakfast';
            $scope.smoker = 'smoker';
            $scope.parking = 'parking';
            $scope.handicapped = 'handicapped';
            $scope.white = 'white';
            $scope.addAccommodationEquipment = function (equipment) {
                if ($scope.accommodationEquipmentSelectable) {
                    if ($scope.containsAccommodation(equipment)) {
                        var index = this.accommodationEquipment.indexOf(equipment);
                        $scope.accommodationEquipment.splice(index, 1);
                    } else {
                        $scope.accommodationEquipment.push(equipment);
                    }
                }
            };

            $scope.containsAccommodation = function(equipment) {
                return !!lodash.findWhere(this.accommodationEquipment, equipment);
            }

            $scope.getJustShowSelected = function() {
                return $scope.justShowSelected;
            }
        },
        template: template.join('')
    };
});

