import React from 'react'
import Repo from './Repo'

export default function RepoGrid(props) {
  return (
    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
      {props.repos.map(({name, owner, stargazers_count, html_url}) => (
        <li key={name} style={{margin: 30}}>
          <Repo name={name} owner={owner} stars={stargazers_count} url={html_url}/>
        </li>
      ))}
    </ul>
  )
}