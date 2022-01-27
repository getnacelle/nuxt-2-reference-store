<template>
  <div class="homePage">
    <site-section
      v-for="section in page.fields.sections"
      :key="section._key"
      :content="section"
    />
  </div>
</template>

<script>
import { CONTENT_PAGE_QUERY } from '~/queries/contentPage';
import SiteSection from '~/components/section/Section.vue';

export default {
  name: 'HomePage',
  components: { SiteSection },
  async asyncData({ app }) {
    const { pages } = await app.$nacelle.query({
      query: CONTENT_PAGE_QUERY,
      variables: { handle: 'page-homepage' }
    });
    return {
      page: pages[0]
    };
  }
};
</script>

<style lang="scss" scoped></style>
