<template>
<div class="centering">
  <div class="grid">
    <!-- <h1>👋Hello, kidevelop</h1> -->
    <div class="column">
        <section class="info-section">
          <div class="card">
          <rising-card class="card--index" src="./assets/icon-todo.svg" title="To-do List" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
          <rising-card class="card--index" src="./assets/icon-todo.svg" title="Vote" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
          <rising-card class="card--index" src="./assets/icon-todo.svg" title="Chat" v-ripple="'rgba(0,0,0, 0.15)'"></rising-card>
          </div>
        </section>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    flex-direction: column;
    margin: 8px;
    margin: .5rem;
}

.info-section {
  -webkit-box-direction: normal;
}

.cards {
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
