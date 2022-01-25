<template>
  <div v-if="content">Header Component</div>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
