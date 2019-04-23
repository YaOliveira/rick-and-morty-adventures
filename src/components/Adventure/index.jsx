import React from 'react';
import axios from 'axios';
import './adventure.css';

import CharacterList from '../CharacterList'

const API_URL = 'https://rickandmortyapi.com/api';

// function bianca(){

// }
// const bianca = function(){

// }

/* exemplos de como escrever uma função */
// function bianca(a, b){
//     console.log('a');

// }
// const bianca = (a, b) => console.log('a')

// const bianca = a => console.log('a')


// const bianca = () => {
//     console.log('a')
// }


// const {component} = React;

class Adventure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            activeCharacter: {},
        };
        this.oncharacterClick = this.oncharacterClick.bind(this);
    }
    async componentDidMount() {
        try {
            const response = await axios.get(`${API_URL}/character`);
            const characters = response.data.results;

            this.setState({
                characters
                // characters:characters
            })

        } catch (err) {
            console.log(err);
        }
    }
    renderActiveCharacter(activeCharacter) {
        if (!activeCharacter.id) {
            return <div></div>
        };
        return (
            <div className="character">
                <h1>You´ve selected {activeCharacter.name}</h1>
                <img src ={activeCharacter.image} alt={activeCharacter.name}/>
            </div>
        );

    }
    oncharacterClick(activeCharacter) {
        this.setState({
            activeCharacter
        });
    }

    render() {
        const { dimension } = this.props
        const { characters, activeCharacter } = this.state;
        // const dimension = this.props.dimension;
        // const name = name = this.props.name;
        // console.log('dimension', dimension);

        return (
            <div className="adventure">
                <h1>Adventure of Rick and Morty</h1>
                <h2>It´s a Rick and Morty adventure on dimension {dimension}!</h2>
                <CharacterList
                    onCharacterClick={this.oncharacterClick}
                    characters={characters}
                />
                {this.renderActiveCharacter(activeCharacter)}
            </div>
        );
    }

}

export default Adventure;