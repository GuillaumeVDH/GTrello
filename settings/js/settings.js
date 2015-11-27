function init() {

    // Check if page load is a redirect back from the auth procedure
    if (HashSearch.keyExists('token')) {
        Trello.authorize(
            {
                name: "GTrello",
                expiration: "never",
                interactive: false,
                scope: {read: true, write: true},
                success: function () {
                    chrome.extension.sendMessage({
                        command: 'saveToken',
                        token: localStorage['trello_token']
                    }, function(data) {
                        chrome.tabs.getCurrent(function (tab) {
                            chrome.tabs.remove(tab.id)
                        });
                    });
                },
                error: function () {
                    alert("Failed to authorize with Trello.")
                }
            });
    }

    // Message and button containers
    var lout = $("#trello_helper_loggedout");
    var lin = $("#trello_helper_loggedin");

    // Log in button
    $("#trello_helper_login").click(function () {
        Trello.setKey(APP_KEY);
        Trello.authorize(
            {
                name: "GTrello",
                type: "redirect",
                expiration: "never",
                interactive: true,
                scope: {read: true, write: true},
                success: function () {
                    // Can't do nothing, we've left the page
                },
                error: function () {
                    alert("Failed to authorize with Trello.")
                }
            });
    });

    // Log out button
    $("#trello_helper_logout").click(function () {
      Trello.deauthorize();
      chrome.storage.local.remove('trello_token');
      location.reload();
    });

  chrome.storage.local.get('trello_token'
    , function(item) {
        if(item.trello_token == null){
          $(lout).show();
          $(lin).hide();
        } else {
          $(lout).hide();
          $(lin).show();
        }
    });

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if(changes['trello_token'].newValue == null){
      $(lout).show();
      $(lin).hide();
    } else {
      $(lout).hide();
      $(lin).show();
    }
  });
}
$(document).ready(init);
