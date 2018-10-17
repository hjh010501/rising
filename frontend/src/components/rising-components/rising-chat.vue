<template>
    <div :class="computedClass">
        <div :style="style" class="profile"></div>
        <div class="content">{{ writer + " : " +  content }}</div>
        <!-- <div class="date">2018.10.03</div> -->
    </div>
</template>

<script>

export default {
  name: 'rising-chat',
  props: {
    content: {
      type: String,
      default: ''
    },
    writer: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedClass () {
      return [
        'rising-chat',
        this.writer === JSON.parse(window.atob(this.$store.getters.isAuthenticated.split('.')[1].replace('-', '+').replace('_', '/'))).id ? 'rising-chat--me' : 'rising-chat--you'
      ]
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

.rising-chat {
  clear: both;
  border-radius: 20px;
  max-width: 50%;
  margin-top: 10px;
  &--me {
    float: right;
    background: #2dd283;
    background: -moz-linear-gradient(left, #2dd283 0%, #26c1a2 100%);
    background: -webkit-linear-gradient(left, #2dd283 0%, #26c1a2 100%);
    background: linear-gradient(to right, #2dd283 0%, #26c1a2 100%);
  }
    &--you {
    float: left;
    background: #2998f5;
    background: -moz-linear-gradient(left, #2998f5 0%, #246cf0 100%);
    background: -webkit-linear-gradient(left, #2998f5 0%,#246cf0 100%);
    background: linear-gradient(to right, #2998f5 0%,#246cf0 100%);
  }
}

.content {
    font-family: 'Noto Sans KR';
    font-weight: 600;
    font-size: 16px;
    font-stretch: normal;
    letter-spacing: -0.7px;
    color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 25px;
    border-radius: 25px;
    margin: 15px;
    word-break: break-all;
    text-align: left;
}

</style>
