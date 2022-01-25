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
import { mapGetters } from 'vuex';

import SiteHeader from '~/components/site/Header.vue';
import SiteCart from '~/components/site/Cart.vue';
import SiteNewsletter from '~/components/site/Newsletter.vue';
import SiteFooter from '~/components/site/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteCart,
    SiteNewsletter,
    SiteFooter
  },
  computed: {
    ...mapGetters('site', ['siteComponents'])
  }
};
</script>
