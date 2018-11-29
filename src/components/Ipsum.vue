<template>
    <li>
        <h3>Author: {{ipsum.author}}</h3>
        <IpsumDetail 
        :ipsum="ipsum"/>
    </li>
</template>

<script>
import IpsumDetail from './IpsumDetail'; 
export default {
  props: {
    ipsum: Object
  }, 
  components: {
    IpsumDetail
  }
}; 
</script>

<style>
</style>

