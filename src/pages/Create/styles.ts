import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    alignItems: 'center'
  },

  backgroundImage: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  header:{
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    width: '100%',
    height: '15%',
    paddingTop:10,
  },

  headerOfheader:{
    flexDirection: "row",
  },

  logo:{

  },

  titlePage:{
    position: 'relative',
    paddingTop: 25,
  },


  textTile:{
    fontWeight: 'bold',
  },

  form:{
    width: '100%',
    alignItems: 'center',
  },

  duration:{
    justifyContent: 'space-between',
    flexDirection: "row",
    width: '90%',
  },

  input:{
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 30,
    marginTop: 30,
},

  inputDuration: {
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

  buttonsColor:{
    flexDirection: "row",
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
    paddingLeft: '12%',
    marginBottom: '-10%',
    
},

flatlist:{},

button:{
    marginRight: 15
},

saveButton:{
  backgroundColor: '#ff5d5d',
  marginTop: 50,
  width: '90%',
  height: 40,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: 'center'
},

textButton:{
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: 18,
}

});
