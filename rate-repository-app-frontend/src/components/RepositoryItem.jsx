import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

const RepositoryItem = ({name, description, language, stars, forks, reviews, rating}) => (
    <View style={styles.item}>
      <Text style={styles.title}>Full name: {name}</Text>
      <Text style={styles.title}>Description: {description}</Text>
      <Text style={styles.title}>Language: {language}</Text>
      <Text style={styles.title}>Stars: {stars}</Text>
      <Text style={styles.title}>Forks: {forks}</Text>
      <Text style={styles.title}>Reviews: {reviews}</Text>
      <Text style={styles.title}>Rating: {rating}</Text>
    </View>
  );

  export default RepositoryItem;