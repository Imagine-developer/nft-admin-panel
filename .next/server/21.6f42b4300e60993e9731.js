exports.ids = [21];
exports.modules = {

/***/ "2BsP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  'id': 1457690400,
  'name': 'Admin',
  'thumb': "https://via.placeholder.com/150x150",
  'email': 'test@test.com',
  'phone': 'Admin',
  'designation': 'Admin',
  'selected': false,
  'starred': false,
  'frequently': true
}]);

/***/ }),

/***/ "5TLD":
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





class AddContact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const TextArea = {
      Input: antd__WEBPACK_IMPORTED_MODULE_1__["Input"]
    };
    const Option = {
      Select: antd__WEBPACK_IMPORTED_MODULE_1__["Select"]
    };
    const {
      id,
      collect,
      description,
      img,
      royalty,
      title,
      pdf
    } = props.contact;
    this.state = {
      id,
      title,
      collect,
      description,
      verified: false,
      img,
      pdf,
      royalty
    };
  }

  render() {
    const {
      onSaveContact,
      onContactClose,
      open,
      contact
    } = this.props;
    const {
      collect,
      description,
      royalty,
      img,
      pdf,
      verified,
      title
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: contact.description === '' ? __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "contact.addContact"
      }) : __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "contact.saveContact"
      }),
      toggle: onContactClose,
      visible: open,
      closable: false,
      onOk: () => {
        onContactClose();
        onSaveContact({
          collect,
          description,
          royalty,
          img,
          pdf,
          title,
          verified
        });
        this.setState({
          'collect': '',
          'description': '',
          'img': '',
          'royalty': 0,
          'verified': false,
          'pdf': '',
          'title': ''
        });
      },
      onCancel: onContactClose
    }, __jsx("div", {
      className: "gx-modal-box-row"
    }, __jsx("div", {
      className: "gx-modal-box-form-item"
    }, img ? __jsx("div", {
      className: "gx-form-group"
    }, __jsx("img", {
      src: URL.createObjectURL(img),
      className: "photo"
    })) : null, __jsx("div", {
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      required: true,
      defaultValue: "popular"
    }, __jsx(Option, null, "Marketplace"), __jsx(Option, null, "FineArt"))), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      required: true,
      placeholder: "collection",
      onChange: event => this.setState({
        collect: event.target.value
      }),
      defaultValue: collect,
      margin: "none"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rows: 4,
      placeholder: "description",
      onChange: event => this.setState({
        description: event.target.value
      }),
      value: description,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "royalty",
      type: "number",
      onChange: event => this.setState({
        royalty: event.target.value
      }),
      value: royalty,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx("div", null, "Image"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "img",
      type: "file",
      onChange: event => this.setState({
        img: event.target.files[0]
      }),
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx("div", null, "Pdf"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "pdf",
      type: "file",
      onChange: event => this.setState({
        pdf: event.target.files[0]
      }),
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      placeholder: "verified",
      type: "checkbox",
      onChange: event => this.setState({
        verified: event.target.checked
      }),
      margin: "normal"
    }, "Verified")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AddContact);

/***/ }),

/***/ "6+zO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b3IY");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class AddContact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const {
      id,
      thumb,
      name,
      email,
      wallet,
      selected,
      starred,
      frequently
    } = props.contact;
    this.state = {
      id,
      thumb,
      name,
      email,
      wallet,
      selected,
      starred,
      frequently
    };
  }

  render() {
    const {
      onSaveContact,
      onContactClose,
      open,
      contact
    } = this.props;
    const {
      _id,
      name,
      email,
      wallet
    } = this.state;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: contact.name === '' ? __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "contact.addContact"
      }) : __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "contact.saveContact"
      }),
      toggle: onContactClose,
      visible: open,
      closable: false,
      onOk: () => {
        if (name === '') return;
        onContactClose();
        onSaveContact({
          '_id': contact._id,
          'name': name,
          'email': email,
          'wallet': wallet
        });
        this.setState({
          '_id': null,
          'name': '',
          'email': '',
          'wallet': ''
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
      placeholder: "Name",
      onChange: event => this.setState({
        name: event.target.value
      }),
      defaultValue: name,
      margin: "none"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Email",
      onChange: event => this.setState({
        email: event.target.value
      }),
      value: email,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Wallet",
      onChange: event => this.setState({
        wallet: event.target.value
      }),
      value: wallet,
      margin: "normal"
    })))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AddContact);

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

