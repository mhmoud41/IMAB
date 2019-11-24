import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProductItem from '../products/productItem';
import { getProduct } from '../../actions/product';

const Product = ({ getProduct, product: { product, loading }, match }) => {
    useEffect(() => {
      getProduct(match.params.id);
    }, [getProduct]);

  return loading || Product === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/' className='btn'>
        Back To Products
      </Link>
      <ProductItem product={product} />
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProduct }
)(Product);