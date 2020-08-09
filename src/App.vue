<template>
  <div id="app">
    <div class='container'>
      <div v-for="(item,index) in imgSrc" :key="index" >
        <img v-imgLazy="item" >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      imgSrc: [
        'http://bbs.guolh.com/uploads/images/avatars/201909/24//4_1569255094_qFvDuJmYo7.jpg',
        'http://bbs.guolh.com/uploads/images/avatars/202001/04//1_1578108363_3yEnJFkeHa.jpg',
        'http://bbs.guolh.com/uploads/images/avatars/201909/24//7_1569316809_OtmQROpjVg.jpg',
        'http://bbs.guolh.com/uploads/images/avatars/201910/20//1_1571573536_l5oE4Nrmrj.jpeg',
        'http://bbs.guolh.com/uploads/images/avatars/201910/20//1_1571575366_L465JnR5nO.jpeg',
        'http://bbs.guolh.com/uploads/images/avatars/201912/29//1_1577621902_tuzGCXlvuz.jpeg',
        'http://bbs.guolh.com/uploads/images/topics/202001/04//1_1578108669_UsVtXxLDrh.jpg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584175541_DUwVBy8S96.jpg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584182535_TpyjIGwNv6.jpeg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584182540_CiSK9QTdh9.jpeg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584182551_oqZskbGLIl.jpeg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584181967_jlLNdMHdxe.jpg',
        'http://duanduan-admin.guolh.com/uploads/images/topics/202003/14/1_1584182561_PAdlGJuR2O.jpeg'


      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 200px;
  height: 200px;
}
</style>
