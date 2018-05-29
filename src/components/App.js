import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import Nav from './Nav'
import RepoList from './RepoList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/all'><h1>Popular GitHub Repositories</h1></Link> 
          <Nav />
          <Route exact path="/" render={() => <Redirect to="/all"/>} />
          <Route path={process.env.PUBLIC_URL + '/:language'} component={RepoList} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
