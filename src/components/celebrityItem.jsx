import React from 'react'

const CelebrityItem = ({ celebrity }) => {
    const { name, industry, bio } = celebrity;

  return (
    <li>
    <h2>{name}</h2>
    <p><strong>Industry:</strong> {industry}</p>
    <p><strong>Bio:</strong> {bio}</p>
  </li>
  )
}


export default CelebrityItem;