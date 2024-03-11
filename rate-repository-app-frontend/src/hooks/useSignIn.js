import { useMutation } from '@apollo/client';

import { SIGN_IN } from '../graphql/mutations';

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  

  const signIn = async (credentials) => {
    console.log('credentials', credentials)
    try {
      const data = await mutate({ variables: { credentials } })
      console.log('data', data)
      return data
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };
  return [signIn, result];
};



