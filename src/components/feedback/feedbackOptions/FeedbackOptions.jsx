import React from 'react';

import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.bntList}>
      {Object.keys(options).map(option => {
        return (
          <li className={styles.btnItem} key={option}>
            <button
              className={styles.btn}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const FeedbackOptions = ({
//   onLeaveFeedback,
//   options,
//   // onLeavePositiveFeedback,
//   // onLeaveNeutralFeedback,
//   // onLeaveNegativeFeedback,
// }) => (
//   <ul className={styles.bntList}>
//     <li className={styles.btnItem}>
//       <button type="button" className={styles.btn} onClick={onLeaveFeedback}>
//         Good
//       </button>
//     </li>

//     <li className={styles.btnItem}>
//       <button type="button" className={styles.btn} onClick={onLeaveFeedback}>
//         Neutral
//       </button>
//     </li>

//     <li className={styles.btnItem}>
//       <button type="button" className={styles.btn} onClick={onLeaveFeedback}>
//         Bad
//       </button>
//     </li>
//   </ul>
// );

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
