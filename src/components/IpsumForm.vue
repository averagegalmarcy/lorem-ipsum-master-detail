<template>
  <form @submit.prevent="onAdd(ipsum)">
    <label>
      <span> Name </span>
      <input v-model="ipsum.name">
    </label>
    <label> 
      <span> Title: </span>
      <input v-model="ipsum.title">
    </label>
    <!-- <label> 
      <span> Category </span>
      <select v-model="ipsum.category">
        <option value="" disabled>Select a Category</option>
        <option
          v-for="type in ispumTypes"
          v-bind:key="type"
          v-bind:value="type">
          {{category}}
        </option>
      </select>
    </label> -->
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
        name:'', 
        title: '',
        // category: '',
        body:'', 
      }
    }; 
  }, 
  props: {
    // ispumTypes: Array,
    onAdd: Function, 
    onCancel: Function,  
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
      width: 200px;
    }
  textarea {
      height: 75px;
    }
  button {
    display: block; 
  }
</style>