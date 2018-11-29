<template>
    <li>
        <div class="info">
            <h3>{{ipsum.title}}</h3>
            <p>{{ipsum.category}}</p>
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