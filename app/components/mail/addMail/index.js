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
      url: '',
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
    const {onSaveContact, onContactClose, open, currentMail} = this.props;
    const {title, text, imgUrl, url, crop, croppedImageUrl, src} = this.state;
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
