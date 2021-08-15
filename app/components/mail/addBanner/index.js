import React from "react";
import {Avatar, Input, Modal} from "antd";

import IntlMessages from "../../../../util/IntlMessages";

class AddMail extends React.Component {
  constructor(props) {
    super(props);

    const {title, subtitle, description} = props.mail;
    this.state = {
      _id,
      title,
      subtitle,
      description,
    }
  }
  

  render() {
    const {onSaveMail, onMailClose, open, currentMail} = this.props;
    const {name, email, wallet} = this.state;
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
          onMailClose();
          onSaveMail(
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

export default AddMail;
