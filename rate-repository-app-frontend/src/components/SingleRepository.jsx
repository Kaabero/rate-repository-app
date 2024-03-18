import { useParams } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react'



const SingleRepository = () => {
  const [single] = useState(true)
  const { id } = useParams();
  console.log('id', id)
  const { repositories } = useRepositories();

    
  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

  const repository = repositoryNodes.find(r => r.id === id)
  console.log('repository', repository)
  
  return ( 
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
    
  );
};

export default SingleRepository;