import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProductItem from './productItem'
import { getProducts } from '../../actions/product';

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
    ) : (
    <Fragment>
        
      <h1 className='large text-primary'>Products</h1>
      
      
      <div className='cont'>
      {products.length > 0 ? (
              products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <h4>No products found...</h4>
            )}
      </div> 
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
