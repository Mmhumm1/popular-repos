import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import RepoList from './RepoList'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div>
            <Route path={process.env.PUBLIC_URL + '/:language'} component={RepoList} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
