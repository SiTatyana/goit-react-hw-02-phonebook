import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {PhonebookForm, PhonebookHeader, PhonebookLabel, PhonebookInput, PhonebookButton}from './Form.styled'


export default class Form extends Component {

    state ={
        name: '',
        number:'',
    }
    nameId = nanoid();
    numberId = nanoid();

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState ({
           [name]: value,
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const{name, number} = this.state;
        this.setState ({
            name: '',
            number: '',
        });
        this.props.onSubmit({name, number});

    }

  render() {
    const {nameId, numberId, handleChange, handleSubmit}=this;
    return (
        <PhonebookForm onSubmit={handleSubmit}>
            <PhonebookHeader>Phonebook</PhonebookHeader>
            <PhonebookLabel htmlFor={nameId}> Name: 
            <PhonebookInput
                id={nameId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={handleChange}
            />
            </PhonebookLabel>
            <PhonebookLabel htmlFor={numberId}> Number: 
            <PhonebookInput
                id={numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={handleChange}
            />
            </PhonebookLabel>
            <PhonebookButton type="submit">Add number</PhonebookButton>
        </PhonebookForm>
      
    )
  }
}
