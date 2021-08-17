exports.ids = [24];
exports.modules = {

/***/ "67QK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b3IY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

};

class ComposeMail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      to: '',
      cc: '',
      bcc: '',
      subject: '',
      message: ''
    };
  }

  render() {
    const {
      onMailSend,
      onClose,
      user
    } = this.props;
    const {
      to,
      subject,
      message
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      onCancel: onClose,
      visible: this.props.open,
      title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        id: "mail.title"
      }),
      closable: false,
      onOk: () => {
        if (to === '') return;
        onClose();
        onMailSend({
          'id': '15453a06c08fb021776',
          'from': {
            'name': user.name,
            'avatar': user.avatar,
            'email': user.email
          },
          'to': [{
            'name': to,
            'email': to
          }],
          'subject': subject,
          'message': message,
          'time': moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD MMM'),
          'read': false,
          'starred': false,
          'important': false,
          'hasAttachments': false,
          'folder': 1,
          'selected': false,
          'labels': []
        });
      },
      style: {
        zIndex: 2600
      }
    }, __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "To*",
      onChange: event => this.setState({
        to: event.target.value
      }),
      defaultValue: to,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Subject",
      onChange: event => this.setState({
        subject: event.target.value
      }),
      value: subject,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(TextArea, {
      placeholder: "Message",
      onChange: event => this.setState({
        message: event.target.value
      }),
      value: message,
      autosize: {
        minRows: 2,
        maxRows: 6
      },
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], props, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary"
    }, __jsx("i", {
      className: "icon icon-attachment"
    }), " Attach File"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (ComposeMail);

/***/ }),

/***/ "B4tF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppModuleHeader = props => {
  const {
    placeholder,
    onChange,
    value
  } = props;
  return __jsx("div", {
    className: "gx-module-box-header-inner"
  }, __jsx("div", {
    className: "gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block"
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input gx-border-0",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (AppModuleHeader);
AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};

/***/ }),

/***/ "C6IW":
/***/ (function(module, exports) {



/***/ }),

/***/ "b3IY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "dQWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b3IY");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7QRU");
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AddMail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSelectFile", e => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener('load', () => this.setState({
          src: reader.result
        }));
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    _defineProperty(this, "onImageLoaded", image => {
      this.imageRef = image;
    });

    _defineProperty(this, "onCropComplete", crop => {
      this.makeClientCrop(crop);
    });

    _defineProperty(this, "onCropChange", (crop, percentCrop) => {
      // You could also use percentCrop:
      // this.setState({ crop: percentCrop });
      this.setState({
        crop
      });
    });

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
    };
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');
      this.setState({
        croppedImageUrl
      });
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
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width * scaleX, crop.height * scaleY);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }

        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg', 1);
    });
  }

  render() {
    const {
      onSaveContact,
      onContactClose,
      open,
      currentMail
    } = this.props;
    const {
      title,
      text,
      imgUrl,
      url,
      crop,
      croppedImageUrl,
      src
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "contact.addContact"
      }),
      toggle: onContactClose,
      visible: open,
      closable: false,
      onOk: () => {
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
        });
      },
      onCancel: onContactClose
    }, __jsx("div", {
      className: "gx-modal-box-row"
    }, __jsx("div", {
      className: "gx-modal-box-form-item"
    }, __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      required: true,
      placeholder: "title",
      onChange: event => this.setState({
        title: event.target.value
      }),
      defaultValue: title,
      margin: "none"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "text",
      onChange: event => this.setState({
        text: event.target.value
      }),
      value: text,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
      placeholder: "url",
      onChange: event => this.setState({
        url: event.target.value
      }),
      value: url,
      margin: "normal"
    })), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "file",
      onChange: event => this.setState({
        imgUrl: event.target.files[0]
      })
    })))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AddMail);

/***/ }),

/***/ "kQnE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./util/CustomScrollbars.js
var CustomScrollbars = __webpack_require__("s4Cy");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./app/components/mail/addMail/index.js
var addMail = __webpack_require__("dQWs");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./app/components/mail/MailList/MailListItem/index.js
var __jsx = external_react_default.a.createElement;




const options = ['Delete'];

