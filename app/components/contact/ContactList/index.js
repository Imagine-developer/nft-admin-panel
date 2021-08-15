import React from "react";

import ContactCell from "./ContactCell/index";

const ContactList = ({contactList, onContactSelect, onSaveContact, onDeleteContact}) => {
  return (
    <div className="gx-contact-main-content">
      {contactList.map((contact, index) =>
        <ContactCell key={index} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact}
                    onContactSelect={onContactSelect}/>
      )}

    </div>
  )
};

export default ContactList;
