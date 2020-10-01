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
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerRowFirst: {
    marginTop: Constants.statusBarHeight,
  },

  headerRowLast: {
    marginVertical: 5,
  },

  headerButtonsRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
  },

  headerButtonsLeft: {
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
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
    marginLeft: 50,
    marginRight: 10,
  },
});
