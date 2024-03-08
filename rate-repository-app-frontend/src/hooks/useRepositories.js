import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  console.log('loading', loading)
  console.log('error', error)
  console.log('data', data.repositories, loading, error)
  return { repositories : data.repositories, loading }; 
};

export default useRepositories;