/***/ "Vwks":
/***/ (function(module, exports) {



/***/ }),

/***/ "WbgB":
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

// EXTERNAL MODULE: ./routes/Contact/data/contactList.js
var data_contactList = __webpack_require__("2BsP");

// EXTERNAL MODULE: ./app/components/contact/ContactList/index.js + 1 modules
var ContactList = __webpack_require__("ukZC");

// CONCATENATED MODULE: ./app/components/mail/TokenDetail/index.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const options = ['Reply', 'Forward', 'Print'];

class TokenDetail_MailDetail extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showDetail: false
    });

    _defineProperty(this, "optionMenu", () => {
      return __jsx(external_antd_["Menu"], {
        id: "long-menu"
      }, options.map(option => __jsx(external_antd_["Menu"].Item, {
        key: option
      }, option)));
    });
  }

  render() {
    const {
      mail
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
    }, mail.collect))), __jsx("hr", null), __jsx("div", {
      className: "gx-mail-user-info gx-ml-0 gx-mb-3"
    }), __jsx("p", null, mail.description), __jsx("div", null, __jsx("img", {
      src: mail.img
    })))));
  }

}

/* harmony default export */ var TokenDetail = (TokenDetail_MailDetail);
// EXTERNAL MODULE: ./app/components/mail/addMail/index.js
var addMail = __webpack_require__("dQWs");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./app/components/mail/TokenList/TokenListItem/index.js
var TokenListItem_jsx = external_react_default.a.createElement;






const TokenListItem_options = ['Delete', 'Edit', 'Pdf'];

const TokenListItem = ({
  mail,
  onMailSelect,
  onMailChecked,
  onStartSelect,
  onDeleteMail,
  onSaveContact
}) => {
  const {
    0: contactState,
    1: setContactState
  } = Object(external_react_["useState"])(false);

  async function onDeleteOneMail(data) {
    const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/banner/' + data._id);
    setContactState(true);
  }

  const menus = () => TokenListItem_jsx(external_antd_["Menu"], {
    onClick: e => {
      if (e.key === 'Edit') {
        onSaveContact(mail);
      } else if (e.key === 'Pdf') {
        router_default.a.push(mail.pdf);
      } else {
        onDeleteOneMail(mail);
      }
    }
  }, TokenListItem_options.map(option => TokenListItem_jsx(external_antd_["Menu"].Item, {
    key: option
  }, option)));

  console.log(mail);
  return TokenListItem_jsx("div", {
    className: "gx-module-list-item gx-mail-cell"
  }, TokenListItem_jsx("div", {
    className: "gx-module-list-icon"
  }, TokenListItem_jsx("div", {
    className: "gx-ml-2 gx-d-none gx-d-sm-flex"
  }, TokenListItem_jsx(external_antd_["Avatar"], {
    size: "large",
    src: mail.img
  }))), TokenListItem_jsx("div", {
    className: "gx-mail-list-info"
  }, TokenListItem_jsx("div", {
    className: "gx-module-list-content",
    onClick: () => {
      onMailSelect(mail);
    }
  }, TokenListItem_jsx("div", {
    className: "gx-mail-user-des"
  }, TokenListItem_jsx("span", {
    className: "gx-sender-name"
  }, mail.collect)), TokenListItem_jsx("div", {
    className: "gx-message"
  }, TokenListItem_jsx("p", {
    className: "gx-text-truncate"
  }, " ", mail.description)), TokenListItem_jsx("div", {
    className: "gx-time"
  }, new Date(mail.creationDate).toString())), TokenListItem_jsx(external_antd_["Dropdown"], {
    overlay: menus(),
    placement: "bottomRight",
    trigger: ['click']
  }, TokenListItem_jsx("i", {
    className: "gx-icon-btn icon icon-ellipse-v"
  }))));
};

/* harmony default export */ var TokenList_TokenListItem = (TokenListItem);
// CONCATENATED MODULE: ./app/components/mail/TokenList/index.js
var TokenList_jsx = external_react_default.a.createElement;




