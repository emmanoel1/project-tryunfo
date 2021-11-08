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
      saveIsDisabled: true,
    //   onSaveButtonClick,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.btnSaveChange = this.btnSaveChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({ [target.id]: target.value }, () => {
      this.setState({ saveIsDisabled: this.btnSaveChange() });
    });
  }

  btnSaveChange() {
    const {
      nameInput,
      descriptionInput,
      imgInput,
    } = this.state;
    let {
      attr1,
      attr2,
      attr3,
    } = this.state;

    attr1 = Number(attr1);
    attr2 = Number(attr2);
    attr3 = Number(attr3);
    const max = 210;
    const m = 90;

    if (nameInput === '' || descriptionInput === '' || imgInput === '') {
      return true;
    }
    if (attr1 > m || attr1 < 0 || attr2 > m || attr2 < 0 || attr3 > m || attr3 < 0) {
      return true;
    }
    if (attr1 + attr2 + attr3 > max) {
      return true;
    }
    return false;
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
      saveIsDisabled,
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ saveIsDisabled }
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
