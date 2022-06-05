import React from 'react'

const Total = ({ course }) => {
  let total = course.parts.reduce((s, p) => {
    // first s is a object
    if (s.exercises) {
      return s.exercises + p.exercises
    }
    return s + p.exercises
  })
  return <strong>total of {total} exercises</strong>
}

export default Total