const TokenList = ({
  contactList,
  onMailSelect,
  onMailChecked,
  onStartSelect,
  onDeleteMail,
  onSaveContact
}) => {
  return TokenList_jsx("div", {
    className: "gx-module-list gx-mail-list"
  }, TokenList_jsx(CustomScrollbars["a" /* default */], {
    className: "gx-module-content-scroll"
  }, contactList.map((mail, index) => TokenList_jsx(TokenList_TokenListItem, {
    key: index,
    mail: mail,
    onMailSelect: onMailSelect,
    onMailChecked: onMailChecked,
    onStartSelect: onStartSelect,
    onDeleteMail: onDeleteMail,
    onSaveContact: onSaveContact
  }))));
};

/* harmony default export */ var mail_TokenList = (TokenList);
// EXTERNAL MODULE: ./app/components/AppModuleHeader/index.js
var AppModuleHeader = __webpack_require__("B4tF");

// EXTERNAL MODULE: ./app/components/contact/AddContact/index.js
var AddContact = __webpack_require__("6+zO");

// EXTERNAL MODULE: ./app/components/contact/AddToken/index.js
var AddToken = __webpack_require__("5TLD");

// EXTERNAL MODULE: ./util/IntlMessages.js
var IntlMessages = __webpack_require__("b3IY");

// EXTERNAL MODULE: ./routes/Tokens/index.css
var Tokens = __webpack_require__("Vwks");

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__("MDWq");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: ./routes/Tokens/metamask.js
var Tokens_metamask = __webpack_require__("zEqJ");

// CONCATENATED MODULE: ./routes/Tokens/index.js
var Tokens_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Tokens_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tokens_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















let contactId = 723812738;

