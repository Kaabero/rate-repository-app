import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Link } from "react-router-native";
import { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSortedBy }) => {
  const [single] = useState(false)
  const [selected, setSelected] = useState();
 
  
  const SortedBy = () => {

    const handleChange = (selected) => {
      switch(selected) {
        case "latest":
          setSortedBy({orderBy: 'CREATED_AT', orderDirection: 'DESC'})
          break;
        case "highest": 
          setSortedBy({orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'})
          break;
        case "lowest":
          setSortedBy({orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'})
          break;
        default:
          setSortedBy({orderBy: 'CREATED_AT', orderDirection: 'DESC'})

      }

    }
    
    return (
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          handleChange(itemValue)
          setSelected(itemValue)
        }
        }>
        
        <Picker.Item label="Sort by: Latest repositories" value="latest" />
        <Picker.Item label="Sort by: Highest rated repositories" value="highest" />
        <Picker.Item label="Sort by: Lowest rated repositories" value="lowest" />
      </Picker>
    );
  };

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  
  return (
    
    
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={ <SortedBy/>}
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
  const [ sortedBy, setSortedBy ] = useState({orderBy: 'CREATED_AT', orderDirection: 'DESC'})
  const { repositories } = useRepositories({...sortedBy});
  

  return (
    
  <RepositoryListContainer repositories={repositories} setSortedBy={setSortedBy} />
)};

export default RepositoryList;

