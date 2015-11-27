/**
 * Created by anthonycallaert on 16/11/2015.
 */
chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {

    if (!request.command && !localStorage.getItem('trello_token')) {
      chrome.tabs.create({url: chrome.extension.getURL('settings/index.html')});
      sendResponse();
      return true;
    }

    // Now we have a token saved locally, as fetched from the settings page after authorization.
    if (request.command == 'saveToken') {
      chrome.storage.local.set({
        trello_token: request.token,
      }, function() {

      });
      return true;
    }

    sendResponse();
  });