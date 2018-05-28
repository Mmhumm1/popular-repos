import React from 'react'
import {
  NavLink,
  Route,
} from 'react-router-dom'

export default function Nav(props) {
  const languages = ['all', 'javascript', 'ruby', 'python']
  return (
    <nav>
      <ul>
        {languages.map((lang) => (
          <li key={lang} onClick={() => props.onChooseLanguage(lang)}>
            <NavLink exact activeClassName="active" to={`/${lang}`}>
              {lang}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  )
}