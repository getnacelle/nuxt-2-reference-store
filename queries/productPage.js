export const PRODUCT_PAGE_QUERY = `
  query ProductPage($handle: String!){
    products: products(filter: { handles: [$handle] }){
      nacelleEntryId
      sourceEntryId
      content{
        title
        description
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
        sku
        availableForSale
        price
        compareAtPrice
        content{
          title
          selectedOptions{
            name
            value
          }
          featuredMedia{
            src
            thumbnailSrc
            altText
          }
        }
      }
    }
    pages: content(filter: { type: "productContent", handles: [$handle] }){
      nacelleEntryId
      sourceEntryId
      handle
      fields
    }
  }
`;