/**
 * Created by anthonycallaert on 13/11/2015.
 */

(function(){
  var target = document.body;
  var config = {
    attributes: true,
    childList: true,
    subtree: true
  };

  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      if(mutation.addedNodes.length > 0){
        var responseDivs = document.getElementsByClassName("gH acX");
        for(var i = 0; i < responseDivs.length; i++){
          if(responseDivs[i].getAttribute('ng-controller') == null){
            responseDivs[i].setAttribute('ng-controller', 'MailButtonController as vm');

            var button = document.createElement('md-button');
            button.classList.add('md-raised','md-primary');
            button.setAttribute('ng-click', 'vm.openDialog($event)');
            button.appendChild(document.createTextNode('Trello'));

            responseDivs[i].insertBefore(button, responseDivs[i].firstElementChild);

            angular.bootstrap(responseDivs[i], ['gTrello']);
          }
        }
      }
    });
  });

  observer.observe(target, config);
}());
