import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Contact = asyncComponent(() => import('../../routes/Contact'));

const ContactPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Users</title>
      </Head>
      <Contact/>
    </React.Fragment>
  );
}

export default ContactPage;
