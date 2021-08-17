exports.ids = [22];
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

/***/ "cbH2":
/***/ (function(module, exports) {



/***/ }),

/***/ "s3aj":
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

// EXTERNAL MODULE: ./app/components/AppModuleHeader/index.js
var AppModuleHeader = __webpack_require__("B4tF");

// EXTERNAL MODULE: ./util/IntlMessages.js
var IntlMessages = __webpack_require__("b3IY");

// CONCATENATED MODULE: ./app/components/contact/AddAdmin/index.js
var __jsx = external_react_default.a.createElement;




class AddAdmin_AddContact extends external_react_default.a.Component {
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
      password
    } = this.state;
    return __jsx(external_antd_["Modal"], {
      title: contact.name === '' ? __jsx(IntlMessages["a" /* default */], {
        id: "contact.addContact"
      }) : __jsx(IntlMessages["a" /* default */], {
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
          'password': password
        });
        this.setState({
          '_id': null,
          'name': '',
          'email': '',
          'password': ''
        });
      },
      onCancel: onContactClose
    }, __jsx("div", {
      className: "gx-modal-box-row"
    }, __jsx("div", {
      className: "gx-modal-box-form-item"
    }, __jsx("div", {
      className: "gx-form-group"
    }, __jsx(external_antd_["Input"], {
      required: true,
      placeholder: "Name",
      onChange: event => this.setState({
        name: event.target.value
      }),
      defaultValue: name,
      margin: "none"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(external_antd_["Input"], {
      placeholder: "Email",
      onChange: event => this.setState({
        email: event.target.value
      }),
      value: email,
      margin: "normal"
    })), __jsx("div", {
      className: "gx-form-group"
    }, __jsx(external_antd_["Input"], {
      placeholder: "Password",
      onChange: event => this.setState({
        password: event.target.value
      }),
      value: password,
      margin: "normal"
    })))));
  }

}

/* harmony default export */ var AddAdmin = (AddAdmin_AddContact);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./routes/Admins/index.css
var Admins = __webpack_require__("cbH2");

// CONCATENATED MODULE: ./routes/Admins/index.js
var Admins_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











let contactId = 723812738;

