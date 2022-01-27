<template>
  <div class="productPage">
    <site-section
      v-for="section in page.fields.sections"
      :key="section._key"
      :content="section"
    />
  </div>
</template>

<script>
import { PRODUCT_PAGE_QUERY } from '~/queries/productPage';
import SiteSection from '~/components/section/Section.vue';

export default {
  name: 'ProductPage',
  components: { SiteSection },
  async asyncData({ app, params }) {
    const { products, pages } = await app.$nacelle.query({
      query: PRODUCT_PAGE_QUERY,
      variables: {
        handle: params.handle,
        pageHandle: `page-${params.handle}`
      }
    });
    return {
      product: products[0],
      page: pages[0]
    };
  }
};
</script>

<style lang="scss" scoped></style>
