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
      const {wallet} = this.state;
    
    return (
      <Modal
        title={
          <IntlMessages id="contact.addContact"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
          if (name === '')
            return;
          onContactClose();
          onSaveContact(
            {
              'wallet': wallet,
            });
          this.setState({
            'wallet': '',
          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">

          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="Wallet"
                onChange={(event) => this.setState({wallet: event.target.value})}
                defaultValue={wallet}
                margin="none"/>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddContact;
