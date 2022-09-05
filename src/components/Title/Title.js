import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

export const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
