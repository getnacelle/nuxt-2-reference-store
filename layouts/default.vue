<template>
  <div class="layout-default">
    <site-header :content="siteComponents.header" />
    <site-cart :content="siteComponents.cart" />
    <nuxt class="layout-default__nuxt" />
    <site-newsletter :content="siteComponents.newsletter" />
    <site-footer :content="siteComponents.footer" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

import SiteHeader from '~/components/header/Header.vue';
import SiteCart from '~/components/cart/Cart.vue';
import SiteNewsletter from '~/components/newsletter/Newsletter.vue';
import SiteFooter from '~/components/footer/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteCart,
    SiteNewsletter,
    SiteFooter
  },
  // computed: {
  //   ...mapGetters('site', ['siteComponents'])
  // },
  data: () => ({
    siteComponents: {
      header: require('~/data/component-header.json'),
      cart: require('~/data/component-cart.json'),
      newsletter: require('~/data/component-newsletter.json'),
      footer: require('~/data/component-footer.json')
    }
  })
};
</script>
