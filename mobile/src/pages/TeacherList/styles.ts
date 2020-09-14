import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 8
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff'
  },

  input: {
    backgroundColor: '#fff',
    height: 54,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 4
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    backgroundColor: '#04d361',
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  }

});

export default styles;