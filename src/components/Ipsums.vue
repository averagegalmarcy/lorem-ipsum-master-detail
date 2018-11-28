<template>
    <ul>
        <Ipsum v-for="ipsum in ipsums"
        :key="ipsum.title"
        :ipsum="ipsum"/>
    </ul>
</template>

<script>
import ipsumsApi from '../../services/IpsumsApi.js'; 
import Ipsum from './Ipsum'; 

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
    };
  },
  components: {
    Ipsum
  }
}; 
</script>

<style>

</style>
