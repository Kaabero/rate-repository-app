import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react'
import { View } from 'react-native';
import Reviews from './Reviews';
import { FlatList } from 'react-native';


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
    <View>
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
    />
    <Reviews reviews={reviewNodes}/>
    </View>
    
    
    
  );
};

export default SingleRepository;