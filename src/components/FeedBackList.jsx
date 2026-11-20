// import PropTypes from 'prop-types';
// import FeedbackItem from './FeedbackItem';
// import {motion,AnimatePresence} from 'framer-motion'

//   function FeedbackList({ feedback, handleDelete }) {
//   if (!feedback || feedback.length === 0) {
//     return <p>No Feedback Yet</p>;
//   }
//   return(
//     <div className='feedback-list'>
//       <AnimatePresence>
//         {feedback.map((item)=>(
//           <motion.div
//           key={item.id}

//          initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//         </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   )
//   }
  
//   export default FeedbackList;
  
 




// //   return (
// //     <div className="feedback-list">
// //       {feedback.map((item) => (
// //         <FeedbackItem key={item.id} item={item}handleDelete={handleDelete} />
// //       ))}
// //     </div>
// //   );
// // }

import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react'
import FeedbackContext from './context/feedbackcontext'

function FeedBackList() {
  
  const {feedback,deleteFeedback}= useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{opacity:0.9}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
          
          >
            <FeedbackItem
              item={item}
            
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}


export default FeedBackList;






