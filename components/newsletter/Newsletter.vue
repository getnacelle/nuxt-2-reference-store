<template>
  <div v-if="content">Newsletter Component</div>
</template>

<script>
export default {
  name: 'SiteNewsletter',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
