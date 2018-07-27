import React, {Component, Fragment} from 'react';
import ProductList from '../Components/ProductList/ProductList';
import {products} from '../seed.js';

class App extends Component {
  state = {products};
  render() {
    const products = this.state.products;

    return (
      <Fragment>
        {/* Pass the products to ProductList */}
        <ProductList products={products} />
      </Fragment>
    );
  }
}

export default App;
