import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
   const { pokemon } = this.props;
   const { name, type, averageWeight, image } = pokemon;

        return(
            <div className='pokemon'>
                <div>
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>{ `Peso: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
                </div>
                <img src={ image } alt={`${name} evaporou`} />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
  

export default Pokemon;