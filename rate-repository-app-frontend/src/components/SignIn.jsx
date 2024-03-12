import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
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
    singInButton: {
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
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
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
      <View style={styles.singInButton}>
        <Pressable onPress={formik.handleSubmit}>
            <Text color='button' textAlignment='center'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  

  const onSubmit = async (values) => {
    
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate("/");
      
      
    } catch (e) {
      console.log(e);
    }
    
  };
  
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;