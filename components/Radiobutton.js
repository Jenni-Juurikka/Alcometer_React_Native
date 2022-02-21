import React, {useState} from "react";
import {View, Text, Pressable} from "react-native";
import styles from "../styles";

/**
 * @param options
 * @param onPress
 */
export default function Radiobutton({options, onPress}) {
    const [radioChoice, setRadioChoice] = useState(null);

    /**
     * @param selected
     */
    function handlePress(selected) {
        setRadioChoice(selected);
        onPress(selected);
    }

    return (
        <>
            {
            options.map((item) => (
                <View key={item.value} style={styles.buttonContainer}>
                    <Text>{item.label}</Text>
                    <Pressable style={styles.radioCircle} onPress={() => handlePress(item.value)}>
                        {radioChoice === item.value && <View style={styles.radioChecked}/>}
                    </Pressable>
                </View>
            ))
            }
        </>
    )
}