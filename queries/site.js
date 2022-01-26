const CONTENT_FRAGMENT = `
  nacelleEntryId
  handle
`;

export const SITE_QUERY = `
  {
    header: content(filter: { handles: ["component-header"] }){
      ${CONTENT_FRAGMENT}
    }
    newsletter: content(filter: { handles: ["component-newsletter"] }){
      ${CONTENT_FRAGMENT}
    }
    footer: content(filter: { handles: ["component-footer"] }){
      ${CONTENT_FRAGMENT}
    }
    cart: content(filter: { handles: ["component-cart"] }){
      ${CONTENT_FRAGMENT}
    }
    catalog: products{
      nacelleEntryId
      content{
        handle
        title
        featuredMedia{
          src
          thumbnailSrc
          altText
        }
      }
      variants{
        price
        compareAtPrice
      }
    }
  }
`;
