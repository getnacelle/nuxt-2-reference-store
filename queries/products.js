export const PRODUCTS_QUERY = `
  query Products($handles: [String!]){
    products(filter: { handles: $handles }){
      nacelleEntryId
      sourceEntryId
      availableForSale
      content{
        handle
        title
        options{
          name
          values
        }
        featuredMedia{
          src
          thumbnailSrc
          altText
        }
      }
      variants{
        nacelleEntryId
        sourceEntryId
        availableForSale
        price
        compareAtPrice
        content{
          title
          locale
          featuredMedia{
            src
            thumbnailSrc
            altText
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;