class Tokens_Contact extends external_react_["Component"] {
  async componentWillMount() {
    const res = await external_axios_default.a.get('https://desolate-inlet-76011.herokuapp.com/nft');
    console.log(res.data);
    this.setState({
      contactList: res.data,
      allContact: res.data
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

  constructor() {
    super();

    Tokens_defineProperty(this, "ContactSideBar", user => {
      return Tokens_jsx("div", {
        className: "gx-module-side"
      }, Tokens_jsx("div", {
        className: "gx-module-side-header"
      }, Tokens_jsx(external_antd_["Button"], {
        className: "gx-btn-block ant-btn",
        type: "primary",
        "aria-label": "add",
        onClick: this.onAddContact
      }, Tokens_jsx("i", {
        className: "icon icon-add gx-mr-2"
      }), Tokens_jsx("span", null, "Add New NFT"))));
    });

    Tokens_defineProperty(this, "onAddContact", () => {
      this.setState({
        addContactState: true
      });
    });

    Tokens_defineProperty(this, "onContactClose", () => {
      this.setState({
        addContactState: false
      });
    });

    Tokens_defineProperty(this, "onSaveContact", async data => {
      const web3 = new external_web3_default.a(external_web3_default.a.givenProvider || new external_web3_default.a.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/62b7d9f5f9844b8582f51e4b5c906c09"));
      const NFT = new web3.eth.Contract([{
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newAdmin",
          "type": "address"
        }],
        "name": "addAdmin",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }],
        "name": "addOwner",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_oldValue",
          "type": "uint256"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }],
        "name": "ApprovalForAll",
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }, {
          "internalType": "uint256",
          "name": "_currentValue",
          "type": "uint256"
        }, {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }, {
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        }, {
          "internalType": "uint256[]",
          "name": "_values",
          "type": "uint256[]"
        }],
        "name": "batchTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
        }, {
          "internalType": "string",
          "name": "_uriFile",
          "type": "string"
        }, {
          "internalType": "string",
          "name": "_uriPdf",
          "type": "string"
        }],
        "name": "create",
        "outputs": [{
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }, {
          "internalType": "address[]",
          "name": "_to",
          "type": "address[]"
        }, {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newAdmin",
          "type": "address"
        }],
        "name": "removeAdmin",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }],
        "name": "removeOwner",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }, {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        }, {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "_values",
          "type": "uint256[]"
        }],
        "name": "TransferBatch",
        "type": "event"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }, {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "constant": false,
        "inputs": [{
          "internalType": "address payable",
          "name": "_newFund",
          "type": "address"
        }],
        "name": "transferFund",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "previousFund",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "newFund",
          "type": "address"
        }],
        "name": "TransferFund",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        }, {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }, {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }],
        "name": "TransferSingle",
        "type": "event"
      }, {
        "anonymous": false,
        "inputs": [{
          "indexed": false,
          "internalType": "string",
          "name": "_value",
          "type": "string"
        }, {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }],
        "name": "URI",
        "type": "event"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "name": "adminList",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "name": "admins",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }],
        "name": "allowance",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }, {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address[]",
          "name": "_owners",
          "type": "address[]"
        }, {
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        }],
        "name": "balanceOfBatch",
        "outputs": [{
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "name": "creators",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "fund",
        "outputs": [{
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "isAdmin",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }],
        "name": "isApprovedForAll",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "string",
          "name": "",
          "type": "string"
        }],
        "name": "mapStringOfURI",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "name": "mapUri",
        "outputs": [{
          "internalType": "string",
          "name": "file",
          "type": "string"
        }, {
          "internalType": "string",
          "name": "pdf",
          "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [],
        "name": "nonce",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "name": "owners",
        "outputs": [{
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, {
        "constant": true,
        "inputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "name": "ownersList",
        "outputs": [{
          "internalType": "address",
          "name": "",
          "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }], "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b");
      const metamask = await Object(Tokens_metamask["a" /* default */])();

      const subscription = async topic => {
        await web3.eth.subscribe('logs', {
          address: "0x1bD9A75e6BCF3B9488f0D994C9D84B65AdDeF348",
          topics: [topic]
        }, (error, result) => {
          console.log(error);
          console.log(result);
        });
      };

      const walletAddress = metamask.userAddress;
      const wallet = metamask.web3;
      console.log('metamask connected');
      console.log('NFT contract connected');
      console.log(NFT);
      console.log('walletAddress: ', walletAddress);
      console.log('web3: ', web3);
      const formData = new FormData();
      formData.append('file', data.img);
      const formDataPdf = new FormData();
      formDataPdf.append('file', data.pdf);
      const resImgUrl = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/nft/upload', formData);
      const resPdfUrl = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/nft/uploadPdf', formDataPdf);
      const ipfsImgHash = resImgUrl.data.result.IpfsHash;
      const ipfsPdfHash = resPdfUrl.data.result.IpfsHash;
      const resToken = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/nft/create', {
        title: data.title,
        collection: data.collect,
        verified: data.verified,
        royalty: data.royalty,
        description: data.description,
        img: resImgUrl.data.url,
        pdf: resPdfUrl.data.url,
        wallet: walletAddress
      });
      let txData = NFT.methods.create(1, ipfsImgHash, ipfsPdfHash).encodeABI();
      wallet.eth.sendTransaction({
        to: "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b",
        from: walletAddress,
        data: txData
      }, function (error, res) {
        console.log(error);
        console.log(res);
        subscription("0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62");
      });
      txData = NFT.methods.setApprovalForAll("0x1bD9A75e6BCF3B9488f0D994C9D84B65AdDeF348", true).encodeABI();
      wallet.eth.sendTransaction({
        to: "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b",
        from: walletAddress,
        data: txData
      }, function (error, res) {
        console.log(error);
        console.log(res);
        subscription("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31");
      });
      console.log(resImgUrl, resPdfUrl, data);
      console.log(resToken.data);
      /*   const resToken = await axios.post('http://localhost:8000/nft/create', { wallet: data.wallet, data})
        console.log(resToken.data) */
      // this.onFilterOptionSelect(this.state.filterOption);
    });

    Tokens_defineProperty(this, "onDeleteContact", async data => {
      const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/user/' + data._id);
      this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: this.state.allContact.filter(contact => contact._id !== data._id),
        contactList: this.state.allContact.filter(contact => contact._id !== data._id)
      });
    });

    Tokens_defineProperty(this, "onDeleteSelectedContact", () => {
      const contacts = this.state.allContact.filter(contact => !contact.selected);
      this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: contacts,
        contactList: contacts,
        selectedContacts: 0
      });
    });

    Tokens_defineProperty(this, "filterContact", userName => {
      const {
        filterOption
      } = this.state;

      if (userName === '') {
        this.setState({
          contactList: this.state.allContact
        });
      } else {
        const filterContact = this.state.allContact.filter(contact => contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);

        if (filterOption === 'All contacts') {
          this.setState({
            contactList: filterContact
          });
        } else if (filterOption === 'Frequently contacted') {
          this.setState({
            contactList: filterContact.filter(contact => contact.frequently)
          });
        } else if (filterOption === 'Starred contacts') {
          this.setState({
            contactList: filterContact.filter(contact => contact.starred)
          });
        }
      }
    });

    Tokens_defineProperty(this, "handleRequestClose", () => {
      this.setState({
        showMessage: false
      });
    });

    Tokens_defineProperty(this, "getAllContact", () => {
      let contactList = this.state.allContact.map(contact => contact ? _objectSpread(_objectSpread({}, contact), {}, {
        selected: true
      }) : contact);
      this.setState({
        selectedContacts: contactList.length,
        allContact: contactList,
        contactList: contactList
      });
    });

    Tokens_defineProperty(this, "getUnselectedAllContact", () => {
      let contactList = this.state.allContact.map(contact => contact ? _objectSpread(_objectSpread({}, contact), {}, {
        selected: false
      }) : contact);
      this.setState({
        selectedContacts: 0,
        allContact: contactList,
        contactList: contactList
      });
    });

    const _web = new external_web3_default.a(external_web3_default.a.givenProvider || new external_web3_default.a.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/62b7d9f5f9844b8582f51e4b5c906c09"));

    const _NFT = new _web.eth.Contract([{
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_newAdmin",
        "type": "address"
      }],
      "name": "addAdmin",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }],
      "name": "addOwner",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_oldValue",
        "type": "uint256"
      }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }],
      "name": "Approval",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }, {
        "indexed": false,
        "internalType": "bool",
        "name": "_approved",
        "type": "bool"
      }],
      "name": "ApprovalForAll",
      "type": "event"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "_currentValue",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }, {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      }, {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }],
      "name": "batchTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "uint256",
        "name": "_initialSupply",
        "type": "uint256"
      }, {
        "internalType": "string",
        "name": "_uriFile",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "_uriPdf",
        "type": "string"
      }],
      "name": "create",
      "outputs": [{
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }, {
        "internalType": "address[]",
        "name": "_to",
        "type": "address[]"
      }, {
        "internalType": "uint256[]",
        "name": "_amounts",
        "type": "uint256[]"
      }],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_newAdmin",
        "type": "address"
      }],
      "name": "removeAdmin",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }],
      "name": "removeOwner",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }, {
        "internalType": "bool",
        "name": "_approved",
        "type": "bool"
      }],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      }, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }],
      "name": "TransferBatch",
      "type": "event"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }, {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "internalType": "address payable",
        "name": "_newFund",
        "type": "address"
      }],
      "name": "transferFund",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousFund",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "newFund",
        "type": "address"
      }],
      "name": "TransferFund",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }],
      "name": "TransferSingle",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "string",
        "name": "_value",
        "type": "string"
      }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }],
      "name": "URI",
      "type": "event"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "adminList",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "name": "admins",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }],
      "name": "allowance",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }],
      "name": "balanceOf",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address[]",
        "name": "_owners",
        "type": "address[]"
      }, {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      }],
      "name": "balanceOfBatch",
      "outputs": [{
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "creators",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "fund",
      "outputs": [{
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "isAdmin",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      }],
      "name": "isApprovedForAll",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "name": "mapStringOfURI",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "mapUri",
      "outputs": [{
        "internalType": "string",
        "name": "file",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "pdf",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "nonce",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "name": "owners",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "ownersList",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }], "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b");

    this.state = {
      currentMail: null,
      noContentFoundMessage: 'No Contact found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: 'https://via.placeholder.com/150x150'
      },
      searchUser: '',
      filterOption: 'All contacts',
      allContact: data_contactList["a" /* default */],
      contactList: data_contactList["a" /* default */],
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false
    };
  }

  onAllContactSelect() {
    const selectAll = this.state.selectedContacts < this.state.contactList.length;

    if (selectAll) {
      this.getAllContact();
    } else {
      this.getUnselectedAllContact();
    }
  }

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value
    });
    this.filterContact(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {
      user,
      currentMail,
      contactList,
      addContactState,
      drawerState,
      selectedContacts,
      alertMessage,
      showMessage,
      noContentFoundMessage
    } = this.state;
    console.log(contactList);
    return Tokens_jsx("div", {
      className: "gx-main-content"
    }, Tokens_jsx("div", {
      className: "gx-app-module"
    }, Tokens_jsx("div", {
      className: "gx-d-block gx-d-lg-none"
    }, Tokens_jsx(external_antd_["Drawer"], {
      placement: "left",
      closable: false,
      visible: drawerState,
      onClose: this.onToggleDrawer.bind(this)
    }, this.ContactSideBar())), Tokens_jsx("div", {
      className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
    }, this.ContactSideBar(user)), Tokens_jsx("div", {
      className: "gx-module-box"
    }, Tokens_jsx("div", {
      className: "gx-module-box-header"
    }, Tokens_jsx("span", {
      className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
    }, Tokens_jsx("i", {
      className: "icon icon-menu gx-icon-btn",
      "aria-label": "Menu",
      onClick: this.onToggleDrawer.bind(this)
    })), Tokens_jsx(AppModuleHeader["a" /* default */], {
      placeholder: "Search contact",
      notification: false,
      apps: false,
      user: this.state.user,
      onChange: this.updateContactUser.bind(this),
      value: this.state.searchUser
    })), Tokens_jsx("div", {
      className: "gx-module-box-content"
    }, Tokens_jsx(CustomScrollbars["a" /* default */], {
      className: "gx-module-content-scroll"
    }, currentMail === null ? [contactList.length === 0 ? Tokens_jsx("div", {
      className: "gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center"
    }, noContentFoundMessage) : Tokens_jsx(mail_TokenList, {
      contactList: contactList,
      onMailSelect: this.onMailSelect.bind(this),
      onDeleteMail: this.onDeleteContact.bind(this),
      onSaveContact: this.onSaveContact.bind(this)
    })] : Tokens_jsx(TokenDetail, {
      mail: currentMail
    }))))), Tokens_jsx(AddToken["a" /* default */], {
      open: addContactState,
      contact: {
        'collect': '',
        'img': '',
        'royalty': '',
        'description': ''
      },
      onSaveContact: this.onSaveContact,
      onContactClose: this.onContactClose,
      onDeleteContact: this.onDeleteContact
    }), showMessage && external_antd_["message"].info(Tokens_jsx("span", {
      id: "message-id"
    }, alertMessage), 3, this.handleRequestClose));
  }

}

