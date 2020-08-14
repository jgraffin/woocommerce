import React from 'react';

const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;
const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost:8888/woocommerce/dist/wordpress', // Your store URL
  consumerKey: 'ck_dcf064992aa306d01ee5677544c9934a0961c26a', // Your consumer key
  consumerSecret: 'cs_f2850bee3b6e0effc2298822fee61c1112aaae34', // Your consumer secret
  version: 'wc/v2', // WooCommerce WP REST API version
});

export default class Products extends React.Component {
  constructor() {
    super();
    this.state = WooCommerce;
  }

  render() {
    let page = 'Produtos';
    return (
      <div>
        Página {page}
        {console.log(this.state)}
      </div>
    );
  }
}
