import React, { Component } from 'react'
import _ from "lodash"
import renderHTML from 'react-render-html'
import { Grid, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Components from "./Components"
import config from "./JSON/config/mainview.json"
import logo from './logo.svg'
import './App.css'
const renderMenu = (menu, key) => {
  return (
      <li key={key}><Link to={`/${_.get(menu, "name")}`}>{_.get(menu, "displayName")}</Link></li>
  );
}

class App extends Component {
  render() {
    const {content, menu} = config
    return (
    <Router>
      <div>
      <Grid className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{renderHTML(content)}</h1>
        </header>
        <Col lg={2} className="App-nav">
          <h1>Navigation</h1>
          <Col lg={12}>
            <ul>
              {menu.map(renderMenu)}
            </ul>
          </Col>
        </Col>
        <Route path="/:module" component={Components} />
      </Grid>
      </div>
    </Router>
    );
  }
}

export default App;
