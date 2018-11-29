<template>
  <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span> Author </span>
      <input v-model="ipsum.author">
    </label>
    <label> 
      <span> Title: </span>
      <input v-model="ipsum.title">
    </label>
    <label> 
      <span> Date Published </span>
      <input type="date" v-model="ipsum.publishOn"/>
    </label>
    <label> 
      <span> Ipsum </span>
      <textarea v-model.trim="ipsum.body"></textarea>
    </label>
    <label>
      <span></span>
      <button type="submit">Submit</button>
      <button type="button" @click="onCancel">Cancel</button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      ipsum: {
        author:'', 
        title: '', 
        body:'',
        pubishedOn:''  
      }
    }; 
  }, 
  props: {
    onAdd: Function, 
    onCancel: Function  
  }
};
</script>
<style  scoped>
section {
  background: #aaa;
  padding: 10px; 
}
label {
    display: flex;
    padding: 3px;
  }
  span {
      display: inline-block;
      width: 90px;
    }
  textarea, input, select {
      width: 300px;
    }
  textarea {
      height: 75px;
    }
  button {
    display: block; 
  }
</style>