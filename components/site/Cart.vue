<template>
  <div v-if="content">Cart Component</div>
</template>

<script>
export default {
  name: 'CartComponent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
