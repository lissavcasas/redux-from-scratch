import React, { Component } from 'react';
import ResultsPage from '../../pages/Results/ResultsPage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Results extends Component {
  render() {
    const { results } = this.props;
    console.log(results)
    console.log(this.props)

    return (
      <div>
        <ResultsPage
          results={results}
          goTo={(path) => {
            this.props.history.push(path);
          }} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    results: state.results,
  }
};


export default withRouter(connect(mapStateToProps)(Results));

