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
      savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.btnSaveChangeValidate = this.btnSaveChangeValidate.bind(this);
    this.btnSaveChange = this.btnSaveChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({ [target.id]: target.value }, () => {
      this.setState({ saveIsDisabled: this.btnSaveChangeValidate() });
    });
  }

  btnSaveChangeValidate() {
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

  btnSaveChange() {
    const {
      nameInput,
      descriptionInput,
      attr1,
      attr2,
      attr3,
      imgInput,
      raritySelect,
      superTrunfo,
      savedCards,
    } = this.state;

    const cardSaved = {
      nameInput,
      descriptionInput,
      attr1,
      attr2,
      attr3,
      imgInput,
      raritySelect,
      superTrunfo,
    };

    savedCards.push(cardSaved);

    this.setState({
      nameInput: '',
      descriptionInput: '',
      imgInput: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      raritySelect: 'normal',
      superTrunfo: false,
      saveIsDisabled: true,
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
      saveIsDisabled,
      savedCards,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imgInput }
          cardRare={ raritySelect }
          cardTrunfo={ superTrunfo }
          hasTrunfo={ savedCards.some((card) => card.superTrunfo === 'on') }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ saveIsDisabled }
          onSaveButtonClick={ this.btnSaveChange }
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
        <ul>
          { savedCards.map((card) => (
            <li key={ card.cardName }>
              <Card
                cardName={ card.nameInput }
                cardDescription={ card.descriptionInput }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.imgInput }
                cardRare={ card.raritySelect }
                cardTrunfo={ card.superTrunfo }
              />
            </li>
          ))}
          { }
        </ul>
      </div>
    );
  }
}
export default HandledForm;
