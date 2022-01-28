import { PRODUCT_QUERY_FRAGMENT } from './products';

export const COLLECTION_PAGE_QUERY = `
  query CollectionPage($handle: String!){
    collections: productCollections(filter: { handles: [$handle] }){
      nacelleEntryId
      sourceEntryId
      content{
        title
      }
      products(first: 13){
        ${PRODUCT_QUERY_FRAGMENT}
      }
    }
    pages: content(filter: { type: "collectionContent", handles: [$handle] }){
      nacelleEntryId
      sourceEntryId
      handle
      fields
    }
  }
`;
