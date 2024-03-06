import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import Text from './Text';

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
    inputFields: {
        borderWidth: 1,
        width: 355,
        paddingVertical: 7,
        textAlignVertical: 'auto',
        
        
    },
    textField: {
        marginLeft: 10
    }
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputFields}>
        <TextInput style={styles.textField}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      <View style={styles.inputFields}>
        <TextInput style={styles.textField}
          placeholder="Password"
          value={formik.values.password}
          secureTextEntry={true}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      <View style={styles.singInButton}>
        <Pressable onPress={formik.handleSubmit}>
            <Text color='button' textAlignment='center'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;