if (HashSearch.keyExists('token')) {
    Trello.authorize(
        {
            name: "Trello Helper Extension",
            expiration: "never",
            interactive: false,
            scope: {read: true, write: false},
            success: function () {
                chrome.extension.sendMessage({
                    command: 'saveToken',
                    token: localStorage.getItem('trello_token')
                }, function(data) {
                    chrome.tabs.getCurrent(function (tab) {
                        chrome.tabs.remove(tab.id)
                    });
                });
            },
            error: function () {
                alert("Failed to authorize with Trello. Please tell me about your problem at bruno@skvorc.me.")
            }
        });
}