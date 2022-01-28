<template>
  <div v-if="catalog" class="py-6">
    <div v-if="results.length">
      <p class="text-lg leading-6">{{ results.length }} result(s) found</p>
      <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
          <div
            class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            <product-card
              v-for="result in results"
              :key="result.nacelleEntryId"
              :product="result"
            />
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-lg leading-6">No results found...</p>
  </div>
</template>

<script>
import { searchCatalog } from '~/utils/searchCatalog';

import ProductCard from '~/components/product/ProductCard.vue';

export default {
  name: 'SearchResults',
  components: {
    ProductCard
  },
  props: {
    catalog: {
      type: Array,
      required: true
    },
    query: {
      type: String,
      required: true
    }
  },
  data: () => ({
    results: []
  }),
  watch: {
    query: {
      immediate: true,
      handler() {
        this.updateResults();
      }
    }
  },
  methods: {
    updateResults() {
      let results = [...this.catalog];
      if (this.query) {
        results = searchCatalog({
          catalog: [...this.catalog],
          query: this.query
        });
      }
      this.results = results;
    }
  }
};
</script>
