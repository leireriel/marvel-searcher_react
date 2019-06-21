import React, { Component, Fragment } from 'react';
import Search from '../../Search';
import CharacterList from '../../CharacterList';

class FilteredCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      clickedButton: false
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleCLickButton = this.handleCLickButton.bind(this);
  }
  
  shouldComponentUpdate() {
    if (this.state.clickedButton === true) {
      return true;
    } else {
      return false;
    }
  }

  handleValue(event) {
    const searchValue = event.currentTarget.value.toLowerCase();
    this.setState({
      value: searchValue,
      clickedButton: false
    });
  }
  
  handleCLickButton(event) {
    event.preventDefault();
    this.props.actionFetch();
    this.setState({
      clickedButton: true
    });
  }

  render() {
    const { value, clickedButton } = this.state;
    const { allCharacters } = this.props;
    return(
      <Fragment>
        <Search actionButton={this.handleCLickButton} actionValue={this.handleValue}/>
        {clickedButton ?
          <CharacterList 
            value={value}
            clickedButton={clickedButton}
            charactersFound={
              allCharacters
                .filter(character => character.heroName.toLowerCase().includes(value))
                .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
            }
          />
          :
          null
        }
      </Fragment>
    );
  }
}

export default FilteredCharacter;