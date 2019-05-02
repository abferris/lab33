import React from "react";
import { connect } from "react-redux";

import * as actions from "./store/actions.js";
import "./styles/styles.scss"
import app from "./app.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    console.log(this.props.api.results)
    if (!this.props.api.results[0]){
    console.log('in fetchpeople');
    let api = "https://swapi.co/api/people";
    this.props.get(api);
    } else { console.log('already there')}
  }

  async fetchPerson(url) {
    if(this.props.api.cache.hasOwnProperty(url)){
      console.log('from cache',this.props.api.cache[url],this.props.api.active)
      this.props.cacheIt(url);
    }else{ this.props.getPerson(url); }
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.fetchPeople}>
          Get The People
        </a>

        <section className={app.people}>
          <ul>
            {this.props.api.results.map((result, i) => (
              <li onClick={(e) => {
              e.preventDefault()
              this.fetchPerson(result.url)
                }
              } key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(this.props.api.active).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.props.api.active[key]}</span>
              </div>
            ))}
          </div>
            </section>
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  api: state.api
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: api => dispatch(actions.getStuff(api)),
  getPerson: url => dispatch(actions.getOne(url)),
  cacheIt: url => dispatch(actions.fromCache(url))


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
