import Star from './Star'
import React from 'react'

type count = {
  count: number
}

interface Stars {
  count: (count: count) => React.ReactNode
  
}

function Stars(count: count) {
  
  if (count.count < 1 || count.count > 5 || typeof(count.count) !== 'number') {
    return
  }

  const starLi = [];
  
  for (let i = 1; i < count.count + 1; i++){
    starLi.push(<Star />)
  }

  return (
    <ul class="card-body-stars u-clearfix">
      {starLi.map((li, index) => (
        <li key={index}>{li}</li>
      ))}
    </ul>
  )
}

export default Stars