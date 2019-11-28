import React, { Component } from 'react';
import DetailsPage from '../../pages/Details/DetailsPage'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findCurrentItem from '../../redux/actions/findCurrentItem'

class Details extends Component {
  componentDidMount() {
    //convvert to number
    this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    console.log(this.props.match.params.itemId);
  }

  render() {
    const { currentItem } = this.props;
    console.log(this.props);

    return (
      <div>
        <DetailsPage
          currentItem={currentItem}
          goTo={(path) => {
            this.props.history.push(path);
          }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
  }
};

const mapDispatchToProps = {
  findCurrentItem,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));

