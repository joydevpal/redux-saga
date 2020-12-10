import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from './redux/actions';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.fetchData(2)
  }
  render() {
    return (
      <div>
        <button
          onClick={this.fetchData}
          className="btn btn-primary"
        >Fetch</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => { dispatch(fetchData(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
