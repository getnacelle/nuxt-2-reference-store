const CONTENT_FRAGMENT = `
  nacelleEntryId
  handle
  fields
`;

export const SITE_QUERY = `
  {
    header: content(filter: { type: "componentHeader", handles: ["component-header"] }){
      ${CONTENT_FRAGMENT}
    }
    newsletter: content(filter: { type: "componentNewsletter", handles: ["component-newsletter"] }){
      ${CONTENT_FRAGMENT}
    }
    footer: content(filter: { type: "componentFooter", handles: ["component-footer"] }){
      ${CONTENT_FRAGMENT}
    }
    cart: content(filter: { type: "componentCart",  handles: ["component-cart"] }){
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
      }
    }
  }
`;
