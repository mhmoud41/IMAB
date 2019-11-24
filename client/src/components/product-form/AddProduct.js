import React, { useState,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/product';
import { Link } from 'react-router-dom';
const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    photo: ''
  });

  const { name, price, description, photo } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
            Back To Profiles
          </Link>
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addProduct({ name, price,description,photo });
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Could be your own company or one you work for
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='price'
            value={price}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Skills'
            name='photo'
            value={photo}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
   
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
    </Fragment>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(AddProduct);