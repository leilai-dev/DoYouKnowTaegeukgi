import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 0,
    overflow: "hidden",
    alignItems: 'center'
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    // backgroundColor: "transparent"
    backgroundColor: '#3366FF',
    paddingBottom: 2,
    marginBottom: 12,
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#ccc"
  }
});

export default styles;
