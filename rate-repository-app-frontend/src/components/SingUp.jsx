import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";
import { useSignUp } from '../hooks/useSingUp';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
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
    singUpButton: {
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
    username: yup
      .string()
      .min(5)
      .max(30)
      .required('Username is required'),
    password: yup
      .string()
      .min(5)
      .max(50)
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirmation is required'),

});

export const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View style={[styles.inputField, formik.touched.username && formik.errors.username && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
      )}
      <View style={[styles.inputField, formik.touched.password && formik.errors.password && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="Password"
          value={formik.values.password}
          secureTextEntry={true}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      {formik.touched.password && formik.errors.password && (
        
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
        
      )}
      <View style={[styles.inputField, formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && styles.errorField]}>
        <TextInput style={styles.textField}
          placeholder="Password confirmation"
          value={formik.values.passwordConfirmation}
          secureTextEntry={true}
          onChangeText={formik.handleChange('passwordConfirmation')}
        />
      </View>
      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
        
        <Text style={{ color: '#d73a4a' }}>{formik.errors.passwordConfirmation}</Text>
        
      )}
      <View style={styles.singUpButton}>
        <Pressable onPress={(formik.handleSubmit)}>
            <Text color='button' textAlignment='center'>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();
  const navigate = useNavigate();
  
  

  const onSubmit = async (values) => {
    
    const { username, password } = values;
    try {
        
      await signUp({ username, password });
      
      
    } catch (e) {
      console.log(e);
    }
    try {
        
        await signIn({ username, password });
        navigate("/");
        
        
      } catch (e) {
        console.log(e);
      }
      
    
  };
  
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignUp;