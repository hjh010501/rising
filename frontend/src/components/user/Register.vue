<template>
<div class="centering">
  <div class="grid">
    <div class="login">
    <h1>🚀REGISTER</h1>
        <rising-textbox type="text" v-model="username" placeholder="NAME" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-textbox type="email" v-model="email" placeholder="EMAIL" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-textbox type="text" v-model="id" placeholder="ID" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-textbox type="password" v-model="password" placeholder="PW" v-ripple="'rgba(255,255,255,0.35)'"></rising-textbox>
        <rising-button @click.native="register()" class="btn" content="🚀REGISTER" v-ripple></rising-button>
        <rising-button link="Login" class="btn--gray" content="👈BACK" v-ripple="'rgba(0,0,0, 0.15)'"></rising-button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      email: '',
      id: '',
      password: '',
      errors: []
    }
  },
  methods: {
    register: function () {
      this.$http.post('/api/auth/register', {
        username: this.username,
        email: this.email,
        id: this.id,
        password: this.password
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
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
