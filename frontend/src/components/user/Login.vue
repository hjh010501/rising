<template>
<div class="centering">
  <div class="grid">
    <div class="login">
    <h1>🚀LOGIN</h1>
        <rising-textbox type="text" v-model="id" placeholder="ID" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-textbox type="password" v-model="password" placeholder="PW" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-button @click.native="login()" class="btn" content="🚀LOGIN" v-ripple></rising-button>
        <rising-button link="Register" class="btn--gray" content="🤝REGISTER" v-ripple="'rgba(0,0,0, 0.15)'"></rising-button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      id: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async GotoRegister () {
      this.$router.push({ name: 'Register' })
    },
    login: function () {
      this.$store.dispatch('LOGIN', {
        id: this.id,
        password: this.password
      })
        .then(() => this.$router.push({ name: 'Index' }))
        .catch(e => {
          this.errors = e
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.centering {
  -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    margin-top: -118px;
}
.grid {
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
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
