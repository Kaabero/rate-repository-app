import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";

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

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
    <Link to="/">
        <Text style={styles.appBar}>Repositories</Text>
    </Link>
    <Link to="/signIn">
        <Text style={styles.appBar}>Sign in</Text>
    </Link>
    </ScrollView>
    
  </View>
  )
};

export default AppBar;