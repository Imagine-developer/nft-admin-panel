import React from "react";
import {Avatar, Input, Modal} from "antd";

import IntlMessages from "../../../../util/IntlMessages";
import TextArea from "antd/lib/input/TextArea";

class AddMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      text: '',
      imgUrl: '',
      url: ''
    }
  }
  

  render() {
    const {onSaveContact, onContactClose, open, currentMail} = this.props;
    const {title, text, imgUrl, url} = this.state;
    return (
      <Modal
        title={
          <IntlMessages id="contact.addContact"/>}
        toggle={onContactClose} visible={open}
        closable={false}
        onOk={() => {
            if (title === '') return;
          onContactClose();
          onSaveContact({
              'title': title,
              'text': text,
              'url': url,
              'imgUrl': imgUrl
          });
          this.setState({
              title: '',
              text: '',
              imgUrl: '',
              url: ''
          })

        }}
        onCancel={onContactClose}>

        <div className="gx-modal-box-row">

          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="title"
                onChange={(event) => this.setState({title: event.target.value})}
                defaultValue={title}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="text"
                onChange={(event) => this.setState({text: event.target.value})}
                value={text}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <TextArea
                placeholder="url"
                onChange={(event) => this.setState({url: event.target.value})}
                value={url}
                margin="normal"
              />
            </div>
            <div>
              <Input
                type='file'
                onChange={(event) => this.setState({imgUrl: event.target.files[0]})}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddMail;
