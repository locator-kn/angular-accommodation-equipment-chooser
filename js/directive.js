"use strict";

angular.module('locator.accommodation-equipment-chooser', []).directive('accEquChooser', function () {

    var template = [
        '<div class="wifi equi-ico" title="WLAN" ng-click="addAccommodationEquipment(wifi)" ng-class="{wifiGrey: containsAccommodation(wifi) == false}"></div>',
        '<div class="tv equi-ico" title="Fernsehen" ng-click="addAccommodationEquipment(tv)" ng-class="{tvGrey: containsAccommodation(tv) == false}"></div>',
        '<div class="shower equi-ico" title="Dusche/Bad" ng-click="addAccommodationEquipment(shower)" ng-class="{showerGrey: containsAccommodation(shower) == false}"></div>',
        '<div class="meal equi-ico" title="Mittagessen" ng-click="addAccommodationEquipment(meal)" ng-class="{mealGrey: containsAccommodation(meal) == false}"></div>',
        '<div class="breakfast equi-ico" title="Frühstück" ng-click="addAccommodationEquipment(breakfast)" ng-class="{breakfastGrey: containsAccommodation(breakfast) == false}"></div>',
        '<div class="smoker equi-ico" title="Raucherbereich" ng-click="addAccommodationEquipment(smoker)" ng-class="{smokerGrey: containsAccommodation(smoker) == false}"></div>',
        '<div class="parking equi-ico" title="Parkmöglichkeiten" ng-click="addAccommodationEquipment(parking)" ng-class="{parkingGrey: containsAccommodation(parking) == false}"></div>',
        '<div class="handicapped equi-ico" title="Behindertengerecht" ng-click="addAccommodationEquipment(handicapped)" ng-class="{handicappedGrey: containsAccommodation(handicapped) == false}"></div>'
    ];

    return {
        scope: {
            'accommodationEquipmentSelectable': '=',
            'accommodationEquipment': '='
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
        },
        template: template.join('')
    };
});

