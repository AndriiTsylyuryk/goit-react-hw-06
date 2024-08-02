import React from "react";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectContacts";

const ContactList = () => {

  const contacts = useSelector(selectContacts);

  return (
    <div>
      <ul>
        {contacts.map((item) => (
          <li className={s.li} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
