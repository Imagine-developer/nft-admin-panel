import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const Sample = asyncComponent(() => import('../../routes/Whitelist'));

const WhitelistPage = () => <Sample/>;

export default WhitelistPage;