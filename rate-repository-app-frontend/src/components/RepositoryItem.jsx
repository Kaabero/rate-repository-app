import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    backgroundColor: 'white',
  },

  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 170
  },

  textContainer: {
    flexDirection: 'column', 
    marginLeft: 10,
    marginRight: 100,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  tableContainer: {
    marginTop: 60,
    marginLeft: -100,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});

export const numberModificator = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  }
  return number;
};

const Info = ({ stars, forks, reviews, rating }) => (        
        <View style={styles.tableContainer}>
          <View>
            <Text testID="stars" color='textSecondary' fontWeight='bold'>{numberModificator(stars)}</Text>
            <Text>Stars</Text>
          </View>
          <View>
            <Text testID="forks" color='textSecondary' fontWeight='bold'>{numberModificator(forks)}</Text>
            <Text>Forks</Text>
          </View>
          <View>
            <Text testID="reviews" color='textSecondary' fontWeight='bold'>{numberModificator(reviews)}</Text>
            <Text>Reviews</Text>
          </View>
          <View>
            <Text testID="rating" color='textSecondary' fontWeight='bold'>{numberModificator(rating)}</Text>
            <Text>Rating</Text>
          </View>
        </View>
);

const Header = ({ name, description, language, stars, forks, reviews, rating, }) => (    
    <View style={styles.textContainer}>
      <Text testID="name" fontWeight='bold' fontSize='subheading'>{name}</Text>
      <Text testID="description" style={styles.title}>{description}</Text>
      <Text testID="language" style={styles.languageTag}>{language}</Text>

      <Info stars={stars} forks={forks} reviews={reviews} rating={rating} />
    </View>
);


const RepositoryItem = ({ name, description, language, stars, forks, reviews, rating, image }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: image }} />
    <Header name={name} description={description} language={language} stars={stars} forks={forks} reviews={reviews} rating={rating}/>
  </View>
);

export default RepositoryItem;
