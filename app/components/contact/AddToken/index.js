import React from "react";
import {Avatar, Input, Modal, Checkbox, Select} from "antd";

import IntlMessages from "../../../../util/IntlMessages";
import TextArea from "antd/lib/input/TextArea";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    const TextArea = {Input}
    const Option = {Select}
    const {id, collect, description, img, royalty, title, pdf} = props.contact;
    this.state = {
      id,
      title,
      collect,
      description,
      verified: false,
      img,
      pdf,
      royalty,
    }
  }

  render() {
    const {onSaveContact, onContactClose, open, contact} = this.props;
    const {collect, description, royalty, img, pdf, verified, title} = this.state
    
    return (
      <Modal
        title={contact.description === '' ?
          <IntlMessages id="contact.addContact"/> :
          <IntlMessages id="contact.saveContact"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
          onContactClose();
          onSaveContact(
            {
              collect, description, royalty, img, pdf, title, verified
            });
          this.setState({
            
            'collect': '',
            'description': '',
            'img': '',
            'royalty': 0,
            'verified': false,
            'pdf': '',
            'title': '',

          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">

          <div className="gx-modal-box-form-item">
            {img ?           <div className="gx-form-group">
              <img src={URL.createObjectURL(img)} className='photo'/>
            </div> : null}

            <div className="gx-form-group">
              <Input
                required
                placeholder="title"
                onChange={(event) => this.setState({title: event.target.value})}
                defaultValue={title}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Select
                required
                defaultValue='popular'>
                  <Option>Marketplace</Option>
                  <Option>FineArt</Option>
                </Select>
            </div>
            <div className="gx-form-group">
              <Input
                required
                placeholder="collection"
                onChange={(event) => this.setState({collect: event.target.value})}
                defaultValue={collect}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <TextArea
              rows={4}
                placeholder="description"
                onChange={(event) => this.setState({description: event.target.value})}
                value={description}
                margin="normal"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="royalty"
                type='number'
                onChange={(event) => this.setState({royalty: event.target.value})}
                value={royalty}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <div>Image</div>
              <Input
                placeholder="img"
                type='file'
                onChange={(event) => this.setState({img: event.target.files[0]})}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <div>Pdf</div>
              <Input
                placeholder="pdf"
                type='file'
                onChange={(event) => this.setState({pdf: event.target.files[0]})}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              
              <Checkbox
                placeholder="verified"
                type='checkbox'
                onChange={(event) => this.setState({verified: event.target.checked})}
                margin="normal"
              >Verified</Checkbox>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddContact;
