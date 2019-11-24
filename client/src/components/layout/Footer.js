import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
export const Footer = () => {
  return (
    <div class="footer">
      <p>
        <a href="/Links"> Links </a>
      </p>
      <p>
        <a href="/AboutUs">About us</a>
      </p>
      <p>
        <a href="ContactUs">Contact Us </a>
      </p>
    </div>
  );
};

export default Footer;
