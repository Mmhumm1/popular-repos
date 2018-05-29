import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

export default function Nav(props) {
  const languages = ['all', 'javascript', 'ruby', 'python', 'java']
  return (
    <nav>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>
            <NavLink exact activeClassName="active" to={`/${lang}`}>
              {lang}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}