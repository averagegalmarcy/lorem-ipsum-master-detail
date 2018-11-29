<template>
    <ul>
        <li>
          <h4>{{ipsum.authorURL}}</h4>
          <p v-html="ipsum.body"></p>
        </li>
    </ul>
</template>

<script>

export default {
  props: {
    ipsum: Object
  }
}; 
</script>

<style>

</style>