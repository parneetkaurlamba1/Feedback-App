
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

const API_URL = 'https://feedback-app-q3hd.onrender.com'

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Fetch feedback
  const fetchFeedback = async () => {
    try {
      const response = await fetch(`${API_URL}/feedback`)

      if (!response.ok) {
        throw new Error('Failed to fetch feedback')
      }

      const data = await response.json()
      setFeedback(data)
    } catch (error) {
      console.error('Error fetching feedback:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })

      if (!response.ok) {
        throw new Error('Failed to add feedback')
      }

      const data = await response.json()
      setFeedback((prevFeedback) => [data, ...prevFeedback])
    } catch (error) {
      console.error('Error adding feedback:', error)
    }
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        const response = await fetch(`${API_URL}/feedback/${id}`, {
          method: 'DELETE',
        })

        if (!response.ok) {
          throw new Error('Failed to delete feedback')
        }

        setFeedback((prevFeedback) =>
          prevFeedback.filter(
            (item) => String(item.id) !== String(id)
          )
        )
      } catch (error) {
        console.error('Error deleting feedback:', error)
      }
    }
  }

  // Update feedback
  const updateFeedback = async (id, updItem) => {
    try {
      const response = await fetch(`${API_URL}/feedback/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem),
      })

      if (!response.ok) {
        throw new Error('Failed to update feedback')
      }

      const data = await response.json()

      setFeedback((prevFeedback) =>
        prevFeedback.map((item) =>
          String(item.id) === String(id) ? data : item
        )
      )

      setFeedbackEdit({
        item: {},
        edit: false,
      })
    } catch (error) {
      console.error('Error updating feedback:', error)
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        feedbackEdit,
        setFeedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
