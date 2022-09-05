import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Container>
      <Button type="button" onClick={onLeaveFeedback} name="good">
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedback} name="bad">
        Bad
      </Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
