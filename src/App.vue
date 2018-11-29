<template>
  <div id="app">

    <Header/>

    <Ipsums/>

  </div>
</template>


<script>
// import ipsum from '../data.js'; 
import Ipsums from './components/Ipsums'; 
import Header from './components/Header'; 

export default {
  components: {
    Header,
    Ipsums
  }, 
}; 
</script>

<style>

</style>
