import React, { Component } from 'react'
import fetchRepos from './FetchRepos'
import Loading from './Loading'
import BarChart from './BarChart'
import '../styles/RepoList.css'

class RepoList extends Component {

  state = {
    repos: [],
    loading: true,
    screenSize: 0
  }

  componentDidMount() {
    this.addRepos(this.props.match.params.language)
    this.updateScreenSize()
    window.addEventListener('resize', this.updateScreenSize)
  }

  componentDidUpdate({match}, prevState) {
    if (match.params.language !== this.props.match.params.language) {
      this.addRepos(this.props.match.params.language)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize)
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

  // Rerenders component if the screen size is changed
  updateScreenSize = () => {
    const width = window.innerWidth

    this.setState({
      screenSize: width
    })
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className='repos'>
          <h2>{this.props.match.params.language}</h2>
          <Loading />
        </div>
      )
    }

    return (
      <div className='repos'>
        <h2>{this.props.match.params.language}</h2>
        <BarChart data={this.state.repos} language={this.props.match.params.language}/>
      </div>
    )
  }
}

export default RepoList