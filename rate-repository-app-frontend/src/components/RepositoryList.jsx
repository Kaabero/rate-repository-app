import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Link } from "react-router-native";
import { useState } from 'react'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const [single] = useState(false)

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <Link to={`/repository/${item.id}`}>
          <RepositoryItem 
            name={item.fullName} 
            description={item.description} 
            language={item.language} 
            stars={item.stargazersCount} 
            forks={item.forksCount} 
            reviews={item.reviewCount} 
            rating={item.ratingAverage}
            image={item.ownerAvatarUrl}
            singleRepository={single}
          />
        </Link>
        }
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;

