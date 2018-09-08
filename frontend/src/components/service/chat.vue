<template>
<div class="centering">
  <div class="grid">
    <div class="login">
    <h1>🗣</h1>
    <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Chat Group</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <div class="gorm-group pb-3">
                  <label for="message">Message:</label>
                  <input type="text" v-model="message" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>
      </div>
  </div>
    </div>
  </div>
</div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      content: '',
      messages: [],
      socket: io('/')
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        content: this.message,
        token: localStorage.accessToken
      })
      this.message = ''
    }
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      console.log(data)
      this.messages = [...this.messages, data]
    })
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
