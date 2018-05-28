import React from 'react'
import '../styles/Bar.css'

const Bar = ({ x, y, width, height, index,  data }) => (
  <a href={data.html_url}>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={`hsl(225, 66%, ${index + 65}%)`}
    />
    <image 
      href={data.owner.avatar_url}
      y={y}
      height="100px"
      width="100px"
    />
    <text
      x={index === 0 ? width - 10 : width + 10}
      y={y}
      dy={height / 2}
    >
      {data.name}
    </text>
    <text
      x={index === 0 ? width - 10 : width + 10}
      y={y}
      dy={height / 2 + 20}
    >
      @{data.owner.login}
    </text>
  </a>
)

export default Bar