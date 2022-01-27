<template>
  <div class="errorPage">
    <hero-banner :content="content" />
  </div>
</template>

<script>
import HeroBanner from '~/components/section/HeroBanner';

export default {
  name: 'ErrorPage',
  components: {
    HeroBanner
  },
  data: () => ({
    content: {
      heading: '404',
      text: 'Uh oh!  The page you are looking for does not exist.',
      button: {
        url: '/',
        text: 'Back to Homepage'
      }
    }
  })
};
</script>

<style lang="scss" scoped></style>
