import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'column', 
    marginLeft: 10,
    marginRight: 100,
    marginTop: 10
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  ratingContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 50,
    width: 50,
    height: 50,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  ratingText: {
    textAlign: "center",
    marginTop: 13,
    color: theme.colors.primary
  },
  footerContainer: {

    marginTop: 20,

  }
});

const RatingImage = ({rating}) => {
    return (
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    )
};


const Header = ({created, text, user }) => {
  const date = format(new Date(created), 'dd.MM.yyyy')
  return (   
    <View style={styles.textContainer}>
      <Text fontWeight='bold' fontSize='subheading'>{user}</Text>
      <Text style={styles.title}>{date}</Text>
      <Footer text={text}/>
    </View>
  )
};

const Footer = ({text}) => {
  
  return (   
    <View style={styles.footerContainer}>
      <Text> {text}</Text>
    </View>
  )
};

const ReviewItem = ({rating, created, text, user }) => {
 
  return (
    <View style={styles.container}>
      <RatingImage rating={rating}/>
      <Header 
        user={user.username}
        created={created} 
        text={text}
      />
    </View>
  )
};

export default ReviewItem;