<template>
  <div v-if="content">Header Component</div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
