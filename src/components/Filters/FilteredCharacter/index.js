import React, { Component, Fragment } from 'react';
import Search from '../../Search';
import CharacterList from '../../CharacterList';

class FilteredCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.filterCharacter = this.filterCharacter.bind(this);
  }

  filterCharacter(event) {
    const searchValue = event.currentTarget.value;
    this.setState({
      value: searchValue
    })
  }

  render() {
    const { actionFetch } = this.props;
    return(
      <Fragment>
        <Search actionFetch={actionFetch} actionFilter={this.filterCharacter}/>
        <CharacterList />
      </Fragment>
    );
  }
}

export default FilteredCharacter;