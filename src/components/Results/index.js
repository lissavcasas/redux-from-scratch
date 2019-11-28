import React, { Component } from 'react';
import ResultsPage from '../../pages/Results/ResultsPage';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    const { suggestions } = this.props;
    console.log(suggestions)
    console.log(this.props)

    return (
      <div>
        <ResultsPage suggestions={suggestions} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
    hola: '123'
  }
};


export default connect(mapStateToProps)(Results);

