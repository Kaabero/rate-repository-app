import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';



const useRepositories = () => {
  
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });


  console.log('loading', loading)
  console.log('data', data)
  return { repositories : data? data.repositories: undefined, loading };
  

};

export default useRepositories;