class Admins_Contact extends external_react_["Component"] {
  constructor() {
    super();

    _defineProperty(this, "ContactSideBar", user => {
      return Admins_jsx("div", {
        className: "gx-module-side"
      }, Admins_jsx("div", {
        className: "gx-module-side-header"
      }, Admins_jsx(external_antd_["Button"], {
        className: "gx-btn-block ant-btn",
        type: "primary",
        "aria-label": "add",
        onClick: this.onAddContact
      }, Admins_jsx("i", {
        className: "icon icon-add gx-mr-2"
      }), Admins_jsx("span", null, "Add New Admin"))));
    });

    _defineProperty(this, "onContactSelect", data => {
      data.selected = !data.selected;
      let selectedContacts = 0;
      const contactList = this.state.contactList.map(contact => {
        if (contact.selected) {
          selectedContacts++;
        }

        if (contact.id === data.id) {
          if (contact.selected) {
            selectedContacts++;
          }

          return data;
        } else {
          return contact;
        }
      });
      this.setState({
        selectedContacts: selectedContacts,
        contactList: contactList
      });
    });

    _defineProperty(this, "onAddContact", () => {
      this.setState({
        addContactState: true
      });
    });

    _defineProperty(this, "onContactClose", () => {
      this.setState({
        addContactState: false
      });
    });

    _defineProperty(this, "onSaveContact", async data => {
      const admin = await external_axios_default.a.post('https://desolate-inlet-76011.herokuapp.com/admin/register', data);
      this.setState({
        contactList: [...this.state.contactList, data],
        alertMessage: 'Users Updated Successfully',
        showMessage: true,
        allContact: [...this.state.contactList, data]
      }); // this.onFilterOptionSelect(this.state.filterOption);
    });

    _defineProperty(this, "onDeleteContact", async data => {
      const res = await external_axios_default.a.delete('https://desolate-inlet-76011.herokuapp.com/user/' + data._id);
      this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: this.state.allContact.filter(contact => contact._id !== data._id),
        contactList: this.state.allContact.filter(contact => contact._id !== data._id)
      });
    });

    _defineProperty(this, "onDeleteSelectedContact", () => {
      const contacts = this.state.allContact.filter(contact => !contact.selected);
      this.setState({
        alertMessage: 'Contact Deleted Successfully',
        showMessage: true,
        allContact: contacts,
        contactList: contacts,
        selectedContacts: 0
      });
    });

    _defineProperty(this, "filterContact", userName => {
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

    _defineProperty(this, "handleRequestClose", () => {
      this.setState({
        showMessage: false
      });
    });

    _defineProperty(this, "getAllContact", () => {
      let contactList = this.state.allContact.map(contact => contact ? _objectSpread(_objectSpread({}, contact), {}, {
        selected: true
      }) : contact);
      this.setState({
        selectedContacts: contactList.length,
        allContact: contactList,
        contactList: contactList
      });
    });

    _defineProperty(this, "getUnselectedAllContact", () => {
      let contactList = this.state.allContact.map(contact => contact ? _objectSpread(_objectSpread({}, contact), {}, {
        selected: false
      }) : contact);
      this.setState({
        selectedContacts: 0,
        allContact: contactList,
        contactList: contactList
      });
    });

    this.state = {
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
      contactList,
      addContactState,
      drawerState,
      selectedContacts,
      alertMessage,
      showMessage,
      noContentFoundMessage
    } = this.state;
    console.log(contactList);
    return Admins_jsx("div", {
      className: "gx-main-content"
    }, Admins_jsx("div", {
      className: "gx-app-module"
    }, Admins_jsx("div", {
      className: "gx-d-block gx-d-lg-none"
    }, Admins_jsx(external_antd_["Drawer"], {
      placement: "left",
      closable: false,
      visible: drawerState,
      onClose: this.onToggleDrawer.bind(this)
    }, this.ContactSideBar())), Admins_jsx("div", {
      className: "gx-module-sidenav gx-d-none gx-d-lg-flex"
    }, this.ContactSideBar(user)), Admins_jsx("div", {
      className: "gx-module-box"
    }, Admins_jsx("div", {
      className: "gx-module-box-header"
    }, Admins_jsx("span", {
      className: "gx-drawer-btn gx-d-flex gx-d-lg-none"
    }, Admins_jsx("i", {
      className: "icon icon-menu gx-icon-btn",
      "aria-label": "Menu",
      onClick: this.onToggleDrawer.bind(this)
    })), Admins_jsx(AppModuleHeader["a" /* default */], {
      placeholder: "Search contact",
      notification: false,
      apps: false,
      user: this.state.user,
      onChange: this.updateContactUser.bind(this),
      value: this.state.searchUser
    })), Admins_jsx("div", {
      className: "gx-module-box-content"
    }, Admins_jsx(CustomScrollbars["a" /* default */], {
      className: "gx-module-content-scroll"
    }, contactList.length === 0 ? Admins_jsx("div", {
      className: "gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center"
    }, noContentFoundMessage) : Admins_jsx(ContactList["a" /* default */], {
      contactList: contactList,
      onContactSelect: this.onContactSelect.bind(this),
      onDeleteContact: this.onDeleteContact.bind(this),
      onSaveContact: this.onSaveContact.bind(this)
    }))))), Admins_jsx(AddAdmin, {
      open: addContactState,
      contact: {
        'id': contactId++,
        'name': '',
        'thumb': '',
        'email': '',
        'phone': '',
        'designation': '',
        'selected': false,
        'starred': false,
        'frequently': false
      },
      onSaveContact: this.onSaveContact,
      onContactClose: this.onContactClose,
      onDeleteContact: this.onDeleteContact
    }), showMessage && external_antd_["message"].info(Admins_jsx("span", {
      id: "message-id"
    }, alertMessage), 3, this.handleRequestClose));
  }

}

/* harmony default export */ var routes_Admins = __webpack_exports__["default"] = (Admins_Contact);

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

/***/ })

};;