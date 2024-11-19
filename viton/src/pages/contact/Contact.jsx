import React from "react";
import { ContactContainer } from "../../style/Container";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <ContactContainer>
      <h2>Thank You For Visiting the Website </h2>
      <h2>If you want to contact me fill the form below </h2>

      <Link
        className='homelink'
        to='/'
      >
        Go To Home Page
      </Link>
    </ContactContainer>
  );
}

export default Contact;
