<template>
    <div class="rising-textbox">
      <input
        :class="computedClass"
        v-model="innerValue"
        :type="type"
        :placeholder="placeholder"
        keyup.enter="$emit('enter')">
    </div>
</template>

<script>

export default {
  name: 'rising-button',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  data () {
    return {
      innerValue: this.value
    }
  },

  computed: {
    computedClass () {
      return {
        'input': true,
        'input--error': this.errorMessage
      }
    }
  },

  watch: {
    innerValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.innerValue = val
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/variable.scss';
.input-wrapper {
  position: relative;
  width: 100%;
}

.input {
  outline-width: 0;
  font-size: 34px;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  background-color: $white;
  border: 0;
  border-bottom: 2px solid $gray;
  box-sizing: border-box;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  &::placeholder {
    color: #dddddd;
  }
}
</style>
