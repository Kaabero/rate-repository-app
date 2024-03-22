import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';
import { useCreateReview } from '../hooks/useCreateReview';
import { useNavigate } from "react-router-native";

const initialValues = {
  owner: '',
  repository: '',
  rating: '',
  review: ''
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 2,
      backgroundColor: 'white',
      

    },
    createReviewButton: {
      backgroundColor: theme.colors.primary,
      borderWidth: 1,
      width: 355,
      paddingVertical: 7,
    },
    inputField: {
        borderWidth: 1,
        width: 355,
        paddingVertical: 7,
        textAlignVertical: 'auto',
        marginBottom:10
        
        
    },
    textField: {
        marginLeft: 10
    },
    errorField: {
        borderColor: '#d73a4a', 
      },
})

const validationSchema = yup.object().shape({
    owner: yup
      .string()
      .required('Repository owner name is required'),
    repository: yup
      .string()
      .required('Repository name is required'),
    rating: yup
      .number()
      .min(0)
      .max(100)
      .required('Rating is required'),
    review: yup
      .string()
});

export const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.inputField, formik.touched.owner && formik.errors.owner && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="Repository owner name"
          value={formik.values.owner}
          onChangeText={formik.handleChange('owner')}
        />
      </View>
      {formik.touched.owner && formik.errors.owner && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.owner}</Text>
      )}
      <View style={[styles.inputField, formik.touched.repository && formik.errors.repository && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="repository name"
          value={formik.values.repository}
          onChangeText={formik.handleChange('repository')}
        />
      </View>
      {formik.touched.repository && formik.errors.repository&& (
        
        <Text style={{ color: '#d73a4a' }}>{formik.errors.repository}</Text>
        
      )}
      <View style={[styles.inputField, formik.touched.rating && formik.errors.rating && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange('rating')}
        />
      </View>
      {formik.touched.rating && formik.errors.rating && (
        
        <Text style={{ color: '#d73a4a' }}>{formik.errors.rating}</Text>
        
      )}
      <View style={[styles.inputField, formik.touched.review && formik.errors.review && styles.errorField]}>
        <TextInput 
          style={styles.textField}
          multiline={true}
          placeholder="Review"
          value={formik.values.review}
          onChangeText={formik.handleChange('review')}
        />
      </View>
      {formik.touched.rating && formik.errors.rating && (
        
        <Text style={{ color: '#d73a4a' }}>{formik.errors.review}</Text>
        
      )}
      <View style={styles.createReviewButton}>
        <Pressable onPress={(formik.handleSubmit)}>
            <Text color='button' textAlignment='center'>Create a review</Text>
        </Pressable>
      </View>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  
  

  const onSubmit = async (values) => {
    
    const { owner, repository, rating, review } = values;
    const ratingValue = Number(rating)

    try {
        
      const { data } = await createReview({ ownerName: owner, repositoryName: repository, rating: ratingValue, text: review });
      const id = data.createReview.id
      const route = id.substring(id.indexOf('.') +1)
      navigate(`/repository/${route}`);
      
      
    } catch (e) {
      console.log(e);
    }
    
  };
  
  return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;