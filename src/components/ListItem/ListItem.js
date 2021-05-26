import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../../native-base-theme/variables/commonColor';
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
          style={[
            styles.container,
            {
              backgroundColor: item.private ? Colors.brandDanger : Colors.brandSuccess,
            },
          ]}
        >
          <Text>{item.name}</Text>
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
        <TouchableOpacity onPress={onPress}>
          <Text>{item.track.name}</Text>
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
    track: {
      name: '',
    },
  },
  itemType: '',
  onPress: () => {},
};

export default ListItem;
