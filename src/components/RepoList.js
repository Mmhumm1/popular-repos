import React, { Component } from 'react'
import Repo from './Repo'
import fetchRepos from './FetchRepos'
import Loading from './Loading'

class RepoList extends Component {

  state = {
    repos: [],
    loading: true,
  }

  componentDidMount() {
    this.addRepos(this.props.match.params.language)
  }

  componentDidUpdate({match}, prevState) {
    if (match.params.language !== this.props.match.params.language) {
      this.addRepos(this.props.match.params.language)
    }
  }

  addRepos(language) {
    this.setState({
      loading: true
    })

    fetchRepos(language)
      .then((repos) => {
        this.setState({
          loading: false,
          repos,
        })
      })
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />
    }

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{this.props.match.params.language}</h1>
        <ul>
          {this.state.repos.map(({name, owner, stargazers_count, html_url}) => (
            <li key={name}>
              <Repo name={name} url={html_url} owner={owner} stars={stargazers_count}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RepoList