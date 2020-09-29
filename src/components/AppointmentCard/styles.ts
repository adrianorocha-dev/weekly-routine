import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: 300,
    height: 80,
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    elevation: 4,

    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 15,
    position: 'relative',
  },

  cardColorIndicator: {
    width: 25,
    height: 25,
    borderRadius: 15,

    position: 'absolute',
    top: 8,
    right: 8,
  },
});
