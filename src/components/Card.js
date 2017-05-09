import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
  <View style={styles.cardStyle}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default Card;
