import { StyledSection } from './Section.styled';
import { Title } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistic/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onLeaveFeedback,
  message,
}) => {
  return (
    <StyledSection>
      <Title title={title} />
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message={message} />
      )}
    </StyledSection>
  );
};
