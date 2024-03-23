import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const Reviews = ({ reviews }) => {
  
  return (
    <FlatList
    
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
          <ReviewItem 
            rating={item.rating} 
            created={item.createdAt} 
            text={item.text} 
            user={item.user}
          />
        }
      keyExtractor={item => item.id}
    />

  );
};

export default Reviews;