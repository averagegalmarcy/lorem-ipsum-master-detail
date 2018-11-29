<template>
    <ul>
        <li>
          <h4>{{ipsum.authorURL}}</h4>
          <p>Title {{ipsum.title}}</p>
          <p> Published {{ipsum.publishedOn}}</p>
          <p> Category {{ipsum.category}}</p>
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