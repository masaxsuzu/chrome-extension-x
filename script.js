chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  // eslint-disable-line no-unused-vars
  if (request === "Action") {
    console.log(request);
  }
});
