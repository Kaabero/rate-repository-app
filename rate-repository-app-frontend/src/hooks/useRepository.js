import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';



const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: {repositoryId: id},
    fetchPolicy: 'cache-and-network'
  });
  console.log('data', data)
  return { repository : data? data.repository: undefined, loading, error };
  

};

export default useRepository;
