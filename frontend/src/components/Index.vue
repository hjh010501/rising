<template>
<div class="centering">
  <div class="grid">
      <pre>{{user}}</pre>
    <!-- <h1>👋Hello, kidevelop</h1> -->
    <!-- <div class="column">
        <section class="info-section">
          <div class="card">
            <rising-card class="card--index" src="./assets/icon-todo.svg" title="To-do List" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
            <rising-card class="card--index" src="./assets/icon-todo.svg" title="Vote" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
            <rising-card class="card--index" src="./assets/icon-todo.svg" title="Chat" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
          </div>
        </section>
    </div> -->

      <div class="column">
        <section class="info-section">
          <div class="services">
            <div class="services__cards">
              <div v-on:click="move('Chat')" class="c-card c-card--shadow c-card--hover services__card" v-ripple="'rgba(255,255,255,0.35)'" style="height: 192px;">
              <div class="services__card-icon"><span class="icon-request"></span></div>
              <h4 class="services__card-title">Chat</h4> <p class="services__card-description">채팅</p></div>
            </div>
          </div>
        </section>
      </div>
  </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: null,
      accessLog: []
    }
  },
  created () {
    axios.get('/api/auth/check')
      .then(data => {
        this.user = data.user
        this.accessLog = data.accessLog
      })
  },
  methods: {
    move: function (url) {
      this.$router.push({ name: url })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

.service {
  width: 100%;
}

.column {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 8px;
    margin: 8px;
    margin: 0.5rem;
}

.info-section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 32px;
    margin-bottom: 32px;
    margin-bottom: 2rem;
}

.services {
      display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 32px;
    margin-bottom: 32px;
    margin-bottom: 2rem;
}

.services__cards {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.services__card {

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.2s;
        -webkit-box-shadow: 0 6px 12px 0 rgba(21, 19, 19, .1);
    box-shadow: 0 6px 12px 0 rgba(21, 19, 19, .1);
    transition: 0.2s;
        background-color: #fff;
    border-radius: 6px;
    padding: 20px;
    padding: 20px;
    padding: 1.25rem;
    position: relative;
}

h1 {
  font-size: 32px;
  text-align: left;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  letter-spacing: -0.7px;
  color: #000;
  user-select: none;
  margin: 0;
}

</style>
