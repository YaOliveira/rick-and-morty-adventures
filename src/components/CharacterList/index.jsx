import React from 'react';
import Character from '../Character'

class CharacterList extends React.Component {
    renderCharacter() {
        const { characters, onCharacterClick } = this.props;

        const characterMap = characters.map((character) => {
            return <Character 
            key = {character.id} 
            character = {character}
            onCharacterClick={onCharacterClick}
            />
        });           

        return characterMap;
    }

    render() {
        return(
            <ul className = "character-list">
                {this.renderCharacter()}
            </ul>
        )
    }
}

export default CharacterList;