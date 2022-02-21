import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 25,
    },
    heading: {
      fontSize: 40,
      color: "#4287f5",
      justifyContent: "center",
      marginTop: 30,
      marginBottom: 30,
    },
    semiHeading: {
      fontSize: 25,
      color: "#4287f5",
      marginBottom: 5,
    },
    sober: {
      color: "#69de33",
    },
    tipsy: {
      color: "#ede437",
    },
    drunk: {
      color: "#e82a2a",
    },
    input: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      width: "50%",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 5,
    },
    radioCircle: {
      color: "#000",
      width: 28,
      height: 28,
      borderRadius: 15,
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    radioChecked: {
      width: 15,
      height: 15,
      borderRadius: 7,
      backgroundColor: "#0000ff",
    },
  });

export default styles;