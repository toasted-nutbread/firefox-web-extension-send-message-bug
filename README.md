Example demonstrating an issue in Firefox Nightly 79.0a1 (~2020-06-05) where
`chrome.tabs.sendMessage` doesn't work correctly.

### Expected behaviour:
Upon opening settings.html:
```js 
// settings.html prints:
onMessage { message: { message: "test2" }, sender: { ... } }
response { response: true, error: null }

// bg.html prints:
onMessage { message: { message: "test" }, sender: { ... } }
response { response: true, error: null }
```

### Observed behaviour:
Upon opening settings.html:
```js 
// settings.html prints:
response { response: true, error: null }

// bg.html prints:
onMessage { message: { message: "test" }, sender: { ... } }
response { response: undefined, error: { message: "Could not establish connection. Receiving end does not exist." } }
```
