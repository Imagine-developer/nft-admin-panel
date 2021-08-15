import React from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";

import AddContact from "../../AddContact/index";
import AddToken from '../../AddToken'

const options = [
  'Edit',
  'Delete',
];

class ContactCell extends React.Component {

  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onDeleteContact = (contact) => {
    this.setState({addContactState: false});
    this.props.onDeleteContact(contact);
  };
  onEditContact = () => {
    this.setState({addContactState: true});
  };
  menus = () => (<Menu onClick={(e) => {
    if (e.key === 'Edit') {
      this.onEditContact()
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

  constructor() {
    super();
    this.state = {
      addContactState: false,
    }
  }

  render() {
    const {contact, onContactSelect, onSaveContact} = this.props;
    const {addContactState} = this.state;

    return (

      <div className="gx-contact-item">
        {contact.description ? 
        <div className="gx-module-list-icon">
        <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
            <Avatar size="large" src={contact.img}/>
        </div>
      </div>: null}
        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              {contact.description ? <span className="gx-text-truncate gx-contact-name"> {contact.collect} </span>:<span className="gx-text-truncate gx-contact-name"> {contact.name} </span>}
{/*               <span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-text-truncate gx-job-title">{designation}</span> */}
            </p>

            <div className="gx-text-muted">
            {contact.description ? <span className="gx-email gx-d-inline-block gx-mr-2">
                {contact.description},
            </span> :<span className="gx-email gx-d-inline-block gx-mr-2">
                {contact.email},
            </span>}
              {contact.description ? <span className="gx-phone gx-d-inline-block"></span>: <span className="gx-phone gx-d-inline-block">{contact.wallet}</span>}
            </div>
          </div>

          <div className="gx-module-contact-right">

            <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-v"/>
            </Dropdown>

            {addContactState &&
            [contact.description ? <AddToken open={addContactState} contact={contact} onSaveContact={onSaveContact}
                        onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/> : <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                        onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>]
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCell;
