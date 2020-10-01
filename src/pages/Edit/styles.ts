import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    alignItems: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    right: 0,
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

  Icon: {
    position: 'absolute',
    left: 0,
  },

  logo: {
    alignItems: 'center',
  },

  titlePage: {
    position: 'relative',
    paddingTop: 25,
  },

  textTile: {
    fontWeight: 'bold',
  },

  scroll: {
    alignItems: 'center',
  },

  form: {
    width: '100%',
    alignItems: 'stretch',

    paddingHorizontal: 20,
  },

  select: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginTop: 30,
  },

  duration: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  input: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: 30,
  },

  inputDuration: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,
    fontSize: 16,
    width: '45%',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 30,
  },

  buttonsColor: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
    marginBottom: '-10%',
  },

  flatlist: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  button: {
    borderRadius: 50,
    width: 25,
    height: 25,
  },

  saveButton: {
    backgroundColor: '#ff5d5d',
    marginTop: 50,
    width: '90%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
