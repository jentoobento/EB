import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import constants from '../../constants/config';
import styles from './styles';

/**
 * Renders a button that is styled depending on the content source
 * ie. "github" will show repo names, "spotify" will show track names
 * @param {Object} item the list item data
 * @param {String} itemType the name of the source where the item data was pulled
 * @param {Function} onPress function to run when the ListItem is pressed
 */
const ListItem = ({
  item,
  itemType,
  onPress,
}) => {
  switch (itemType) {
    /**
     * useful information returned from github api
    * @param {String} created_at date in iso format
    * @param {String} description
    * @param {Number} id
    * @param {String} name name of repo
    * @param {Object} owner {
    *  @param {String} avatar_url
    *  @param {Number} id
    *  @param {String} login name of owner
    * }
    * @param {Boolean} private
    * @param {String} updated_at date in iso format
    * @param {String} url github url
    */
    case constants.github:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.container}
        >
          <Image source={{ uri: item.owner.avatar_url }} style={styles.image} />
          <Text style={styles.text} numberOfLines={1}>
            {item.name}
          </Text>
          {item.private ? (
            <Icon
              name="lock"
              type="font-awesome"
              size={20}
              iconStyle={styles.lockIcon}
            />
          ) : <View style={styles.emptySpace} />}
        </TouchableOpacity>
      );

    /**
     * useful information returned from spotify api
    * @param {String} added_at date in iso
    * @param {Object} track {
    *   @param {String} id
    *   @param {String} name name of track
    *   @param {String} uri
    * }
    */
    case constants.spotify:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.container}
        >
          <Text style={styles.text} numberOfLines={1}>
            {item.track.name}
          </Text>
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    private: PropTypes.bool,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
    track: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  itemType: PropTypes.string,
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  item: {
    name: '',
    private: false,
    owner: {
      avatar_url: '',
    },
    track: {
      name: '',
    },
  },
  itemType: '',
  onPress: () => {},
};

export default ListItem;
