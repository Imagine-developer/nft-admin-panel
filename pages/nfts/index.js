import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Tokens = asyncComponent(() => import('../../routes/Tokens'));

const TokensPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>NFTs</title>
      </Head>
      <Tokens/>
    </React.Fragment>
  );
}

export default TokensPage;
