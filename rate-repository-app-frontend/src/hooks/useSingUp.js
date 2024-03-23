import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';



export const useSignUp = () => {

  const [mutate, result] = useMutation(SIGN_UP);
  

  const signUp = async (user) => {
    
    return await mutate({ variables: { user: user} })
      
  };
  return [signUp, result];
};