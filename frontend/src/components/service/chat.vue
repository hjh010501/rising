<template>
<div style="padding-bottom: 50px;" class="chat">
<div class="centering">
  <div class="grid">
    <h1>🗣</h1>
        <div class="messages" v-for="(msg, index) in messages" :key="index">
          <rising-chat :writer="msg.id" :content="msg.content" v-ripple="'rgba(255,255,255, 0.15)'"></rising-chat>
              <div style="height: 70px;" class="blank"></div>
        </div>
    </div>
  </div>
        <div class="card-footer">
          <form @submit.prevent="sendMessage">
              <input type="text" v-model="message" class="chatinput" v-ripple="'rgba(255,255,255, 0.15)'">
              <button onClick="window.scrollTo(0, document.documentElement.scrollHeight)" type="submit" class="sendbutton" v-ripple="'rgba(255,255,255, 0.15)'">🚀</button>
          </form>
      </div>
</div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      message: '',
      messages: [],
      socket: io('/')
    }
  },

  async created () {
    await this.getMessage()
    this.socket.on('MESSAGE', (data) => {
      // this.$set(this.messages, JSON.parse(data))
      this.messages = JSON.parse(data)
      window.scrollTo(0, document.documentElement.scrollHeight)
    })
  },
  methods: {
    async getMessage (e) {
      this.messages = (await this.$http.get('/api/chat/load')).data.chat
    },
    sendMessage (e) {
      this.socket.emit('SEND_MESSAGE', {
        content: this.message,
        token: localStorage.accessToken
      })
      this.message = ''
    }
  },
  beforemounted () {
    this.getMessage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
.centering {
  margin-bottom: 100px;
}
.card-footer {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  margin-left: -68px;
  border-top: 1px solid #ddd;
}

.chatinput {
  width: 80%;
  height: 70px;
  outline-width: 0;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  letter-spacing: -0.7px;
  background-color: white;
  border: 0;
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}

.chatinput::placeholder {
  color: #ddd;
}

.sendbutton {
  width: 20%;
  height:70px;
  text-align: center;
  line-height: 70px;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  letter-spacing: -0.7px;
  border: 0;
  background-color: #fff;
  outline-width: 0;
  border-left: 1px solid #ddd;
}
</style>
