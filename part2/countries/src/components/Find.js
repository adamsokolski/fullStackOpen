import React from 'react'

const Find = ({ value, handle }) => {
  return (
    <div>
      find countries <input value={value} onChange={handle} />
    </div>
  )
}

export default Find
