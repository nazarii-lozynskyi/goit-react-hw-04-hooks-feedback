import React from 'react';

import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  total = good + neutral + bad;
  positivePercentage = Math.round((good / (good + bad + neutral)) * 100);

  return (
    <>
      <p className={styles.title}>Statistics</p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.heading}>
            Good:<span className={styles.data}>{good}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Neutral:
            <span className={styles.data}>{neutral}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Bad:<span className={styles.data}>{bad}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Total:<span className={styles.data}>{total}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Positive feedback:
            <span className={styles.data}>{positivePercentage} %</span>
          </p>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