const MailListItem = ({
  mail,
  onMailSelect,
  onMailChecked,
  onStartSelect,
  onDeleteMail
}) => {
  const {
    0: contactState,
    1: setContactState
  } = Object(external_react_["useState"])(false);
  const date = new Date(mail.creationDate);

  async function onDeleteOneMail(data) {
    const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id);
    setContactState(true);
  }

  const menus = () => __jsx(external_antd_["Menu"], {
    onClick: e => {
      if (e.key === 'Delete') {
        onDeleteOneMail(mail);
      } else {
        undefined.onDeleteContact(undefined.props.contact);
      }
    }
  }, options.map(option => __jsx(external_antd_["Menu"].Item, {
    key: option
  }, option)));

  return __jsx("div", {
    className: "gx-module-list-item gx-mail-cell"
  }, __jsx("div", {
    className: "gx-mail-list-info"
  }, __jsx("div", {
    className: "gx-module-list-content",
    onClick: () => {
      onMailSelect(mail);
    }
  }, __jsx("div", {
    className: "gx-mail-user-des"
  }, __jsx("span", {
    className: "gx-sender-name"
  }, mail.title), __jsx("span", {
    className: "gx-toolbar-separator"
  }, "\xA0"), mail.url ? __jsx("span", {
    className: "gx-d-inline-block gx-text-truncate gx-send-subject"
  }, mail.url) : __jsx("span", {
    className: "gx-d-inline-block gx-text-truncate gx-send-subject"
  })), __jsx("div", {
    className: "gx-message"
  }, mail.text ? __jsx("p", {
    className: "gx-text-truncate"
  }, " ", mail.text) : __jsx("p", {
    className: "gx-text-truncate"
  }, " ", mail.description)), __jsx("div", {
    className: "gx-time"
  }, date.toString())), __jsx(external_antd_["Dropdown"], {
    overlay: menus(),
    placement: "bottomRight",
    trigger: ['click']
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-ellipse-v"
  }))));
};

/* harmony default export */ var MailList_MailListItem = (MailListItem);
// CONCATENATED MODULE: ./app/components/mail/MailList/index.js
var MailList_jsx = external_react_default.a.createElement;




const MailList = ({
  mails,
  onMailSelect,
  onMailChecked,
  onStartSelect,
  onDeleteMail
}) => {
  return MailList_jsx("div", {
    className: "gx-module-list gx-mail-list"
  }, MailList_jsx(CustomScrollbars["a" /* default */], {
    className: "gx-module-content-scroll"
  }, mails.map((mail, index) => MailList_jsx(MailList_MailListItem, {
    key: index,
    mail: mail,
    onMailSelect: onMailSelect,
    onMailChecked: onMailChecked,
    onStartSelect: onStartSelect,
    onDeleteMail: onDeleteMail
  }))));
};

/* harmony default export */ var mail_MailList = __webpack_exports__["a"] = (MailList);

/***/ }),

/***/ "s4Cy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qC9r");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CustomScrollbars = props => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], _extends({}, props, {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: props => __jsx("div", _extends({}, props, {
    style: {
      display: 'none'
    },
    className: "track-horizontal"
  }))
}));

/* harmony default export */ __webpack_exports__["a"] = (CustomScrollbars);

/***/ }),

