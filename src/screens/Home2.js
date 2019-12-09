/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import {
  Button,
  View,
  ScrollView,
  DatePickerIOS,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import MDIcon from "react-native-vector-icons/MaterialIcons";
import RBSheet from "react-native-raw-bottom-sheet";
import data from "./staticArray.json";
// import Modal from 'react-native-modal';

FAIcon.loadFont();
MDIcon.loadFont();

const { height, width } = Dimensions.get('window');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  open = () => this.setState({ visible: true });
  close = () => this.setState({ visible: false });
  isVisible = () => this.state.visible;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>REACT NATIVE RAW BOTTOMSHEET</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.Standard.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>STANDARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Scrollable.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>SCROLLABLE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.DatePicker.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>DATE PICKER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Input.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>TEXT INPUT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Message.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>MESSAGE</Text>
          </TouchableOpacity>
        </View>

        {/* <Button testID={'modal-open-button'} onPress={this.open} title="Open" />

        <Modal
          testID={'modal'}
          isVisible={this.isVisible()}
          customBackdrop={
            <SafeAreaView style={styles.customBackdrop}>
              <Text style={styles.customBackdropText}>
                I'm in the backdrop! 👋
            </Text>
            </SafeAreaView>
          }>
          <View style={{
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)'
          }}>
            <Text>Hi 👋!</Text>
            <Button testID={'close-button'} onPress={this.close} title="Close" />
          </View>
        </Modal> */}

        {/* List Menu */}
        <RBSheet
          ref={ref => {
            this.Standard = ref;
          }}
          height={330}
          animationType='fade'
          duration={200}

        >
          <View style={styles.listContainer}>
            <Text style={styles.listTitle}>Create</Text>
            {data.lists.map(list => (
              <TouchableOpacity
                key={list.icon}
                style={styles.listButton}
                onPress={() => this.Standard.close()}
              >
                <MDIcon name={list.icon} style={styles.listIcon} />
                <Text style={styles.listLabel}>{list.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </RBSheet>

        {/* Grid Menu */}
        <RBSheet
          ref={ref => {
            this.Scrollable = ref;
          }}
          animationType="fade"
          height={height / 2}
          closeOnDragDown
          customStyles={{
            container: {
              backgroundColor: "transparent",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }
          }}
          duration={100}
        >
          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Write a comment..." />
            </View>
            <View style={styles.gridContainer}>
              {data.grids.map(grid => (
                <TouchableOpacity
                  key={grid.icon}
                  onPress={() => this.Scrollable.close()}
                  style={styles.gridButtonContainer}
                >
                  <View style={[styles.gridButton, { backgroundColor: grid.color }]}>
                    <FAIcon name={grid.icon} style={styles.gridIcon} />
                  </View>
                  <Text style={styles.gridLabel}>{grid.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Button title="Sample" onPress={() => this.Scrollable.close()}></Button>
          </ScrollView>
        </RBSheet>

        {/* Date Picker IOS */}
        <RBSheet
          ref={ref => {
            this.DatePicker = ref;
          }}
        >
          <View style={styles.dateHeaderContainer}>
            <TouchableOpacity
              onPress={() => this.DatePicker.close()}
              style={styles.dateHeaderButton}
            >
              <Text style={styles.dateHeaderButtonCancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.DatePicker.close()}
              style={[styles.dateHeaderButton]}
            >
              <Text style={styles.dateHeaderButtonDone}>Done</Text>
            </TouchableOpacity>
          </View>
          <DatePickerIOS mode="date" date={new Date()} />
        </RBSheet>

        {/* TextInput */}
        <RBSheet
          ref={ref => {
            this.Input = ref;
          }}
          height={60}
          animationType="none"
          duration={200}
          closeOnDragDown
          customStyles={{
            wrapper: { backgroundColor: "#121212" },
            draggableIcon: { backgroundColor: 'yellow' }
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} autoFocus placeholder="Write a comment..." />
            <MDIcon
              name="send"
              style={[styles.inputIcon, styles.inputIconSend]}
              onPress={() => this.Input.close()}
            />
          </View>
        </RBSheet>

        {/* Alert */}
        <RBSheet
          ref={ref => {
            this.Message = ref;
          }}
          customStyles={{
            mask: { backgroundColor: "transparent" },
            container: { elevation: 100 }
          }}
        >
          <View style={styles.messageContainer}>
            <Text style={styles.messageTitle}>Awesome!</Text>
            <Text style={styles.message}>
              You can add your own component whatever you want. If you don't like our default style
              you can customize whatever you like.
            </Text>
            <View style={styles.messageButtonContainer}>
              <TouchableOpacity style={styles.messageButton} onPress={() => this.Message.close()}>
                <Text style={styles.messageButtonText}>CLOSE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.messageButton, styles.messageButtonRight]}
                onPress={() => this.Message.close()}
              >
                <Text style={[styles.messageButtonText, styles.messageButtonTextRight]}>GREAT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  customBackdrop: {
    flex: 1,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 10,
    fontSize: 17,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textTitle: {
    fontSize: 20,
    marginTop: 120
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50
  },
  button: {
    width: 150,
    backgroundColor: "#4EB151",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 3,
    margin: 10
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  listContainer: {
    flex: 1,
    padding: 25
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666"
  },
  listButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  listIcon: {
    fontSize: 26,
    color: "#666",
    width: 60
  },
  listLabel: {
    fontSize: 16
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    marginBottom: 20
  },
  gridButtonContainer: {
    flexBasis: "25%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcon: {
    fontSize: 30,
    color: "white"
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: "#333"
  },
  dateHeaderContainer: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dateHeaderButton: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  dateHeaderButtonCancel: {
    fontSize: 18,
    color: "#666",
    fontWeight: "400"
  },
  dateHeaderButtonDone: {
    fontSize: 18,
    color: "#006BFF",
    fontWeight: "500"
  },
  inputContainer: {
    borderTopWidth: 1.5,
    borderTopColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  inputIcon: {
    fontSize: 24,
    color: "#666",
    marginHorizontal: 5
  },
  inputIconSend: {
    color: "#006BFF"
  },
  input: {
    flex: 1,
    height: 36,
    borderRadius: 36,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 10
  },
  messageContainer: {
    flex: 1,
    padding: 25
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222"
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 20
  },
  messageButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  messageButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#3385ff",
    marginLeft: 10
  },
  messageButtonText: {
    color: "#3385ff",
    fontSize: 16,
    fontWeight: "bold"
  },
  messageButtonRight: {
    backgroundColor: "#3385ff"
  },
  messageButtonTextRight: {
    color: "#fff"
  }
});
export default App;