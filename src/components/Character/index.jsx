import React from 'react';


class Character extends React.Component {
    render() {
        const {onCharacterClick, character} = this.props;
        const {
            id,
            image,
            name
        } = character;

        return (
            <li key={id} onClick={(event) => onCharacterClick(character)}>
                <img src={image} alt={name} />
                <p>{name}</p>
            </li>
        );
    }

}

export default Character;