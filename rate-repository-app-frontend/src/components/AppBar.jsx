import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.backroundColors.appBar,
    flexDirection: 'row',
    
    
    
    
  },
  appBar: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 30,
    backgroundColor: theme.backroundColors.appBar,
    fontSize: theme.fontSizes.appBar,
    color: theme.colors.appBar,
    marginRight: 30,
    marginLeft: 20
    

  }
});

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }
  return (
    <Link to="/">
     <Pressable onPress={handleSignOut}>
       <Text style={styles.appBar}>Sign out</Text>
     </Pressable>
   </Link>
  )
}

const AppBar = () => {
  
  const user = useQuery(GET_USER)
  
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
    <Link to="/">
        <Text style={styles.appBar}>Repositories</Text>
    </Link>
    {user.data?.me ?
    <>
    <Link to="/createReview">
        <Text style={styles.appBar}>Create a review</Text>
    </Link>
    <SignOut/>
    
    </>
    :
    <Link to="/signIn">
        <Text style={styles.appBar}>Sign in</Text>
    </Link>
    }
    </ScrollView>
    
  </View>
  )
};

export default AppBar;