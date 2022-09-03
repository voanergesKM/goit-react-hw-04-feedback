import { Component } from 'react';

import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStats = evt => {
    const targetName = evt.currentTarget.name;

    this.setState(prevState => ({ [targetName]: prevState[targetName] + 1 }));
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage() {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={this.onUpdateStats}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </>
    );
  }
}
