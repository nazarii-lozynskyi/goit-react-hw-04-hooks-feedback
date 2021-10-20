import React from 'react';

import FeedbackOptions from './feedbackOptions';
import Notification from './notification';
import Section from './section';
import Statistics from './statistics';

import styles from './section/Section.module.css';
class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
    children: [],
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const label = event.target.textContent;

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };
  // leavePositiveFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // leaveNeutralFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // leaveNegativeFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.setState.neutral;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section className={styles.container} title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={this.state}
          // onLeavePositiveFeedback={this.leavePositiveFeedback}
          // onLeaveNeutralFeedback={this.leaveNeutralFeedback}
          // onLeaveNegativeFeedback={this.leaveNegativeFeedback}
        />
        {good + bad + neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default Feedback;
