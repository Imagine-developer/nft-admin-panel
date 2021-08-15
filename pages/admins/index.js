import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Contact = asyncComponent(() => import('../../routes/Admins'));

const ContactPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>admins</title>
      </Head>
      <Contact/>
    </React.Fragment>
  );
}

export default ContactPage;