/***/ "wTKg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./util/CustomScrollbars.js
var CustomScrollbars = __webpack_require__("s4Cy");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./routes/Banner/data/mails.js
/* harmony default export */ var mails = ([{
  'id': '15453ba60d3baa5daaf',
  'from': {
    'name': 'Domnic Harris',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'domnicharris@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }, {
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Fusce a libero pellentesque',
  'message': 'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta. Etiam nec dictum mauris. Ut imperdiet maximus orci vitae ornare. Nullam et libero sit amet tellus ultricies rutrum et sit amet nisl. Pellentesque condimentum diam sed hendrerit facilisis. Suspendisse bibendum convallis quam, sit amet rutrum nisi pulvinar et. Nunc placerat, diam at scelerisque viverra, mi velit auctor nibh, at rhoncus erat ex vitae felis. Integer sed ante eget est rutrum ultrices ut non ipsum.',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [3, 2],
  'selected': false,
  'folder': 0
}, {
  'id': '15453a06c08fb021776',
  'from': {
    'name': 'Garry Sobars',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'danielleobrien@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Nullam id ex at augue pharetra vestibulum eget id mauris.',
  'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
  'time': '4 Dec',
  'read': true,
  'starred': true,
  'important': false,
  'hasAttachments': false,
  'labels': [1, 3],
  'selected': false,
  'folder': 0
}, {
  'id': '1541ca7af66da284177',
  'from': {
    'name': 'Stella Brown',
    'avatar': '',
    'email': 'stellgrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '3 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154297167e781781745',
  'from': {
    'name': 'Steve Jonson',
    'avatar': '',
    'email': 'stevejonson@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Donec ut ante tristique, gravida justo vitae',
  'message': 'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa. Vestibulum tincidunt nisi neque, eu ullamcorper risus aliquet vel. Nunc ut lorem dapibus, interdum nulla vel, euismod elit. Fusce a mollis erat, non egestas dui. Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum iaculis. Morbi eget nibh ut nibh convallis fermentum vitae ac mauris. Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
  'time': '3 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '15427f4c1b7f3953234',
  'from': {
    'name': 'Ira Shorter',
    'avatar': '',
    'email': 'irashorter@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend.\n Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui.  \n \n Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '2 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
}, {
  'id': '15459251a6d6b397565',
  'from': {
    'name': 'Alex Dolgove',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'alexdolgove@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Ut tincidunt massa non elementum fermentum..',
  'message': 'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quam nisi, pulvinar vitae nulla sed, blandit auctor lacus. Vestibulum et semper lorem. Suspendisse interdum est neque, ut tempus eros ultricies et. Proin ultricies elit ac est egestas pharetra. Praesent id mollis enim. Suspendisse quis arcu nec lacus molestie pharetra sit amet in mauris.',
  'time': '2 Dec',
  'read': false,
  'starred': false,
  'important': true,
  'hasAttachments': true,
  'attachments': [{
    'type': 'image',
    'fileName': 'bike',
    'preview': 'https://via.placeholder.com/500x333',
    'url': '',
    'size': '1.1Mb'
  }, {
    'type': 'image',
    'fileName': 'burgers',
    'preview': 'https://via.placeholder.com/500x333',
    'url': '',
    'size': '380kb'
  }, {
    'type': 'image',
    'fileName': 'camera',
    'preview': 'https://via.placeholder.com/600x400',
    'url': 'https://via.placeholder.com/600x400',
    'size': '17Mb'
  }],
  'labels': [1],
  'selected': false,
  'folder': 0
}, {
  'id': '154588a0864d2881124',
  'from': {
    'name': 'Domnic Brown',
    'avatar': 'https://via.placeholder.com/640x420',
    'email': 'domnicbrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum ',
  'message': 'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis. Nullam sit amet dictum neque, vel sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas..',
  'time': '1 Dec',
  'read': false,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154537435d5b32bf11a',
  'from': {
    'name': 'Brian Lara',
    'avatar': '',
    'email': 'brianlara@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Quisque felis nisi, iaculis at lacinia et.',
  'message': 'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. Praesent volutpat convallis molestie. Praesent eu massa gravida, semper lacus id, blandit turpis. Nullam posuere sodales dignissim. Nunc commodo dui sit amet posuere lobortis. Aliquam placerat mi at felis laoreet, non aliquam odio varius. Nulla ultrices leo vel metus finibus, tempor feugiat velit mattis. Donec et commodo nisl, sit amet dignissim mi. Ut ullamcorper lacus sed magna pretium commodo. Sed dictum auctor sem vitae tincidunt. Morbi ut justo sit amet tortor tincidunt aliquet. Aenean at est in lorem pulvinar fermentum.',
  'time': '1 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '1544e43dcdae6ebf876',
  'from': {
    'name': 'Jeson Born',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'jesonborn@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'The standard Lorem Ipsum passage',
  'message': 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse painsAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
  'time': '30 Nov',
  'read': true,
  'starred': false,
  'important': true,
  'hasAttachments': false,
  'labels': [2],
  'selected': false,
  'folder': 0
}, {
  'id': '1543ee3a5b43e0f9f45',
  'from': {
    'name': 'Domnic White',
    'avatar': '',
    'email': 'domnicwhite@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Cras bibendum tortor tortor.',
  'message': 'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor, consequat at pellentesque quis, dapibus vel risus. Praesent aliquam sit amet diam quis luctus. Nulla facilisi. Maecenas id molestie tortor. Nulla eget pretium nulla. Etiam consequat dictum velit, at egestas lacus laoreet ac. Ut facilisis massa vel mi fringilla, non blandit eros dictum. Integer in tellus vitae nisi tincidunt pulvinar. Maecenas ac ante ut felis feugiat ornare id a quam. Quisque feugiat ante quis ornare placerat.',
  'time': '30 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '1543cc4515df3146112',
  'from': {
    'name': 'Jimmy Jo',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'jimmy.jo@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Contrary to popular belief. ',
  'message': 'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\n This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
  'time': '29 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154398a4770d7aaf9a2',
  'from': {
    'name': 'John Smith',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'johnsmith@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Ut elementum rhoncus nisl.',
  'message': ['Suspendisse congue ipsum tincidunt justo dictum, sit amet finibus lectus egestas. Proin fermentum nec risus vitae accumsan. Vivamus non ligula eu urna mattis feugiat. Pellentesque ex felis, commodo sed sem a, pharetra semper purus. Curabitur in quam rhoncus, blandit eros tempor, sodales metus. Pellentesque vel luctus ex. Quisque blandit nisl at tincidunt viverra. Phasellus elementum faucibus leo ac molestie.'],
  'time': '1 Dec',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '15438351f87dcd68567',
  'from': {
    'name': 'Jonny Brown',
    'avatar': '',
    'email': 'jonnnybrown@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Integer nec tempus eros.',
  'message': 'Vestibulum ornare orci hendrerit elit egestas, nec consectetur mi lobortis. Mauris porttitor dolor in neque aliquam, in sollicitudin enim consequat. Fusce pharetra venenatis fermentum.\n \n Maecenas semper nisi quis lectus dictum, vel fermentum purus malesuada. Nunc tincidunt sit amet nunc sit amet eleifend. Sed tellus risus, sagittis id magna in, commodo feugiat risus. Donec commodo pretium dolor non hendrerit. Nullam id leo et quam cursus vestibulum. Ut id aliquet diam, id varius libero. Ut et felis et est eleifend dignissim vitae condimentum ex. Ut a ullamcorper ante, ac laoreet erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  'time': '28 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [0],
  'selected': false,
  'folder': 0
}, {
  'id': '1542d75d929a603125',
  'from': {
    'name': 'Rahim Kadir',
    'avatar': '',
    'email': 'rahimkadir@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Praesent tortor odio, laoreet.',
  'message': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros sit amet lorem viverra tincidunt eget id dolor. Morbi egestas bibendum ipsum at efficitur. Suspendisse at mauris justo. Curabitur elementum ante et lacus blandit, quis faucibus lorem pellentesque. Duis et auctor quam, sed lacinia ante. Nam placerat lacus eu mollis lobortis. Sed placerat, ipsum eu vestibulum gravida, magna sapien feugiat felis, non varius leo mauris vitae ligula. Suspendisse tincidunt nec enim eu porttitor.',
  'time': '27 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 0
}, {
  'id': '154204e45a59b168453',
  'from': {
    'name': 'Kadir',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'kadirm@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Many desktop publishing packages',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a.  \n \n Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. \n \n In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '26 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [0],
  'selected': false,
  'folder': 3
}, {
  'id': '1541dd1e05dfc439216',
  'from': {
    'name': 'Stella Johnson',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'stella-johnson@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Section 1.10.32 of "de',
  'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. \n \n Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem.  In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus.\n Phasellus non tincidunt dui. Nulla eu arcu lorem.  Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem.  ',
  'time': '25 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
}, {
  'id': '1541dd1e05dfc439217',
  'from': {
    'name': 'Steve Smith',
    'avatar': 'https://via.placeholder.com/150x150',
    'email': 'stevesmith@example.com'
  },
  'to': [{
    'name': 'me',
    'email': 'robert.johnson@example.com'
  }],
  'subject': 'Integer nec tempus eros.',
  'message': 'Curabitur id rutrum ex. Morbi tempus libero eget mauris ultricies venenatis. Curabitur eget pellentesque lorem. Morbi in tempor sem, vel posuere odio. Vivamus sit amet efficitur tortor. Fusce in tortor non lorem blandit eleifend quis eu risus. Donec lobortis ex justo, sed suscipit dolor posuere eget.',
  'time': '24 Nov',
  'read': true,
  'starred': false,
  'important': false,
  'hasAttachments': false,
  'labels': [],
  'selected': false,
  'folder': 3
}]);
// CONCATENATED MODULE: ./routes/Banner/data/folders.js
/* harmony default export */ var folders = ([{
  'id': 0,
  'handle': 'inbox',
  'title': 'Inbox',
  'icon': 'inbox'
}, {
  'id': 1,
  'handle': 'sent',
  'title': 'Sent',
  'icon': 'sent'
}, {
  'id': 2,
  'handle': 'drafts',
  'title': 'Drafts',
  'icon': 'draft'
}, {
  'id': 3,
  'handle': 'spam',
  'title': 'Spam',
  'icon': 'spam'
}, {
  'id': 4,
  'handle': 'trash',
  'title': 'Trash',
  'icon': 'trash'
}]);
// CONCATENATED MODULE: ./routes/Banner/data/filters.js
/* harmony default export */ var filters = ([{
  'id': 0,
  'handle': 'starred',
  'title': 'Starred',
  'icon': 'star'
}, {
  'id': 1,
  'handle': 'important',
  'title': 'Important',
  'icon': 'tag'
}]);
// CONCATENATED MODULE: ./routes/Banner/data/labels.js
/* harmony default export */ var labels = ([{
  'id': 0,
  'handle': 'note',
  'title': 'PayPal',
  'color': 'purple'
}, {
  'id': 1,
  'handle': 'paypal',
  'title': 'Upwork',
  'color': 'amber'
}, {
  'id': 2,
  'handle': 'invoice',
  'title': 'In-house',
  'color': 'green'
}, {
  'id': 3,
  'handle': 'amazon',
  'title': 'Clients',
  'color': 'light-blue'
}]);
// CONCATENATED MODULE: ./routes/Banner/data/options.js
/* harmony default export */ var options = ([{
  'title': 'All'
}, {
  'title': 'None'
}, {
  'title': 'Read'
}, {
  'title': 'Unread'
}, {
  'title': 'Starred'
}, {
  'title': 'Unstarred'
}, {
  'title': 'Important'
}, {
  'title': 'Unimportant'
}]);
// EXTERNAL MODULE: ./app/components/mail/MailList/index.js + 1 modules
var MailList = __webpack_require__("kQnE");

// EXTERNAL MODULE: ./app/components/mail/Compose/index.js
var Compose = __webpack_require__("67QK");

// EXTERNAL MODULE: ./app/components/AppModuleHeader/index.js
var AppModuleHeader = __webpack_require__("B4tF");

// CONCATENATED MODULE: ./app/components/mail/MailDetail/index.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MailDetail_options = ['Reply', 'Forward', 'Print'];

class MailDetail_MailDetail extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showDetail: false
    });

    _defineProperty(this, "optionMenu", () => {
      return __jsx(external_antd_["Menu"], {
        id: "long-menu"
      }, MailDetail_options.map(option => __jsx(external_antd_["Menu"].Item, {
        key: option
      }, option)));
    });
  }

  render() {
    const {
      mail,
      onStartSelect,
      onImportantSelect
    } = this.props;
    return __jsx("div", {
      className: "gx-module-detail gx-mail-detail"
    }, __jsx(CustomScrollbars["a" /* default */], {
      className: "gx-module-content-scroll"
    }, __jsx("div", {
      className: "gx-mail-detail-inner"
    }, __jsx("div", {
      className: "gx-mail-header"
    }, __jsx("div", {
      className: "gx-mail-header-content gx-col gx-pl-0"
    }, __jsx("div", {
      className: "gx-subject"
    }, mail.title))), __jsx("hr", null), __jsx("div", {
      className: "gx-mail-user-info gx-ml-0 gx-mb-3"
    }, __jsx("div", {
      className: "gx-sender-name"
    }, mail.url)), __jsx("p", null, mail.text), __jsx("div", null, __jsx("img", {
      src: mail.imgUrl
    })))));
  }

}

/* harmony default export */ var mail_MailDetail = (MailDetail_MailDetail);
// EXTERNAL MODULE: ./util/IntlMessages.js
var IntlMessages = __webpack_require__("b3IY");

// EXTERNAL MODULE: ./app/components/CircularProgress/index.js
var CircularProgress = __webpack_require__("3d09");

// EXTERNAL MODULE: ./routes/Banner/index.css
var Banner = __webpack_require__("C6IW");

// EXTERNAL MODULE: ./app/components/mail/addMail/index.js
var addMail = __webpack_require__("dQWs");

// CONCATENATED MODULE: ./routes/Banner/index.js
var Banner_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Banner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Banner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class Banner_Mail extends external_react_["PureComponent"] {
  async onDeleteMail(data) {
    console.log(data);
    const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id);
    console.log(res.data);
  }

  constructor() {
    super();

    Banner_defineProperty(this, "MailSideBar", mail => {
      return Banner_jsx("div", {
        className: "gx-module-side"
      }, Banner_jsx("div", {
        className: "gx-module-side-header"
      }, "            ", Banner_jsx(external_antd_["Button"], {
        className: "gx-btn-block ant-btn",
        type: "primary",
        "aria-label": "add",
        onClick: this.onAddContact
      }, Banner_jsx("i", {
        className: "icon icon-add gx-mr-2"
      }), Banner_jsx("span", null, "Add New Banner"))));
    });

    Banner_defineProperty(this, "onAddContact", () => {
      this.setState({
        addContactState: true
      });
    });

    Banner_defineProperty(this, "onContactClose", () => {
      this.setState({
        addContactState: false
      });
    });

    Banner_defineProperty(this, "onDeleteMail", () => {
      const mails = this.state.allMail.map(mail => mail.selected && mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        folder: 4,
        selected: false
      }) : mail);
      this.setState({
        alertMessage: 'Mail Deleted Successfully',
        showMessage: true,
        selectedMails: 0,
        allMail: mails,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    Banner_defineProperty(this, "getNavFolders", () => {
      return folders.map((folder, index) => Banner_jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => mail.folder === folder.id);
          this.setState({
            selectedFolder: folder.id,
            noContentFoundMessage: 'No Mail found in selected folder',
            currentMail: null,
            loader: true,
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, Banner_jsx("span", {
        className: `${this.state.selectedFolder === folder.id ? 'active gx-link' : 'gx-link'}`
      }, Banner_jsx("i", {
        className: `icon icon-${folder.icon}`
      }), Banner_jsx("span", null, folder.title))));
    });

    Banner_defineProperty(this, "onFolderMenuItemSelect", e => {
      const id = +e.key;
      const mails = this.state.allMail.map(mail => mail.selected && mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        folder: id,
        selected: false
      }) : mail);
      this.setState({
        selectedMails: 0,
        allMail: mails,
        noContentFoundMessage: 'No Mail found in selected folder',
        alertMessage: 'Mail has been moved successfully',
        showMessage: true,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    Banner_defineProperty(this, "onLabelMenuItemSelect", e => {
      const id = +e.key;
      const mails = this.state.allMail.map(mail => {
        if (mail.selected && mail.folder === this.state.selectedFolder) {
          if (mail.labels.includes(id)) {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: this.removeLabel(mail, id)
            });
          } else {
            return _objectSpread(_objectSpread({}, mail), {}, {
              labels: this.addLabel(mail, id)
            });
          }
        } else {
          return mail;
        }
      });
      this.setState({
        noContentFoundMessage: 'No Mail found in selected label',
        alertMessage: 'Label Updated Successfully',
        showMessage: true,
        allMail: mails,
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    Banner_defineProperty(this, "handleRequestClose", () => {
      this.setState({
        composeMail: false,
        showMessage: false
      });
    });

    Banner_defineProperty(this, "getNavFilters", () => {
      return filters.map((filter, index) => Banner_jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => {
            if (filter.id === 0 && mail.starred && mail.folder === this.state.selectedFolder) {
              return mail;
            } else if (filter.id === 1 && mail.important && mail.folder === this.state.selectedFolder) {
              return mail;
            }

            return null;
          });
          this.setState({
            noContentFoundMessage: 'No Mail found in selected filter',
            loader: true,
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, Banner_jsx("span", {
        className: "gx-link"
      }, Banner_jsx("i", {
        className: `icon icon-${filter.icon}`
      }), Banner_jsx("span", null, filter.title))));
    });

    Banner_defineProperty(this, "onOptionMenuItemSelect", e => {
      switch (e.key) {
        case 'All':
          this.handleRequestClose();
          this.getAllMail();
          break;

        case 'None':
          this.handleRequestClose();
          this.getUnselectedAllMail();
          break;

        case 'Read':
          this.handleRequestClose();
          this.getReadMail();
          break;

        case 'Unread':
          this.handleRequestClose();
          this.getUnreadMail();
          break;

        case 'Starred':
          this.handleRequestClose();
          this.getStarredMail();
          break;

        case 'Unstarred':
          this.handleRequestClose();
          this.getUnStarredMail();
          break;

        case 'Important':
          this.handleRequestClose();
          this.getImportantMail();
          break;

        case 'Unimportant':
          this.handleRequestClose();
          this.getUnimportantMail();
          break;

        default:
          break;
      }
    });

    Banner_defineProperty(this, "onDeleteContact", async data => {
      const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id);
      console.log(res.data);
      this.render();
    });

    Banner_defineProperty(this, "getAllMail", () => {
      let mails = this.state.allMail.map(mail => mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        selected: true
      }) : mail);
      this.setState({
        selectedMails: mails.length,
        allMail: mails,
        optionName: 'All',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    Banner_defineProperty(this, "getUnselectedAllMail", () => {
      let mails = this.state.allMail.map(mail => mail.folder === this.state.selectedFolder ? _objectSpread(_objectSpread({}, mail), {}, {
        selected: false
      }) : mail);
      this.setState({
        selectedMails: 0,
        allMail: mails,
        optionName: 'None',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
    });

    Banner_defineProperty(this, "getReadMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (mail.read) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Read',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getUnreadMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (!mail.read) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Unread',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getStarredMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (mail.starred) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Starred',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getUnStarredMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (!mail.starred) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'UnStarred',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getImportantMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (mail.important) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Important',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getUnimportantMail", () => {
      let selectedMail = 0;
      let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder && mail.folder === this.state.selectedFolder);
      mails = mails.map(mail => {
        if (!mail.important) {
          selectedMail++;
          return _objectSpread(_objectSpread({}, mail), {}, {
            selected: true
          });
        }

        return _objectSpread(_objectSpread({}, mail), {}, {
          selected: false
        });
      });
      this.setState({
        selectedMails: selectedMail,
        optionName: 'Unimportant',
        noContentFoundMessage: 'No Mail found in selected Label',
        folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
      });
      return mails;
    });

    Banner_defineProperty(this, "getNavLabels", () => {
      return labels.map((label, index) => Banner_jsx("li", {
        key: index,
        onClick: () => {
          const filterMails = this.state.allMail.filter(mail => mail.labels.includes(label.id) && mail.folder === this.state.selectedFolder);
          this.setState({
            loader: true,
            noContentFoundMessage: 'No Mail found in selected label',
            folderMails: filterMails
          });
          setTimeout(() => {
            this.setState({
              loader: false
            });
          }, 1500);
        }
      }, Banner_jsx("span", {
        className: "gx-link"
      }, Banner_jsx("i", {
        className: `icon icon-tag gx-text-${label.color}`
      }), Banner_jsx("span", null, label.title))));
    });

    Banner_defineProperty(this, "searchMail", searchText => {
      if (searchText === '') {
        this.setState({
          folderMails: this.state.allMail.filter(mail => !mail.deleted)
        });
      } else {
        const searchMails = this.state.allMail.filter(mail => mail.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        this.setState({
          folderMails: searchMails
        });
      }
    });

    Banner_defineProperty(this, "displayMail", (currentMail, folderMails, noContentFoundMessage) => {
      return Banner_jsx("div", {
        className: "gx-module-box-column"
      }, currentMail === null ? folderMails.length === 0 ? Banner_jsx("div", {
        className: "gx-no-content-found gx-text-light gx-d-flex gx-align-items-center gx-justify-content-center"
      }, noContentFoundMessage) : Banner_jsx(MailList["a" /* default */], {
        mails: folderMails,
        onStartSelect: this.onStartSelect.bind(this),
        onMailSelect: this.onMailSelect.bind(this),
        onMailChecked: this.onMailChecked.bind(this),
        onDeleteMail: this.onDeleteMail.bind(this)
      }) : Banner_jsx(mail_MailDetail, {
        mail: currentMail,
        onStartSelect: this.onStartSelect.bind(this),
        onImportantSelect: this.onImportantSelect.bind(this)
      }));
    });

    Banner_defineProperty(this, "getMailActions", () => {
      return Banner_jsx("div", {
        className: "gx-flex-row gx-align-items-center"
      }, Banner_jsx(external_antd_["Dropdown"], {
        overlay: this.folderMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, Banner_jsx("i", {
        className: "icon icon-folder gx-icon-btn"
      })), Banner_jsx(external_antd_["Dropdown"], {
        overlay: this.labelMenu(),
        placement: "bottomRight",
        trigger: ['click']
      }, Banner_jsx("i", {
        className: "icon icon-tag gx-icon-btn"
      })), Banner_jsx("span", {
        onClick: this.onDeleteMail.bind(this)
      }, Banner_jsx("i", {
        className: "icon icon-trash gx-icon-btn"
      })));
    });

    Banner_defineProperty(this, "optionMenu", () => Banner_jsx(external_antd_["Menu"], {
      id: "option-menu",
      onClick: this.onOptionMenuItemSelect.bind(this)
    }, options.map(option => Banner_jsx(external_antd_["Menu"].Item, {
      key: option.title
    }, option.title))));

    Banner_defineProperty(this, "folderMenu", () => Banner_jsx(external_antd_["Menu"], {
      id: "folder-menu",
      onClick: this.onFolderMenuItemSelect.bind(this)
    }, folders.map(folder => Banner_jsx(external_antd_["Menu"].Item, {
      key: folder.id
    }, folder.title))));

    Banner_defineProperty(this, "labelMenu", () => Banner_jsx(external_antd_["Menu"], {
      id: "label-menu",
      onClick: this.onLabelMenuItemSelect.bind(this)
    }, labels.map(label => Banner_jsx(external_antd_["Menu"].Item, {
      key: label.id
    }, label.title))));

    Banner_defineProperty(this, "onSaveContact", async data => {
      const formData = new FormData();
      formData.append('file', data.imgUrl);
      console.log(formData, data.imgUrl);
      const res = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/banner/upload', formData);
      const result = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/banner', {
        title: data.title,
        text: data.text,
        url: data.url,
        imgUrl: res.data.img
      });
      console.log(result.data);
      window.location.reload();
      /*     const result = await axios.post('http://localhost:8000/banner', data)
          this.setState({onAddContact: false, folderMails: [...this.folderMails, result]}) */
    });

    this.state = {
      searchMail: '',
      addContactState: false,
      noContentFoundMessage: 'No Mail found in selected folder',
      alertMessage: '',
      showMessage: false,
      drawerState: false,
      optionName: 'None',
      anchorEl: null,
      allMail: mails,
      loader: true,
      currentMail: null,
      user: {
        name: 'Robert Johnson',
        email: 'robert@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      selectedMails: 0,
      selectedFolder: 0,
      composeMail: false,
      folderMails: mails.filter(mail => mail.folder === 0)
    };
  }

  async componentDidMount() {
    const result = await external_axios_default.a.get('https://desolate-inlet-76011.herokuapp.com/banner');
    console.log(result.data);
    this.setState({
      loader: false,
      folderMails: result.data,
      allMail: result.data
    });
  }

  onMailChecked(data) {
    data.selected = !data.selected;
    let selectedMail = 0;
    const mails = this.state.folderMails.map(mail => {
      if (mail.selected) {
        selectedMail++;
      }

      if (mail.id === data.id) {
        if (mail.selected) {
          selectedMail++;
        }

        return data;
      } else {
        return mail;
      }
    });
    this.setState({
      selectedMails: selectedMail,
      folderMails: mails
    });
  }

  onAllMailSelect() {
    const selectAll = this.state.selectedMails <= this.state.folderMails.length;

    if (selectAll) {
      this.getAllMail();
    } else {
      this.getUnselectedAllMail();
    }
  }

  removeLabel(mail, label) {
    mail.labels.splice(mail.labels.indexOf(label), 1);

    if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
      this.setState({
        currentMail: _objectSpread(_objectSpread({}, mail), {}, {
          labels: mail.labels
        })
      });
    }

    return mail.labels;
  }

  onStartSelect(data) {
    data.starred = !data.starred;
    this.setState({
      alertMessage: data.starred ? 'Mail Mark as Star' : 'Mail Remove as Star',
      showMessage: true,
      folderMails: this.state.folderMails.map(mail => mail.id === data.id ? data : mail)
    });
  }

  onImportantSelect(data) {
    data.important = !data.important;
    this.setState({
      alertMessage: data.important ? 'Mail Mark as Important' : 'Mail Remove as Important',
      showMessage: true,
      folderMails: this.state.folderMails.map(mail => mail.id === data.id ? data : mail)
    });
  }

  onMailSend(data) {
    this.setState({
      alertMessage: 'Mail Sent Successfully',
      showMessage: true,
      folderMails: this.state.allMail.concat(data),
      allMail: this.state.allMail.concat(data)
    });
  }

  onMailSelect(mail) {
    this.setState({
      loader: true,
      currentMail: mail
    });
    setTimeout(() => {
      this.setState({
        loader: false
      });
    }, 1500);
  }

  addLabel(mail, label) {
    if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
      this.setState({
        currentMail: _objectSpread(_objectSpread({}, mail), {}, {
          labels: mail.labels.concat(label)
        })
      });
    }

    return mail.labels.concat(label);
  }

  updateSearch(evt) {
    this.setState({
      searchMail: evt.target.value
    });
    this.searchMail(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {
      selectedMails,
      loader,
      currentMail,
      drawerState,
      folderMails,
      composeMail,
      user,
      alertMessage,
      showMessage,
      noContentFoundMessage,
      addContactState
    } = this.state;
    return Banner_jsx("div", {
      className: "gx-main-content"
    }, Banner_jsx("div", {
      className: "gx-app-module"
    }, Banner_jsx("div", {
      className: "gx-d-block gx-d-lg-none"
    }, Banner_jsx(external_antd_["Drawer"], {
      placement: "left",
      closable: false,
      visible: drawerState,
      onClose: this.onToggleDrawer.bind(this)
    })), Banner_jsx("div", {
      className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
    }, this.MailSideBar(currentMail)), Banner_jsx("div", {
      className: "gx-module-box"
    }, Banner_jsx("div", {
      className: "gx-module-box-header"
    }, Banner_jsx("span", {
      className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
    }, Banner_jsx("i", {
      className: "icon icon-menu gx-icon-btn",
      "aria-label": "Menu",
      onClick: this.onToggleDrawer.bind(this)
    })), Banner_jsx(AppModuleHeader["a" /* default */], {
      placeholder: "Search mails",
      user: this.state.user,
      onChange: this.updateSearch.bind(this),
      value: this.state.searchMail
    })), Banner_jsx("div", {
      className: "gx-module-box-content"
    }, loader ? Banner_jsx("div", {
      className: "gx-loader-view"
    }, Banner_jsx(CircularProgress["a" /* default */], null)) : this.displayMail(currentMail, folderMails, noContentFoundMessage), Banner_jsx(Compose["a" /* default */], {
      open: composeMail,
      user: user,
      onClose: this.handleRequestClose.bind(this),
      onMailSend: this.onMailSend.bind(this)
    })))), Banner_jsx(addMail["a" /* default */], {
      open: addContactState,
      onSaveContact: this.onSaveContact,
      onContactClose: this.onContactClose,
      onDeleteContact: this.onDeleteContact
    }), showMessage && external_antd_["message"].info(Banner_jsx("span", {
      id: "message-id"
    }, alertMessage), 3, this.handleRequestClose));
  }

}

/* harmony default export */ var routes_Banner = __webpack_exports__["default"] = (Banner_Mail);

/***/ })

};;