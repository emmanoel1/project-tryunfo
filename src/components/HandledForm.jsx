import React from 'react';
import Form from './Form';
import Card from './Card';

class HandledForm extends React.Component {
  constructor() {
    super();
    this.state = {
      onInputChange: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    this.setState({
      onInputChange: target.value,
    });
  }

  render() {
    const { onInputChange } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ onInputChange }
          cardDescription={ onInputChange }
          cardAttr1={ onInputChange }
          cardAttr2={ onInputChange }
          cardAttr3={ onInputChange }
          cardImage={ onInputChange }
          cardRare={ onInputChange }
          cardTrunfo={ onInputChange }
        />
      </div>
    );
  }
}

export default HandledForm;
