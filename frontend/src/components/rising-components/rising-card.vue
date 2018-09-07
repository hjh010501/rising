<template>
    <div class="rising-card">
        <div :style="style" class="icon"></div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>

export default {
  name: 'rising-card',
  props: {
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    src: {
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
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedClass () {
      return {
        'card': true,
        'card--index': this.index
      }
    },
    style () {
      return 'background-image: url(' + this.src + ')'
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

.rising-card {
    float:right;
    width: 250px;
    height: 250px;
    border-radius: 40px;
    background-color: $white;
    color: $black;
    cursor: pointer;
    -webkit-box-shadow: 0px 22px 55px 3px rgba(0,0,0,0.11);
    -moz-box-shadow: 0px 22px 55px 3px rgba(0,0,0,0.11);
    box-shadow: 0px 22px 55px 3px rgba(0,0,0,0.11);
}

.title {
    margin: 0;
}

.card > .rising-card > .title {
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

.card--index {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.card--index > .rising-card > .title {
  font-size: 34px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  color: #363636;
  user-select: none;
}

.card--index > .rising-card > .icon {
  width: 50px;
  height: 50px;
}
</style>
