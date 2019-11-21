import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const ProductItem = ({
  
  
  product:{_id,name, photo,discreption,price, date }
  
}) => (
  
  <div className='container-cloth'>
    <div>
      <Link to={`/product/${_id}`}>
        
        <h4 className='clothes-title'>{name}</h4>
      </Link>

    </div>
    <div>
    <img src = {photo}/>
    <p className='price'>{price}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      
        
    </div>
  </div>
);



ProductItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(ProductItem);