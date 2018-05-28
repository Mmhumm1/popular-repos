import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './Loading'
import RepoGrid from './RepoGrid'

const getTopRepos = gql`
  query topRepos($query: String!) {
    search(query: $query, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            name
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`

const TopRepos = ({match}) => (
  <Query query={getTopRepos} variables={{query: `language:${match.params.language}`}}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return `Error!: ${error}`

      return (
        <RepoGrid repos={data}/>
      )
    }}
  </Query>
)

export default TopRepos