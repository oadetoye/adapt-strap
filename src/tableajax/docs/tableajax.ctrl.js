angular.module('adaptv.adaptStrapDocs')
  .controller('tableajaxCtrl', ['$scope',
    function ($scope) {

      // ========== Simple Table Implementation ========== //
      $scope.artistsColumnDef = [
        {
          columnHeaderDisplayName: 'Image',
          template: '<img class="thumbnail ad-margin-bottom-none" ng-src="{{item.image[1][\'#text\']}}">',
          width: '7em'
        },
        {
          columnHeaderTemplate: '<em>Name</em>',
          displayProperty: 'name'
        }
      ];
      $scope.artistsAjaxConfig = {
        url: 'http://ws.audioscrobbler.com/2.0/',
        method: 'JSONP',
        params: {
          api_key: '9b0cdcf446cc96dea3e747787ad23575',
          artist: '50 cent',
          method: 'artist.search',
          format: 'json'
        },
        paginationConfig: {
          response: {
            totalItems: 'results.opensearch:totalResults',
            itemsLocation: 'results.artistmatches.artist'
          }
        }
      };

      // ========== Advanced Implementation with search ========== //
      $scope.artistsColumnDefSearch = [
        {
          columnHeaderTemplate: '<em>Picture</em>',
          templateUrl: 'src/tableajax/docs/artistPicture.html',
          width: '7em'
        },
        {
          columnHeaderDisplayName: 'Name',
          displayProperty: 'name'
        },
        {
          columnHeaderDisplayName: 'Profile',
          template: '<a href="{{ item.url }}" target="_blank">url</a>'
        }
      ];
      $scope.artistsAjaxConfigSearch = {
        url: 'http://ws.audioscrobbler.com/2.0/',
        method: 'JSONP',
        params: {
          api_key: '9b0cdcf446cc96dea3e747787ad23575',
          artist: '50 cent',
          method: 'artist.search',
          format: 'json'
        },
        paginationConfig: {
          response: {
            totalItems: 'results.opensearch:totalResults',
            itemsLocation: 'results.artistmatches.artist'
          }
        }
      };

      // live search implementation
      $scope.artistSearchKey = $scope.artistsAjaxConfigSearch.params.artist;
      $scope.searchArtist = function () {
        if ($scope.artistSearchKey) {
          $scope.artistsAjaxConfigSearch.params.artist = $scope.artistSearchKey;
        }
      };
    }]);
