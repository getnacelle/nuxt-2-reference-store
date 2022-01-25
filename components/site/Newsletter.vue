<template>
  <div v-if="content">Newsletter Component</div>
</template>

<script>
export default {
  name: 'NewsletterComponent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
