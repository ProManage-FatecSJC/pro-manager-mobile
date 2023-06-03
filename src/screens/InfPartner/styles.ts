import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  headerTitleTextPartner: {
    color: '#f8f8f8',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  headerTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',

    backgroundColor: '#4994CE',
    borderRadius: 999,
  },
  headerTitleText: {
    color: '#f8f8f8',
    fontSize: 18,
    fontWeight: '700',
  },
  divider: {
    marginTop: 16,
    marginBottom: 32,
    width: '100%',
    height: 1,
    backgroundColor: '#e0e0e0'
  },
  informationPartnerDataWrapper: {
    gap: 14,
    flex: 1,
  },
  informationTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  informationTextTitle: {
    fontSize: 18,
    fontWeight: '700',

    color: '#29292e',
  },
  informationTextData: {
    fontSize: 18,
    color: '#29292e',
    fontWeight: '400'
  },
  buttonSectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  buttonWrapper: {
    width: '45%',
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,

    width: '75%',
    height: '30%',

    backgroundColor: '#f8f8f8',

    borderRadius: 8,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "#00688C",
    borderRadius: 4,
    padding: 16,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 24,
  },
  buttonModalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonModalWrapperWidth: {
    width: '45%',
  }
});

export default styles;
