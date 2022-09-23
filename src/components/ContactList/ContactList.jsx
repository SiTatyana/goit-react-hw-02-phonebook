import React from 'react';
import{ContactsItem, ContactsList, ContactsDiv,ContactsSpan} from './ContactList.styled';

export default function ContactList ({items, removeContact}) {
    const elements = items.map (({name, number, id}) => {
        return <ContactsItem  key={id}> 
    
        <ContactsDiv><b>Name:</b> {name}  <b>Number: </b>{number} 
       
       <ContactsSpan onClick={() => removeContact(id)}>❌</ContactsSpan> 
       </ContactsDiv> 
       </ContactsItem>
    })
  return (
    <>
    <ContactsList>{elements}</ContactsList>
    </>
  )
}
