<template>
<div class="centering">
  <div class="grid">
    <div class="login">
    <h1>🚀LOGIN</h1>
        <rising-textbox type="text" placeholder="ID" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-textbox type="password" placeholder="PW" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-button class="btn" content="🚀LOGIN" v-ripple></rising-button>
        <rising-button link="Register" class="btn--gray" content="🤝REGISTER" v-ripple="'rgba(0,0,0, 0.15)'"></rising-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    async GotoRegister () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  width: 100%;
}
h1 {
  font-size: 62px;
  text-align: left;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  color: #ff0000;
  user-select: none;
  margin: 0;
}
</style>
