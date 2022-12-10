import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  labelContainter: {
    flexDirection: 'row',
  },
  number: {
    backgroundColor: '#333333',
    paddingHorizontal: 6,
    borderRadius: 999,
    color: '#D9D9D9',
    fontWeight: 'bold'
  },
  createdText: {
    color: '#4EA8DE',
    marginRight: 8,
    fontWeight: 'bold'
  },
  concludedText: {
    color: '#5E60CE',
    marginRight: 8,
    fontWeight: 'bold'
  },
})