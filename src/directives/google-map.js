/* global google */

function googleMap() {
  let currentLocation ={};
  return {
    restrict: 'E',
    template: '<div class="google-map"></div>',
    replace: true,
    scope: {
      center: '=',
      zoom: '=',
      bathroom: '=',
      origin: '='
    },
    link($scope, $element) {
      const map = new google.maps.Map($element[0], {
        zoom: $scope.zoom,
        center: $scope.center,
        styles:
        [
          {
            'featureType': 'all',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'saturation': 36
              },
              {
                'color': '#dee6f0'
              },
              {
                'lightness': 40
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'hue': '#ff0000'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#353c44'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              },
              {
                'weight': 1.2
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#1c1e25'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'hue': '#e0ff00'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 21
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#1e212b'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#00cebd'
              },
              {
                'lightness': 17
              },
              {
                'saturation': '11'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 29
              },
              {
                'weight': 0.2
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#ff7a00'
              },
              {
                'saturation': '79'
              },
              {
                'visibility': 'on'
              },
              {
                'lightness': '-33'
              },
              {
                'gamma': '0.63'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 18
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#256a72'
              },
              {
                'saturation': '61'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'gamma': '1'
              },
              {
                'lightness': '0'
              },
              {
                'color': '#2d414b'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 19
              }
            ]
          },
          {
            'featureType': 'transit.line',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#eb0202'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ff1d00'
              },
              {
                'saturation': '-35'
              },
              {
                'lightness': '-47'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#00d4ff'
              },
              {
                'visibility': 'simplified'
              },
              {
                'lightness': '0'
              },
              {
                'saturation': '0'
              },
              {
                'gamma': '0.5'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          }
        ]
      });

      navigator.geolocation.getCurrentPosition(pos => {
        const userCurrentLat = pos.coords.latitude;
        const userCurrentLng = pos.coords.longitude;

        currentLocation = { lat: userCurrentLat, lng: userCurrentLng };
        displayRoute();
        $scope.$apply();
      });

      const directionsDisplay = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();
      const directionsShow = document.getElementById('directions-show');
      // const origin = currentLocation;
      // console.log(origin);

      directionsDisplay.setMap(map);

      function displayRoute() {

        directionsService.route({
          origin: currentLocation,
          destination: $scope.center,
          travelMode: 'WALKING'
        }, (response) => {
          directionsDisplay.setDirections(response);
        });
      }

      directionsDisplay.setPanel(directionsShow);

      const marker = new google.maps.Marker({
        position: $scope.center,
        map: map,
        title: 'Hello World!'
      });
      //this makes sure that the show page loads up first before google maps otherwise nothing shows
      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      }, true);

      const infoWindow = new google.maps.InfoWindow();

      $scope.$watch('bathroom', () => {
        infoWindow.setContent(`<div><h1>${$scope.bathroom.description}</h1><h1>${$scope.bathroom.address}</h1></div>`);
      }, true);

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  };
}

export default googleMap;
