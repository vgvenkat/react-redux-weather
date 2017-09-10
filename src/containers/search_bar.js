import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    var value = event.target.value;
    this.setState({ term: value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    //fetch weather data from redux ajax
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.term}
          placeholder="Get a five-day forecase in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
