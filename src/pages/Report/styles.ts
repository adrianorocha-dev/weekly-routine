import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '15%',
    paddingTop: 10,
  },

  headerOfheader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    width: '90%',
  },

  logo: {
    alignItems: 'center',
  },

  Icon: {
    position: 'absolute',
    left: 0,
  },

  titlePage: {
    position: 'relative',
    paddingTop: 25,
    fontWeight: 'bold',
  },

  pieChart: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },

  barChart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});
