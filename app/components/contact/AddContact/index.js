import React from "react";
import {Avatar, Input, Modal} from "antd";

import IntlMessages from "../../../../util/IntlMessages";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    const {id, thumb, name, email, wallet, selected, starred, frequently} = props.contact;
    this.state = {
      id,
      thumb,
      name,
      email,
      wallet,
      selected,
      starred,
      frequently
    }
  }

  render() {
    const {onSaveContact, onContactClose, open, contact} = this.props;
      const {_id, name, email, wallet} = this.state;
    
    return (
      <Modal
        title={contact.name === '' ?
          <IntlMessages id="contact.addContact"/> :
          <IntlMessages id="contact.saveContact"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
          if (name === '')
            return;
          onContactClose();
          onSaveContact(
            {
              '_id': contact._id,
              'name': name,
              'email': email,
              'wallet': wallet,
            });
          this.setState({
            '_id': null,
            'name': '',
            'email': '',
            'wallet': '',
          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">

          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="Name"
                onChange={(event) => this.setState({name: event.target.value})}
                defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Email"
                onChange={(event) => this.setState({email: event.target.value})}
                value={email}
                margin="normal"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Wallet"
                onChange={(event) => this.setState({wallet: event.target.value})}
                value={wallet}
                margin="normal"
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddContact;
