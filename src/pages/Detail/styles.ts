import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
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

  hedaerOfheader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  iconBack: {
    justifyContent: 'flex-start',
  },

  imgLogo: {
    marginHorizontal: 95,
    marginRight: 55,
    justifyContent: 'space-between',
  },

  icons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  icon: {
    marginLeft: 0,
    marginRight: 15,
  },

  titlePage: {
    position: 'relative',
    paddingTop: 25,
  },

  textTile: {
    fontWeight: 'bold',
  },

  body: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  line: {
    paddingTop: 10,
    paddingHorizontal: 5,
    left: 25,
    height: '63%',
  },

  imgLine: {
    height: '100%',
  },

  tagTime: {
    paddingTop: '10%',
    justifyContent: 'space-between',
    height: '60%',
    left: 15,
  },

  tag: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  detail: {
    width: '90%',
    alignItems: 'flex-end',
    paddingRight: '2%',
    paddingTop: 100,
  },

  task: {
    backgroundColor: '#f3f3f3',
    marginBottom: 40,
    borderRadius: 8,
    display: 'flex',
    width: '90%',
    height: 250,
    marginRight: '10%',
    padding: 30,
    position: 'relative',
  },

  tagColor: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    top: 5,
    right: 5,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  descricao: {
    paddingTop: 30,
    color: 'gray',
  },
});
