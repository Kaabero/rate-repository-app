import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';
import { GET_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const MyReviews = () => {
    const user = useQuery(GET_USER, {
      fetchPolicy: 'cache-and-network',
      variables: { includeReviews: true },
    })
    console.log('user', user.data.me)
    const reviews = user.data.me
    console.log('reviews', reviews)

  
    const reviewNodes = reviews
    ? reviews.reviews.edges.map((edge) => edge.node)
    : [];

    console.log('reviewNodes', reviewNodes)
  
    return (
      <FlatList
    
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => 
          <ReviewItem 
            rating={item.rating} 
            created={item.createdAt} 
            text={item.text} 
            user={item.repository.fullName}
          />
        }
        keyExtractor={item => item.id}
      />
    );
};

export default MyReviews;