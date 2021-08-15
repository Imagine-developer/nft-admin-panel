import React, {useEffect} from "react";
import {Layout, message} from "antd";
import {connect, useSelector} from "react-redux";

import Sidebar from "../Sidebar";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_DARK
} from "../../../constants/ThemeSetting";
import Customizer from "../Customizer";
import {isUnRestrictedRoute, useAuth} from "../../../util/use-auth";
import {useRouter} from "next/router";
import CircularProgress from "../../components/CircularProgress";

const {Content, Footer} = Layout;
const today = new Date();

const AppLayout = ({children}) => {
  const {authUser, loadingAuthUser, error} = useAuth();
  const {themeType, navStyle} = useSelector(({settings}) => settings);
  const router = useRouter();

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };

  useEffect(() => {
    if (error) {
      message.error(error.toString()).then(r => r);
    }
  }, [error]);

  useEffect(() => {
    if (!loadingAuthUser) {
      if (!authUser && !isUnRestrictedRoute(router.pathname)) {
        router.push('/signin').then(r => r);
      } else if (authUser && isUnRestrictedRoute(router.pathname)) {
        router.push('/').then(r => r);
      }
    }
  }, [authUser, loadingAuthUser, router.pathname])

  let bodyClass = "";
  if (themeType === THEME_TYPE_DARK) {
    bodyClass = "dark-theme"
  }

  if (loadingAuthUser) {
    return <div className="gx-loader-view">
      <CircularProgress/>
    </div>;
  }

  return isUnRestrictedRoute(router.pathname) ? children : (
    <Layout className={`gx-app-layout ${bodyClass}`}>
      <Sidebar/>
      <Layout>
        <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
          <div className="gx-main-content-wrapper">
            {children}
          </div>
        </Content>
      </Layout>
      <Customizer/>
    </Layout>
  )
}

export default AppLayout;

