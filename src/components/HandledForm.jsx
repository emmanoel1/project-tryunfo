import React from 'react';
import Form from './Form';
import Card from './Card';

class HandledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1: '',
      attr2: '',
      attr3: '',
      imgInput: '',
      raritySelect: '',
      superTrunfo: false,
    //   saveBtn:
    //   isSaveButtonDisabled:
    //   onInputChange,
    //   onSaveButtonClick,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1,
      attr2,
      attr3,
      imgInput,
      raritySelect,
      superTrunfo,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imgInput }
          cardRare={ raritySelect }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default HandledForm;
