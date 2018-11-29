<template>
    <ul>
      <li>
        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"/>
        <Ipsum v-if="selected"
        :ipsum="selected"/>
      </li>
    </ul>
</template>

<script>
import ipsumsApi from '../../services/IpsumsApi.js'; 
import Ipsum from './Ipsum.vue'; 
import IpsumList from './IpsumList.vue'; 
export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
      selected : null
    };
  },
  components: {
    IpsumList,
    Ipsum
  },
  methods: {
    handleSelect(ipsum) {
      console.log(ipsum);
      this.selected = ipsum;
    }
  } 
}; 
</script>
<style>
li {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(card-size, 4fr));
  list-style-type: none;
}
</style>

