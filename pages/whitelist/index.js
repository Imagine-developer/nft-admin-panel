import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const Whitelist = asyncComponent(() => import('../../routes/Whitelist'));

const WhitelistPage = () => <Whitelist/>;

export default WhitelistPage;