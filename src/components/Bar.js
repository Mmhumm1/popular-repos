import React from 'react'
import '../styles/Bar.css'

const fillColor = (language, index) => {
  switch(language) {
    case 'javascript':
      return `hsl(53, 84%, ${index + 65}%)`
    case 'ruby':
      return `hsl(359, 68%, ${index + 36}%)`
    case 'python':
      return `hsl(207, 51%, ${index + 43}%)`
    case 'java':
      return `hsl(35, 75%, ${index + 39}%)`
    default:
      return `hsl(212, 97%, ${index + 43}%)`
  }
}

const Bar = ({ x, y, width, height, index,  data, language }) => (
  <a href={data.html_url}>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fillColor(language, index)}
    />
    <image 
      href={data.owner.avatar_url}
      x={x - 100}
      y={y}
      height='100px'
      width='100px'
    />
    <text
      x={index < 3 ? width + x - 10 : width + x + 10}
      y={y}
      dy={height / 2 - 15}
      fill={index < 3 ? '#000' : '#0366d6'}
      className='owner'
    >
      {data.owner.login}
    </text>
    <text
      x={index < 3 ? width + x - 10 : width + x + 10}
      y={y}
      dy={height / 2 + 5}
      fontWeight='600'
    >
      {data.name}
    </text>
    <text
      x={index < 3 ? width + x - 10 : width + x + 10}
      y={y}
      dy={height / 2 + 25}
    >
      {data.stargazers_count} stars
    </text>
  </a>
)

export default Bar