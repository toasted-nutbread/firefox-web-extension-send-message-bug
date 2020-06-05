console.log(chrome.runtime.getURL('/settings.html'));

chrome.runtime.onMessage.addListener((message, sender, callback) => {
  console.log('onMessage', {message, sender});
  callback(true);

  chrome.tabs.sendMessage(sender.tab.id, {message: 'test2'}, (response) => {
    const error = chrome.runtime.lastError;
    console.log('response', {response, error});
  });
});
