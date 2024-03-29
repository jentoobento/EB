import React, { useState } from 'react';
import {
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import NotesForm from '../NotesForm/NotesForm';
import styles from './styles';

/**
 * Renders a scrollable flatlist of ListItems
 * When a ListItem is pressed, the modal NotesForm will appear
 */
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
        style={styles.container}
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
