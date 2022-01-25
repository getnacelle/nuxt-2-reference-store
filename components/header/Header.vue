<template>
  <header v-if="content" class="relative bg-white border-b border-gray-200">
    <header-promo :content="content.fields.promo" />
    <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-16 flex items-center justify-around">
        <header-menu />
        <header-logo />
        <!-- <header-primary /> -->

        <div class="ml-auto flex items-center">
          <!-- <header-search class="hidden lg:block" />
          <header-cart /> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderPromo from './HeaderPromo.vue';
import HeaderMenu from './HeaderMenu.vue';
import HeaderLogo from './HeaderLogo.vue';

export default {
  name: 'SiteHeader',
  components: {
    HeaderPromo,
    HeaderMenu,
    HeaderLogo
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>
