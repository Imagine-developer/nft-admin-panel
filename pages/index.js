import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import BannersPage from './banners'

const homePage = () => {
  const {authUser} = useAuth();

  return authUser ? <BannersPage/> : <SignInPage/>;
}

export default homePage;
