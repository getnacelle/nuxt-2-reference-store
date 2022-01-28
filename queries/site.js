import { CONTENT_QUERY_FRAGMENT } from './content';
import { PRODUCT_QUERY_FRAGMENT } from './product';

export const SITE_QUERY = `
  {
    header: content(filter: { type: "componentHeader", handles: ["component-header"] }){
      ${CONTENT_QUERY_FRAGMENT}
    }
    newsletter: content(filter: { type: "componentNewsletter", handles: ["component-newsletter"] }){
      ${CONTENT_QUERY_FRAGMENT}
    }
    footer: content(filter: { type: "componentFooter", handles: ["component-footer"] }){
      ${CONTENT_QUERY_FRAGMENT}
    }
    cart: content(filter: { type: "componentCart",  handles: ["component-cart"] }){
      ${CONTENT_QUERY_FRAGMENT}
    }
    catalog: products{
      ${PRODUCT_QUERY_FRAGMENT}
    }
  }
`;
