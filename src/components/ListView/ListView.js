import React, { useState } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import NotesForm from '../NotesForm/NotesForm';
import styles from './styles';

const ListView = () => {
  const listData = useSelector((state) => state.articles.listData);
  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <NotesForm
        visible={formVisible}
        onClose={() => setFormVisible(false)}
      />
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            item={item}
            itemType="github"
            onPress={() => setFormVisible(true)}
          />
        )}
      />
    </>
  );
};

export default ListView;
