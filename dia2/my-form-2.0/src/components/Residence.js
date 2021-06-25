import React from 'react';

class Residence extends React.Component {
  render() {
    const { handleChange, checkedState } = this.props;

    return (
      <div>
        Selecione residência:
        <div className="form-check">
          <input
            className="form-check-input"
            id="casa"
            type="radio"
            name="checked"
            defaultValue="casa"
            checked={ checkedState === 'casa' }
            onChange={ handleChange }
          />
          <label htmlFor="casa" className="form-check-label">Casa</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="apartamento"
            type="radio"
            name="checked"
            defaultValue="apartamento"
            checked={ checkedState === 'apartamento' }
            onChange={ handleChange }
          />
          <label htmlFor="apartamento" className="form-check-label">Apartamento</label>
        </div>
      </div>
    );
  }
}

export default Residence;