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
