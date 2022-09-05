import { Component } from 'react';
import { StyledSection } from './Section.styled';
import { Title } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistic/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Section extends Component {
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
    const title = 'Please leave feedback';
    const message = 'There is no feedback';

    return (
      <StyledSection>
        <Title title={title} />
        <FeedbackOptions onLeaveFeedback={this.onUpdateStats} />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message={message} />
        )}
      </StyledSection>
    );
  }
}
