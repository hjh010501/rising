<template>
  <div id="app">
    <div class="logo" src="./assets/logo.svg"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face {
   font-family: 'Noto Sans KR';
   font-style: normal;
   font-weight: 400;
   src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
 }

@font-face {
   font-family: 'Noto Sans KR Light';
   font-style: normal;
   font-weight: 100;
   src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');
 }

 @font-face {
   font-family: 'Noto Sans KR Bold';
   font-style: normal;
   font-weight: 600;
   src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),
        url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');
 }

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Noto Sans KR';
  letter-spacing: -.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 60px;
  margin-right: 60px;
}

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

.logo {
  width: 134px;
  height: 58px;
  margin: 0 auto;
  background: url('./assets/logo.svg');
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 50px;
}

</style>
