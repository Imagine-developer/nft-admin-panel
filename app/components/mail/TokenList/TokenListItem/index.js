import React, {useState} from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";

import labels from "../../../../../routes/mail/data/labels";
import AddMail from '../../addMail'
import axios from 'axios'
import TokenList from "..";
import router from "next/router";


const options = [
  'Delete',
  'Edit',
  'Pdf'
];
const TokenListItem = ({mail, onMailSelect, onMailChecked, onStartSelect, onDeleteMail, onSaveContact}) => {
  const [contactState, setContactState] = useState(false)
  async function onDeleteOneMail(data){
    const res = await axios.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id)
    setContactState(true)
  }
  const menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Edit') {
      onSaveContact(mail)
    } else if (e.key === 'Pdf'){
      router.push(mail.pdf)
    }
    else {
      onDeleteOneMail(mail)
    }
  }
  }>
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);
  console.log(mail)
  return (
    <div className="gx-module-list-item gx-mail-cell">
      <div className="gx-module-list-icon">
        <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
            <Avatar size="large" src={mail.img}/>
        </div>
      </div>

      <div className="gx-mail-list-info">

        <div className="gx-module-list-content" onClick={() => {
          onMailSelect(mail);
        }}>
          <div className="gx-mail-user-des">

            <span className="gx-sender-name">{mail.collect}</span>
        </div>

          <div className="gx-message">
   <p className="gx-text-truncate"> {mail.description}</p>
          </div>
            <div className="gx-time">{new Date(mail.creationDate).toString()}</div>



        </div>
{/*             <button onClick={() => {onDeleteOneMail(mail)}}>delete</button>
            <button onClick={() => {onSaveContact(mail)}}>edit</button> */}
        <Dropdown overlay={menus()} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-v"/>
        </Dropdown>
      </div>

    </div>
  )
};

export default TokenListItem;
