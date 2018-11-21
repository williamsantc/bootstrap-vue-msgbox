<template>
  <b-modal :title="title" no-close-on-esc
           no-close-on-backdrop
           hide-header-close
           @hidden="sendResponse"
            v-model="showModal">
    <div v-if="isHtml" v-html="content"></div>
    <p v-else>{{ content }}</p>
  <template v-if="type === TYPES.PROMPT">
    <b-form-group :invalid-feedback="(isExist(inputError) ? inputError : '')"
                  :valid-feedback="validFeedback"
                  :state="!inputNotValid">
      <b-form-input ref="input"
          :type="inputType"
          v-model="input"
          :state="!inputNotValid"
          required
          data-action="auto-focus"></b-form-input>
    </b-form-group>
  </template>
  <div slot="modal-footer" v-if="type===TYPES.ALERT">
    <b-button class="float-right m-1" :variant="okType" data-action="auto-focus" @click="toggle($event, 'ok')">
      {{ okBtnText }}
    </b-button>
  </div>
  <div slot="modal-footer" v-else>
    <b-button class="float-right m-1" :variant="cancelType" @click="toggle($event, 'cancel')">
      {{ cancelBtnText }}
    </b-button>
    <b-button class="float-right m-1" v-if="type===TYPES.CONFIRM" :variant="okType" data-action="auto-focus" @click="toggle($event, 'ok')">
      {{ okBtnText }}
    </b-button>
    <b-button class="float-right m-1" v-else :variant="okType" @click="validate">
      {{ okBtnText }}
    </b-button>
  </div>
  </b-modal>
</template>

<script>
import { TYPES } from './constants'
import { isExist } from '../utils/objectUtils'

// bootstrap vue single components
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bInput from 'bootstrap-vue/es/components/form-input/form-input'
import bButton from 'bootstrap-vue/es/components/button/button'
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'

// bootstrap vue single dirtectives
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

// bootstrap styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'boostrapMsgBox',
  components: {
    'b-modal': bModal,
    'b-form-input': bInput,
    'b-form-group': bFormGroup,
    'b-button': bButton
  },
  directives: {
    'b-modal': bModalDirective
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    okType: {
      type: String,
      default: 'primary'
    },
    cancelText: {
      type: String,
      default: ''
    },
    cancelType: {
      type: String,
      default: 'default'
    },
    cb: {
      type: Function,
      required: true
    },
    validates: {
      type: Function,
      default: () => null
    },
    type: {
      type: Number,
      required: true,
      default: TYPES.ALERT
    },
    defaultInputValue: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  data: function () {
    return {
      TYPES,
      showModal: false,
      input: '',
      dirty: false,
      emitValue: '',
      returnValue: ''
    }
  },
  computed: {
    inputError: function () {
      return this.validates(this.input)
    },
    inputNotValid: function () {
      return this.isExist(this.inputError)
    },
    okBtnText: function () {
      return this.okText || 'Ok'
    },
    cancelBtnText: function () {
      return this.cancelText || 'Cancel'
    },
    validFeedback: function () {
      return !this.inputNotValid ? 'Correcto' : ''
    }
  },
  methods: {
    isExist,
    sendResponse: function () {
      this.cb(this.returnValue)
    },
    toggle: function ($event, value) {
      this.returnValue = value
      this.showModal = !this.showModal
    },
    validate: function () {
      this.dirty = true
      if (!this.isExist(this.inputError)) {
        this.toggle(false, { value: this.input })
      }
    }
  },
  mounted: function () {
    this.showModal = true
    if (this.defaultInputValue) {
      this.input = this.defaultInputValue
    }
  }
}
</script>

<style scoped>
</style>
