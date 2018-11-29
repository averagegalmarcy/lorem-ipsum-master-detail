<template>
    <div>
        <IpsumList
        :ipsums="ipsums"
        :onSelect="handleSelect"/>
        <Ipsum v-if="selected"
        :ipsum="selected"/>
        <AddIpsum 
        :onAdd="handleAdd"/>
    </div>
</template>

<script>
import ipsumsApi from '../../services/IpsumsApi.js'; 
import Ipsum from './Ipsum.vue'; 
import IpsumList from './IpsumList.vue'; 
import AddIpsum from './AddIpsum'; 

export default {
  data() {
    return {
      ipsums: ipsumsApi.getIpsums(),
      selected : null
    };
  },
  components: {
    IpsumList,
    AddIpsum,
    Ipsum
  },
  // computed: {
  //   ipsumTypes() {
  //     const types = []; 
  //     this.ipsums.forEach(ipsum => {
  //       if(!types.includes(ipsum.type)) {
  //         types.push(ipsum.type); 
  //       }
  //     });
  //     return types;
  //   }
  // },
  methods: {
    handleSelect(ipsum) {
      this.selected = ipsum;
    },
    handleAdd(ipsum) {
      this.ipsums.push(ipsum);
      this.handleSelect(ipsum);
    }
  } 
};

</script>
<style>
</style>

