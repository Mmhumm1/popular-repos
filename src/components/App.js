import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import Loading from './Loading'
import Nav from './Nav'
import Graphql from './Graphql'

class App extends Component {
  state = {
    repos: [],
    language: 'all',
    loading: true,
  }

  componentDidMount() {
    this.fetchRepos(this.state.language)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.fetchRepos(this.state.language)
    }
  }

  handleChooseLanguage = (language) => {
    this.setState({
      language: language
    })
  }

  createApolloClient() {
    return new ApolloClient({
      uri: "https://api.github.com/graphql"
    })
  }

  fetchRepos(language) {
    this.setState({
      loading: true
    })

  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={this.createApolloClient()}>
          <div>
            <Nav onChooseLanguage={this.handleChooseLanguage}/>
            <div>
              <h1 style={{textAlign: 'center'}}>{this.state.language}</h1>
              <Route path={process.env.PUBLIC_URL + '/:language'} component={Graphql} />
            </div>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App
