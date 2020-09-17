import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    position: 'relative',
  },

  backgroundImage: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,

    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,

    marginHorizontal: 30,
  },
});
