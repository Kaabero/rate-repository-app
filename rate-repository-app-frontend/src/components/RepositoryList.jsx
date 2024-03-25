import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Link } from "react-router-native";
import {Picker} from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';
import React, { Component, useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


class RepositoryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: false,
      selected: undefined,
    };
  }

  SortedBy = () => {
    const [selected, setSelected] = useState();
    const props = this.props;

    const handleChange = (selected) => {
      switch(selected) {
        case "latest":
          props.setSortedBy({orderBy: 'CREATED_AT', orderDirection: 'DESC'});
          break;
        case "highest": 
          props.setSortedBy({orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'});
          break;
        case "lowest":
          props.setSortedBy({orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'});
          break;
        default:
          props.setSortedBy({orderBy: 'CREATED_AT', orderDirection: 'DESC'});
      }
      setSelected(selected);
    }
    
    return (
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => handleChange(itemValue)}>
        <Picker.Item label="Sort by: Latest repositories" value="latest" />
        <Picker.Item label="Sort by: Highest rated repositories" value="highest" />
        <Picker.Item label="Sort by: Lowest rated repositories" value="lowest" />
      </Picker>
    );
  };

  Search = () => {
    const [searchKeyWord, setSearchKeyWord] = useState('');
    const props = this.props;

    const handleInput = (searchKeyWord) => {
      setSearchKeyWord(searchKeyWord);
      props.setSearchKeyWord(searchKeyWord);
    }
    
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={handleInput}
        value={searchKeyWord}
        autoFocus
      />
    );
  };

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return ( 
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={ 
          <View>
            <this.Search />
            <this.SortedBy /> 
          </View>
        }
        ItemSeparatorComponent={<View style={styles.separator} />}
        renderItem={({item}) => (
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
              singleRepository={this.state.single}
            />
          </Link>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
};

const RepositoryList = () => {
  const [ sortedBy, setSortedBy ] = useState({orderBy: 'CREATED_AT', orderDirection: 'DESC'})
  const [ keyword, setSearchKeyword ] = useState('')
  const [ searchKeyword ] = useDebounce(keyword, 200);
  const { repositories } = useRepositories({...sortedBy, searchKeyword});
  
  

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      setSortedBy={setSortedBy} 
      setSearchKeyWord={setSearchKeyword}
      searchKeyWord={keyword} 
    />
)};

export default RepositoryList;

