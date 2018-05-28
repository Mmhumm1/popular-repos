import React from 'react'

export default function Repo(props) {
  return (
    <ul>
      <li><a href={props.url}>{props.name}</a></li>
      <li>@{props.owner.login}</li>
      <li>{props.stars} stars</li>
    </ul>
  )
}