import React, { Component } from 'react'
import fetchRepos from './FetchRepos'
import Loading from './Loading'
import BarChart from './BarChart'

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
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>{this.props.match.params.language}</h1>
          <Loading />
        </div>
      )
    }

    return (
      <div>
        <h1>{this.props.match.params.language}</h1>
        <BarChart data={this.state.repos}/>
      </div>
    )
  }
}

export default RepoList