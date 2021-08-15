import React from "react";
import CustomScrollbars from '../../../../util/CustomScrollbars'

import MailListItem from "./TokenListItem";

const TokenList = ({contactList, onMailSelect, onMailChecked, onStartSelect, onDeleteMail, onSaveContact}) => {
  return (
    <div className="gx-module-list gx-mail-list">
      <CustomScrollbars className="gx-module-content-scroll">
        {contactList.map((mail, index) =>
          <MailListItem key={index} mail={mail} onMailSelect={onMailSelect} onMailChecked={onMailChecked}
                        onStartSelect={onStartSelect} onDeleteMail={onDeleteMail} onSaveContact={onSaveContact}/>
        )}
      </CustomScrollbars>
    </div>
  )
};

export default TokenList;
