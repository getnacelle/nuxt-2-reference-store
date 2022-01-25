<template>
  <div v-if="content">Cart Component</div>
</template>

<script>
export default {
  name: 'SiteCart',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
