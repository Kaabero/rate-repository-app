import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import AppBar from './AppBar';
import theme from '../theme';
import CreateReview from './CreateReview';
import SignUp from './SingUp';
import MyReviews from './MyReviews';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backroundColors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;