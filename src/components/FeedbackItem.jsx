
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <div className="card-buttons">
        <button
          onClick={() => editFeedback(item)}
          className="edit"
        >
          <FaEdit color="purple" />
        </button>

        <button
          onClick={() => deleteFeedback(item.id)}
          className="close"
        >
          <FaTimes color="purple" />
        </button>
      </div>

      <div
        className="text-display"
        style={{ marginTop: '35px' }}
      >
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
