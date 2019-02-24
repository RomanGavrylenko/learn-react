import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        agree: false,
    }


    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {name: author, text, bigText} = this.state;
        const id = +new Date();
        this.props.add({author, text, bigText, id});
    }
    
    
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }

    handleCheckboxChange = (e) => {
        this.setState({ agree: e.currentTarget.checked })
    }

    validate = () => {
        const { name, text, agree } = this.state
        if (name.trim() && text.trim() && agree) {
            return true
        }
        return false
    }
    render() {
        const { name, text,bigText, agree } = this.state
        return (
            <form className='add'>
                <input
                    id='name'
                    type='text'
                    onChange={this.handleChange}
                    className='add__author'
                    placeholder='Ваше имя'
                    value={name}
                />
                <textarea
                    id='text'
                    onChange={this.handleChange}
                    className='add__text'
                    placeholder='Текст новости'
                    value={text}
                ></textarea>
                
                <textarea
                    id='bigText'
                    onChange = {this.handleChange}
                    className='add__text'
                    placeholder = 'Расширенный текст новости'
                    value={bigText}
                ></textarea>
                
                
                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    Показать alert
                </button>
            </form>
        )
    }
}


Add.propTypes = {
    add: PropTypes.func.isRequired
}