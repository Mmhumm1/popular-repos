import React from 'react'
import Bar from './Bar'
import Chart from './Chart'

const BarChart = ({data}) => {
  const itemHeight = 100
  const itemMargin = 5
  const chartWidth = 900

  const mostStars = data.reduce((acc, cur) => {
    const { stargazers_count } = cur
    return stargazers_count > acc ? stargazers_count : acc
  }, 0)

  // scale where repo with most stars is always full width of chart
  const scale = (chartWidth) / mostStars

  const normalizedData = data.map(datum =>
    Object.assign({}, datum, { stars: Math.floor(datum.stargazers_count * scale) })
  )

  return (
    <Chart 
      width={chartWidth}
      height={data.length * (itemHeight + itemMargin)}
    >
      {normalizedData.map((datum, index) => (
        <Bar
          key={datum.name}
          x={0}
          y={index * (itemHeight + itemMargin)}
          width={datum.stars}
          height={itemHeight}
          index={index}
          data={datum}
        />
      ))}
    </Chart>
  )
}

export default BarChart