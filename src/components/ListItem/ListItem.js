import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';
import constants from '../../constants/config';
import styles from './styles';

const ListItem = ({
  item,
  itemType,
  onPress,
}) => {
  switch (itemType) {
    /**
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

export default ListItem;
