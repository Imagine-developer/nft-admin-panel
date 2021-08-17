
import React, {Component} from "react";
import {Button, Checkbox, Drawer, message} from "antd";
import CustomScrollbars from "../../util/CustomScrollbars";

import contactList from '../../routes/Contact/data/contactList'
import ContactList from "../../app/components/contact/ContactList";
import AppModuleHeader from "../../app/components/AppModuleHeader";
import AddContact from "../../app/components/contact/AddContact";
import IntlMessages from "../../util/IntlMessages";
import axios from 'axios'
import './index.css';
import Web3 from 'web3'
import connectMetaMask from "./../Tokens/metamask";

let contactId = 723812738;

class Contact extends Component {
  async componentWillMount(){
   /*  const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/62b7d9f5f9844b8582f51e4b5c906c09"));
  const NFT = new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"addOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_currentValue","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_initialSupply","type":"uint256"},{"internalType":"string","name":"_uriFile","type":"string"},{"internalType":"string","name":"_uriPdf","type":"string"}],"name":"create","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"removeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"removeOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_newFund","type":"address"}],"name":"transferFund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousFund","type":"address"},{"indexed":true,"internalType":"address","name":"newFund","type":"address"}],"name":"TransferFund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"adminList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creators","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fund","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"mapStringOfURI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mapUri","outputs":[{"internalType":"string","name":"file","type":"string"},{"internalType":"string","name":"pdf","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownersList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}], "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b")
 */
    const res = await axios.get('https://desolate-inlet-76011.herokuapp.com/whitelist')
    this.setState({contactList: res.data, allContact: res.data})
    /* const metamask = await connectMetaMask()
    const walletAddress = metamask.userAddress
    const wallet = metamask.web3
        let txData = NFT.methods.addOwner("0x0832d297c0e33ccde794ba52782c6fc8dfbb3ea9").encodeABI()
        wallet.eth.sendTransaction({
                to: "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b",
                from: walletAddress,
                data: txData
            },
            function(error, res){
                console.log(error);
                console.log(res);
            }
        )     */
    }


  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onAddContact}>
              <i className="icon icon-add gx-mr-2"/>
              <span>Add New Wallet</span>
            </Button>
      </div>
    </div>

  };

  onContactSelect = (data) => {
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
      }
    );
    this.setState({
      selectedContacts: selectedContacts,
      contactList: contactList
    });

  };


  onAddContact = () => {
    this.setState({addContactState: true});
  };
  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onSaveContact = async (data) => {
    const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/62b7d9f5f9844b8582f51e4b5c906c09"));
  const NFT = new web3.eth.Contract([{"constant":false,"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"addOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_currentValue","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_initialSupply","type":"uint256"},{"internalType":"string","name":"_uriFile","type":"string"},{"internalType":"string","name":"_uriPdf","type":"string"}],"name":"create","outputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"removeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"removeOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_newFund","type":"address"}],"name":"transferFund","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousFund","type":"address"},{"indexed":true,"internalType":"address","name":"newFund","type":"address"}],"name":"TransferFund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"adminList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creators","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fund","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"mapStringOfURI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mapUri","outputs":[{"internalType":"string","name":"file","type":"string"},{"internalType":"string","name":"pdf","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownersList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}], "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b")
    console.log('lsdjlsdjfsldjfsdlkjdslfkj')

    console.log(whitelisted)
    const metamask = await connectMetaMask()
    const walletAddress = metamask.userAddress
    const wallet = metamask.web3
    const whitelisted = await axios.post('http://localhost:8000/api/whitelist', {wallet: walletAddress})
        let txData = NFT.methods.addOwner(data.wallet).encodeABI()
        wallet.eth.sendTransaction({
                to: "0x4C9Fc4C2a21F7C7f0Cbd4aD35cff4CF721d6e04b",
                from: walletAddress,
                data: txData
            },
            function(error, res){
                console.log(error);
                console.log(res);
            }
        )    
      this.setState({contactList: [...this.state.contactList, whitelisted],
        alertMessage: 'Users Updated Successfully',
        showMessage: true,
      allContact: [...this.state.contactList, whitelisted]})


    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = async (data) => {
    const res = await axios.delete('https://desolate-inlet-76011.herokuapp.com/whitelist/' + data._id)
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact._id !== data._id),
      contactList: this.state.allContact.filter((contact) => contact._id !== data._id)
    })
  };
  onDeleteSelectedContact = () => {
    const contacts = this.state.allContact.filter((contact) => !contact.selected);
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: contacts,
      contactList: contacts,
      selectedContacts: 0
    })
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({contactList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({contactList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({contactList: filterContact.filter((contact) => contact.frequently)});

      } else if (filterOption === 'Starred contacts') {
        this.setState({contactList: filterContact.filter((contact) => contact.starred)});
      }
    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };
  getAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: true
    } : contact);
    this.setState({
      selectedContacts: contactList.length,
      allContact: contactList,
      contactList: contactList
    });
  };
  getUnselectedAllContact = () => {
    let contactList = this.state.allContact.map((contact) => contact ? {
      ...contact,
      selected: false
    } : contact);
    this.setState({
      selectedContacts: 0,
      allContact: contactList,
      contactList: contactList
    });
  };

  constructor() {
    super();
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
      allContact: contactList,
      contactList: contactList,
      selectedContact: null,
      selectedContacts: 0,
      addContactState: false,
    }
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
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {user, contactList, addContactState, drawerState, selectedContacts, alertMessage, showMessage, noContentFoundMessage} = this.state;
    console.log(contactList)
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
           <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div> 

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search contact" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">

              <CustomScrollbars className="gx-module-content-scroll">
                {contactList.length === 0 ?
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                  : <ContactList contactList={contactList}
                                 onContactSelect={this.onContactSelect.bind(this)}
                                 onDeleteContact={this.onDeleteContact.bind(this)}
                                 onSaveContact={this.onSaveContact.bind(this)}/>
                }


              </CustomScrollbars>

            </div>
          </div>
        </div>

        <AddContact open={addContactState} contact={{
          'id': contactId++,
          'name': '',
          'thumb': '',
          'email': '',
          'phone': '',
          'designation': '',
          'selected': false,
          'starred': false,
          'frequently': false,
        }} onSaveContact={this.onSaveContact}
                    onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>

        {showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}
      </div>
    )
  }
}

export default Contact;
