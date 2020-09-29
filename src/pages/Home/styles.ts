import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',

    position: 'relative',

    backgroundColor: '#fff',
  },

  button: {
    flexDirection: 'row',
    padding: 10,
  },

  pie: {
    // position: 'relative',
  },

  backgroundImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  header: {
    width: '100%',
    backgroundColor: '#F3F3F3',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerRowFirst: {
    marginTop: Constants.statusBarHeight,
  },

  headerRowLast: {
    marginVertical: 5,
  },

  headerButton: {
    padding: 7,
    borderRadius: 50,
  },

  dayOfWeek: {
    width: 50,
    height: 50,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },

  dayOfWeekText: {
    fontWeight: '700',
  },

  dayOfWeekEndText: {
    color: '#FF5D5D',
  },

  todayDateText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

    padding: 20,
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
