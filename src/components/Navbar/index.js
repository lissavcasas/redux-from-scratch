import React, { Component } from 'react';
import NavbarPage from '../../pages/Navbar/Navbar';
import { connect } from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  onChangeText = (text) => {
    this.setState({
      text
    })

    this.props.findSuggestions(text)
  };

  onChangeSelection = (text) => {
    this.setState({
      text
    })

    this.props.findResults(text);
  /*   this.props.history.push('./results') */
  };

  render() {
    //local state
    const { text } = this.state;
    const { suggestions } = this.props;


    return (
      <NavbarPage
        text={text}
        suggestions={suggestions}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  }
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    findSuggestions: text => dispatch(findSuggestions(text))
  }
}; */

const mapDispatchToProps = {
  findSuggestions,
  findResults //connect the action!
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));