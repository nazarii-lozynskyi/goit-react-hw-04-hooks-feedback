import { useState } from 'react';

import FeedbackOptions from './feedbackOptions';
import Notification from './notification';
import Section from './section';
import Statistics from './statistics';

import styles from './section/Section.module.css';
function Feedback (){
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 

  const onLeaveFeedback = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ()=> {
    return (
      (good /
        (good + neutral + bad)) *
      100
    );
  }
  const keys = Object.keys({ good, neutral, bad });
  
  return (
      <Section className={styles.container} title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={keys}
          
        />
        {good + bad + neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  
}

export default Feedback;
