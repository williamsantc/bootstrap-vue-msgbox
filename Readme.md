#  bootstrap-vue-msgbox

  Modal message with bootstrap 4 based on https://uiv.wxsm.space/message-box for Vue.js

## Instalation

```sh
  $ npm install bootstrap-vue-msgbox
```
## Initiate

Inject plugin to your vue instance by Vue.use then initial it in your component that need to use message box

Default Injection

```js
  (main.js)
  import Vue from 'vue'
  import vbMsgBox from 'bootstrap-vue-msgbox'

  Vue.use(vbMsgBox)
```

## Methods

```js

  this.$alert({
    // options...
  })

  this.$confirm({
    // options...
  })

  this.$prompt({
    // options...
  })
  
```

## Usage
```js
      this.$confirm({
        title: 'this is a title',
        content: 'this is a content'
      })
        .then(success => {
          // Ok button pressed
          console.log(sucess)
        })
        .catch(cancel => {
          // Cancel button pressed
          console.log(cancel)
        })

      // Example from the original component: 
      this.$prompt({
        title: 'Welcome',
        content: 'Please input your email:',
        // A simple input validator
        // returns the err msg (not valid) or null (valid)
        validates (value) {
          return /\S+@\S+\.\S+/.test(value) ? null : 'Email address is not valid!'
        }
      })
        .then(success => {
          // user input
          console.log(sucess)
        })
        .catch(cancel => {
          // Cancel button pressed
          console.log(cancel)
        })
```

## Options

|   Option              | Type          | Default       |
|-----------------------|---------------|:-------------:|
|**title**              | String        | `Title`       |
|**isHtml**             | Boolean       | `false`       |
|**content**            | String        | `Empty`       |
|**inputType**          | String        | `text`        |
|**okText**             | String        | `Ok`          |
|**okType**             | String        | `primary`     |
|**cancelText**         | String        | `primary`     |
|**cancelType**         | String        | `default`     |
|**validates**          | Function      | `() => null`  |
|**defaultInputValue**  | String        | ``            |
|**modalSize**          | String        | ``            |