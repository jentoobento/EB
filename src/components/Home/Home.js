import React from 'react';
import { Container, Content } from 'native-base';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AccountBox from '../AccountBox/AccountBox';
import styles from './styles';

/**
 * Renders a scrollable list of AccountBoxes
 * @param {Object} navigation The navigation object from NavigationContainer
 */
const Home = ({ navigation }) => {
  const accounts = useSelector((state) => state.articles.accounts);

  return (
    <Container style={styles.container}>
      <Content padder>
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scoll}>
          {accounts.map((account) => (
            <AccountBox
              key={account.name}
              account={account}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </Content>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({}),
};

Home.defaultProps = {
  navigation: {},
};

export default Home;