/* harmony default export */ var routes_Tokens = __webpack_exports__["default"] = (Tokens_Contact);

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

/***/ "ukZC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./app/components/contact/AddContact/index.js
var AddContact = __webpack_require__("6+zO");

// EXTERNAL MODULE: ./app/components/contact/AddToken/index.js
var AddToken = __webpack_require__("5TLD");

// CONCATENATED MODULE: ./app/components/contact/ContactList/ContactCell/index.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const options = ['Edit', 'Delete'];

class ContactCell_ContactCell extends external_react_default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "onContactClose", () => {
      this.setState({
        addContactState: false
      });
    });

    _defineProperty(this, "onDeleteContact", contact => {
      this.setState({
        addContactState: false
      });
      this.props.onDeleteContact(contact);
    });

    _defineProperty(this, "onEditContact", () => {
      this.setState({
        addContactState: true
      });
    });

    _defineProperty(this, "menus", () => __jsx(external_antd_["Menu"], {
      onClick: e => {
        if (e.key === 'Edit') {
          this.onEditContact();
        } else {
          this.onDeleteContact(this.props.contact);
        }
      }
    }, options.map(option => __jsx(external_antd_["Menu"].Item, {
      key: option
    }, option))));

    this.state = {
      addContactState: false
    };
  }

  render() {
    const {
      contact,
      onContactSelect,
      onSaveContact
    } = this.props;
    const {
      addContactState
    } = this.state;
    return __jsx("div", {
      className: "gx-contact-item"
    }, contact.description ? __jsx("div", {
      className: "gx-module-list-icon"
    }, __jsx("div", {
      className: "gx-ml-2 gx-d-none gx-d-sm-flex"
    }, __jsx(external_antd_["Avatar"], {
      size: "large",
      src: contact.img
    }))) : null, __jsx("div", {
      className: "gx-module-list-info gx-contact-list-info"
    }, __jsx("div", {
      className: "gx-module-contact-content"
    }, __jsx("p", {
      className: "gx-mb-1"
    }, contact.description ? __jsx("span", {
      className: "gx-text-truncate gx-contact-name"
    }, " ", contact.collect, " ") : __jsx("span", {
      className: "gx-text-truncate gx-contact-name"
    }, " ", contact.name, " ")), __jsx("div", {
      className: "gx-text-muted"
    }, contact.description ? __jsx("span", {
      className: "gx-email gx-d-inline-block gx-mr-2"
    }, contact.description, ",") : __jsx("span", {
      className: "gx-email gx-d-inline-block gx-mr-2"
    }, contact.email, ","), contact.description ? __jsx("span", {
      className: "gx-phone gx-d-inline-block"
    }) : __jsx("span", {
      className: "gx-phone gx-d-inline-block"
    }, contact.wallet))), __jsx("div", {
      className: "gx-module-contact-right"
    }, __jsx(external_antd_["Dropdown"], {
      overlay: this.menus(),
      placement: "bottomRight",
      trigger: ['click']
    }, __jsx("i", {
      className: "gx-icon-btn icon icon-ellipse-v"
    })), addContactState && [contact.description ? __jsx(AddToken["a" /* default */], {
      open: addContactState,
      contact: contact,
      onSaveContact: onSaveContact,
      onContactClose: this.onContactClose,
      onDeleteContact: this.onDeleteContact
    }) : __jsx(AddContact["a" /* default */], {
      open: addContactState,
      contact: contact,
      onSaveContact: onSaveContact,
      onContactClose: this.onContactClose,
      onDeleteContact: this.onDeleteContact
    })])));
  }

}

