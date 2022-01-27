export const CONTENT_PAGE_QUERY = `
  query ContentPage($handle: String!){
    pages: content(filter: { type: "pageSections", handles: [$handle] }){
      nacelleEntryId
      sourceEntryId
      handle
      fields
    }
  }
`;
