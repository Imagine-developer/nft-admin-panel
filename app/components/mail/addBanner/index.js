import React from "react";
import {Avatar, Input, Modal} from "antd";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

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
      src: null,
      crop: {
        unit: '%',
        width: 30,
        aspect: 16 / 9
      }
    }
  }
  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };
  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };
  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }
  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }
          blob.name = fileName;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          resolve(this.fileUrl);
        },
        'image/jpeg',
        1
      );
    });
  }
  

  render() {
    const {onSaveMail, onMailClose, open, currentMail} = this.props;
    const {name, email, wallet, crop, croppedImageUrl, src} = this.state;
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