/* harmony default export */ var ContactList_ContactCell = (ContactCell_ContactCell);
// CONCATENATED MODULE: ./app/components/contact/ContactList/index.js
var ContactList_jsx = external_react_default.a.createElement;



const ContactList = ({
  contactList,
  onContactSelect,
  onSaveContact,
  onDeleteContact
}) => {
  return ContactList_jsx("div", {
    className: "gx-contact-main-content"
  }, contactList.map((contact, index) => ContactList_jsx(ContactList_ContactCell, {
    key: index,
    contact: contact,
    onDeleteContact: onDeleteContact,
    onSaveContact: onSaveContact,
    onContactSelect: onContactSelect
  })));
};

/* harmony default export */ var contact_ContactList = __webpack_exports__["a"] = (ContactList);

/***/ }),

/***/ "zEqJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MDWq");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);


const connectMetaMask = async () => {
  let userAddress, web3;

  if (window.ethereum) {
    web3 = await new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.ethereum);
    console.log("connect MetaMask");

    try {
      await window.ethereum.enable().then(async function () {
        // User has allowed account access to DApp...
        console.log("step2");

        if (web3) {
          if (window.ethereum.selectedAddress !== undefined) {
            userAddress = window.ethereum.selectedAddress;
          } else if (web3.givenProvider.MetamaskInpageProvider !== undefined) {
            userAddress = web3.givenProvider.MetamaskInpageProvider;
          } else if (web3.givenProvider.selectedAddress !== undefined) {
            userAddress = web3.givenProvider.selectedAddress;
          }
        }
      });
      console.log("userAddress: ", userAddress);
      return {
        userAddress,
        web3
      };
    } catch (e) {
      // User has denied account access to DApp...
      console.log(e);
    }
  } // Legacy DApp Browsers
  else if (window.web3) {
    web3 = await new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3.currentProvider);
    console.log(web3);
    console.log("connect MetaMask");

    if (web3) {
      if (window.ethereum.selectedAddress !== undefined) {
        userAddress = window.ethereum.selectedAddress;
      } else if (web3.givenProvider.MetamaskInpageProvider !== undefined) {
        userAddress = web3.givenProvider.MetamaskInpageProvider;
      } else if (web3.givenProvider.selectedAddress !== undefined) {
        userAddress = web3.givenProvider.selectedAddress;
      }

      console.log("userAddress: ", userAddress);
    }

    return {
      userAddress,
      web3
    };
  } // Non-DApp Browsers
  else {
    console.log("You have to install MetaMask !");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (connectMetaMask);

/***/ })

};;