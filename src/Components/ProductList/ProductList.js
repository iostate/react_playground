import React, {Component, Fragment} from 'react';
// import {
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   Typography,
// } from '@material-ui/core';
import Product from '../ProductList/Product';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto',
  },
};

export default ({products}) => (
  <Fragment>
    {/* For each major muscle group, create a list item with an exercise
      for that muscle group. */}
    {products.map(product => <Product product={product} />)}
  </Fragment>
);

// export default ({products}) => <Fragment>Baa.</Fragment>;
