import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';



const useRepositories = ( {orderBy, orderDirection, searchKeyword}) => {
  
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword }
  });

  
  return { repositories : data? data.repositories: undefined, loading, error };
  

};

export default useRepositories;


