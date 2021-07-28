import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
     name: '',
     number: ''
    };
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    
  formInputChange = e => {
    
    const { name, value } = e.currentTarget;
     this.setState({
         [name]: value});
         
    // this.state({
    //   [e.currentTarget.name]: e.currentTarget.value,
         
    
  };


  formSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render (){
	return (
		 <form className={styles.form_area} onSubmit={this.formSubmit}>
            <label htmlFor={this.nameInputId} className={styles.form_label}>Name</label>
           <input className={styles.form_input}
                type="text"
                name="name"
                id={this.nameInputId}
                value={this.state.name}

                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                
                onChange={this.formInputChange}
              />
            <label htmlFor ={this.numberInputId} className={styles.form_label}>Number</label>
        <input className={styles.form_input}
                type="tel"
                name="number"
                id={this.numberInputId}
                value={this.state.number}

                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required

                onChange={this.formInputChange}
              />
       
            <button type="submit" className={styles.add_button}> Add contact</button>
            </form>
        );
  }
}

ContactForm.propTypes = {
	  onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};






export default ContactForm;