import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.backroundColors.appBar,
    
    
    
  },
  appBar: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 30,
    backgroundColor: theme.backroundColors.appBar,
    fontSize: theme.fontSizes.appBar,
    color: theme.colors.appBar,

  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable onPress={() => console.log('You pressed the text!')}>
        <Text style={styles.appBar}>Repositories</Text>
    </Pressable>
  </View>
  )
};

export default AppBar;