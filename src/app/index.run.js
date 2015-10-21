(function() {
  'use strict';

  angular
    .module('wikipediaViewer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
