import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';


export const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  

  const signIn = async (credentials) => {
    console.log('credentials', credentials)
    
    const data = await mutate({ variables: { credentials } })
    console.log('token from data', data.data.authenticate.accessToken);
      
    await authStorage.setAccessToken(data.data.authenticate.accessToken)
    apolloClient.resetStore();
      
    return data
  };
  return [signIn, result];
};



