chrome.runtime.onMessage.addListener((message, sender, callback) => {
  console.log('onMessage', {message, sender});
  callback(true);
});

window.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage({message: 'test'}, (response) => {
    const error = chrome.runtime.lastError;
    console.log('response', {response, error});
  });
});
