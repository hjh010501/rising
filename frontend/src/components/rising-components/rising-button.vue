<template>
    <div class="rising-button">
        <h1>
         <router-link :to="{ name: link }">{{ content }}</router-link></h1>
    </div>
</template>

<script>

export default {
  name: 'rising-button',
  props: {
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    normal: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: undefined
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass () {
      return {
        'btn': true,
        'btn--gray': this.gray,
        'btn--small': this.small,
        'btn--large': this.large,
        'btn--text': this.text,
        'btn--cursor-disable': !this.isActive
      }
    },

    isActive () {
      return !this.loading && this.active
    }
  },

  methods: {
    click (e) {
      if (this.active) this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/variable.scss';
.rising-button {
    float:right;
    width: 244px;
    height: 80px;
    border-radius: 40px;
    background-color: $red;
    color: $white;
    cursor: pointer;
    margin-top: 20px;
    line-height: 80px;
    margin-left: 10px;
}

h1 {
    margin: 0;
}

.btn {
    &--gray {
            background-color: #ffffff;
    }
}

.btn > h1 {
  font-size: 34px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  color: #ffffff;
  text-shadow: 0px 6px 0 rgba(195, 28, 60, 0.73);
  user-select: none;

}

.btn--gray > h1 {
  font-size: 34px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  color: #dddddd;
  user-select: none;
}

</style>
