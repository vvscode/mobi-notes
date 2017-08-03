import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, base, quote, convertionRate }) => (
  <Text style={styles.smallText}>
    1 {base} = {convertionRate} {quote}
    as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  convertionRate: PropTypes.number,
};

export default LastConverted;
