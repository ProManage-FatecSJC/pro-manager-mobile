import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 24,
    paddingTop: 16,
  },
  headerTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 16,
    width: '100%',

    backgroundColor: '#4994CE',
    borderRadius: 999,
  },
  titleText: {
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
    gap: 16,
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
  buttonGap: {
    gap: 16,
  }
});

export default styles;
