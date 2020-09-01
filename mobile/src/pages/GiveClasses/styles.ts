import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 220,
  },
  description : {
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 270,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center'
  },
  okButtonText: {
    color:'#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    lineHeight: 24,
  }
});

export default styles;