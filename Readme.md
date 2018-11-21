#  bootstrap-vue-msgbox

  Modal message with bootstrap 4 based on https://uiv.wxsm.space/message-box

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
  (main.js)
  this.$alert({
    // options...
  })

  this.$confirm({
    // options...
  })

  this.$prtompt({
    // options...
  })
  
```

## Usage
```js
this.$confirm({
        title: 'this is a titlle',
        content: 'this is a content'
      })
        .then(success => {
          // Ok button pressed
          console.log(success)
        })
        .catch(cancel => {
          // Cancel button pressed
          console.log(cancel)
        })
```

## Issues

The prompt method launch a warn on the console with the type of modal (Prompt).