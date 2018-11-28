<template>
    <li>
        <h3>{{ipsum.title}}</h3>
        <div class="info">
            <h3>{{ipsum.author}}</h3>
            <p>{{ipsum.category}}</p>
            <p>{{ipsum.authorURL}}</p>
            <p>{{ipsum.publishedOn}}</p>
            <p>{{ipsum.body}}</p>
        </div>
    </li>
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

