import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

export default function Nav(props) {
  // To add more languages to the app, simply add them to this array
  const languages = ['all', 'javascript', 'ruby', 'python', 'java']
  return (
    <nav>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>
            <NavLink exact activeClassName="active" to={`${process.env.PUBLIC_URL}/${lang}`}>
              {lang}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}