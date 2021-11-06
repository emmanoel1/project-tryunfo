import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      // hasTrunfo,
    } = this.props;

    return (

      <div>
        <label htmlFor="nameInput">
          Nome Da Carta:
          <input
            value={ cardName }
            onChange={ onInputChange }
            id="nameInput"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição Da Carta:
          <input
            value={ cardDescription }
            onChange={ onInputChange }
            id="descriptionInput"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Primeiro Atributo:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Segundo Atributo:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Terceiro Atributo:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imgInput">
          Link Para Imagem Da Carta:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="imgInput"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="raritySelect">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="raritySelect"
            type="select"
            name="rarity"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="superTrunfo"
            type="checkbox"
            name="superTrunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          id="saveBtn"
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
