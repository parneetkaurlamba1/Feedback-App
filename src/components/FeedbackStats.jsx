
import React from 'react';
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback = [] } = useContext(FeedbackContext) || {}

  const average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / (feedback.length || 1)

  const formattedAverage = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>

      <h4>
        Average Rating: {feedback.length ? formattedAverage : 0}
      </h4>
    </div>
  )
}

export default FeedbackStats


