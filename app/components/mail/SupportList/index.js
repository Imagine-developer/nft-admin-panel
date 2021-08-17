import React from "react";
import CustomScrollbars from '../../../../util/CustomScrollbars'

import MailListItem from "./SupportListItem";

const MailList = ({mails, onMailSelect, onMailChecked, onStartSelect, onDeleteMail}) => {
  return (
    <div className="gx-module-list gx-mail-list">
      <CustomScrollbars className="gx-module-content-scroll">
        {mails.map((mail, index) =>
          <MailListItem key={index} mail={mail} onMailSelect={onMailSelect} onMailChecked={onMailChecked}
                        onStartSelect={onStartSelect} onDeleteMail={onDeleteMail}/>
        )}
      </CustomScrollbars>
    </div>
  )
};

export default MailList;
