import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';



export const useCreateReview = () => {

  const [mutate, result] = useMutation(CREATE_REVIEW);
  

  const createReview = async (review) => {
    console.log('credentials', review)

      return await mutate({ variables: { review: review } })
      
     
  };
  return [createReview, result];
};