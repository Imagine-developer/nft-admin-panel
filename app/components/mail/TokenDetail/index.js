import React from "react";
import {Avatar, Dropdown, Menu} from "antd";
import CustomScrollbars from '../../../../util/CustomScrollbars'

import labels from "../../../../routes/mail/data/labels";

const options = [
  'Reply',
  'Forward',
  'Print',
];

class MailDetail extends React.Component {

  state = {
    showDetail: false
  };

  optionMenu = () => {
    return (
      <Menu id="long-menu">
        {options.map(option =>
          <Menu.Item key={option}>
            {option}
          </Menu.Item>,
        )}
      </Menu>)
  };

  render() {
    const {mail} = this.props;

    return (
      <div className="gx-module-detail gx-mail-detail">
        <CustomScrollbars className="gx-module-content-scroll">
          <div className="gx-mail-detail-inner">
            <div className="gx-mail-header">

              <div className="gx-mail-header-content gx-col gx-pl-0">
                <div className="gx-subject">
                  {mail.collect}
                </div>



              </div>


            </div>
            <hr/>

            <div className="gx-mail-user-info gx-ml-0 gx-mb-3">


{/*               <Dropdown trigger={['click']} overlay={this.optionMenu()}>
                <span className="gx-ml-auto"><i className="icon icon-ellipse-v gx-icon-btn"/></span>
              </Dropdown> */}

            </div>


            <p>
              {mail.description}
            </p>
            <div>
              <img src={mail.img}/>
            </div>
          </div>
        </CustomScrollbars>
      </div>
    );
  }
}

export default MailDetail;
