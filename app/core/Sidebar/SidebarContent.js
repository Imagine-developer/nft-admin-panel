import React, {useEffect} from "react";
import {Menu} from "antd";
import Link from "next/link";

import {useRouter} from 'next/router'
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1) || 'sample';
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <React.Fragment>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link href="/banners">
                <a><i className="icon icon-dasbhoard"/><span>banners</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="mail">
              <Link href="/mail">
                <a><i className="icon icon-dasbhoard"/><span>support</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link href="/users">
                <a><i className="icon icon-dasbhoard"/><span>users</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="nfts">
              <Link href="/nfts">
                <a><i className="icon icon-dasbhoard"/><span>nfts</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="whitelist">
              <Link href="/whitelist">
                <a><i className="icon icon-dasbhoard"/><span>whitelist</span></a>
              </Link>
            </Menu.Item>
            <Menu.Item key="admins">
              <Link href="/admins">
                <a><i className="icon icon-dasbhoard"/><span>admins</span></a>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

