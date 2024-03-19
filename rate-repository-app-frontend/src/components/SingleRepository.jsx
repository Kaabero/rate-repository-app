import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const SingleRepository = () => {
  const [single] = useState(true)
  const { id } = useParams();
  const { repositories } = useRepositories();

    
  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

  const repository = repositoryNodes.find(r => r.id === id)

  const reviewNodes = repository.reviews
  ? repository.reviews.edges.map((edge) => edge.node)
  : [];
  
  return ( 
    <FlatList
    data={reviewNodes}
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
    ListHeaderComponent={() =>
      <RepositoryItem 
        name={repository.fullName} 
        description={repository.description} 
        language={repository.language} 
        stars={repository.stargazersCount} 
        forks={repository.forksCount} 
        reviews={repository.reviewCount} 
        rating={repository.ratingAverage}
        image={repository.ownerAvatarUrl}
        singleRepository={single}
        url={repository.url}
      />}
    />  
  );
};

export default SingleRepository;