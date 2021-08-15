import React, {useState} from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";

import labels from "../../../../../routes/mail/data/labels";
import AddMail from './../../addMail'
import axios from 'axios'


const options = [
  'Delete',
];
const MailListItem = ({mail, onMailSelect, onMailChecked, onStartSelect, onDeleteMail}) => {
  const [contactState, setContactState] = useState(false)
  const date = new Date(mail.creationDate)
  async function onDeleteOneMail(data){
    const res = await axios.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id)
    setContactState(true)
  }

  const menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Delete') {
      onDeleteOneMail(mail)
    } else {
      this.onDeleteContact(this.props.contact)
    }
  }
  }>
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);
  return (
    <div className="gx-module-list-item gx-mail-cell">

      <div className="gx-mail-list-info">

        <div className="gx-module-list-content" onClick={() => {
          onMailSelect(mail);
        }}>
          <div className="gx-mail-user-des">

            <span className="gx-sender-name">{mail.title}</span>

            <span className="gx-toolbar-separator">&nbsp;</span>

            {mail.url ? <span className="gx-d-inline-block gx-text-truncate gx-send-subject">{mail.url}</span>: <span className="gx-d-inline-block gx-text-truncate gx-send-subject"></span>}
        </div>

          <div className="gx-message">
            {mail.text? <p className="gx-text-truncate"> {mail.text}</p>: <p className="gx-text-truncate"> {mail.description}</p>}
          </div>
            <div className="gx-time">{date.toString()}</div>

          
        </div>
        <Dropdown overlay={menus()} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-v"/>
        </Dropdown>
      </div>

    </div>
  )
};

export default MailListItem;
