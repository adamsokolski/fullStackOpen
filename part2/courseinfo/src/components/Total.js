import React from 'react'

const Total = ({ course }) => {
  let total = 0
  course.parts.forEach((e) => (total += e.exercises))
  return <strong>total of {total} exercises</strong>
}

export default Total
