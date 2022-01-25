<template>
  <div v-if="content">Footer Component</div>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
