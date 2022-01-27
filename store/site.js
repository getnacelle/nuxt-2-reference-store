import { cachedFetch } from '~/utils/cachedFetch';
import { SITE_QUERY } from '~/queries/site';

export const state = () => ({
  components: {
    header: null,
    cart: null,
    newsletter: null,
    footer: null
  },
  catalog: []
});

export const getters = {
  siteComponents(state) {
    return state.components;
  },
  siteCatalog(state) {
    return state.catalog;
  }
};

export const mutations = {
  setComponents(state, payload) {
    state.components = {
      header: payload.header[0],
      cart: payload.cart[0],
      newsletter: payload.newsletter[0],
      footer: payload.footer[0]
    };
  },
  setCatalog(state, payload) {
    state.catalog = [...payload];
  }
};

export const actions = {
  async initSite({ commit }) {
    const { data } = await cachedFetch({
      key: 'site',
      fetcher: () => this.$nacelle.query({ query: SITE_QUERY })
    });
    const { catalog, ...rest } = data;
    commit('setComponents', rest);
    commit('setCatalog', catalog);
  }
};
