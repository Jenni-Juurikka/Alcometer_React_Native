import {useState} from 'react';
import {Text, View, ScrollView, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Radiobutton from "./components/Radiobutton";
import styles from "./styles";

export default function App() {
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(1);
  const [gender, setGender] = useState("female");
  const [bloodAlcohol, setBloodAlcohol] = useState(0);

  const choices_bottles = Array();
  choices_bottles.push({label: "1 bottle", value: 1});
  choices_bottles.push({label: "2 bottles", value: 2});
  choices_bottles.push({label: "3 bottles", value: 3});
  choices_bottles.push({label: "4 bottles", value: 4});
  choices_bottles.push({label: "5 bottles", value: 5});

  const choices_hours = Array();
  choices_hours.push({label: "1 hour", value: 1});
  choices_hours.push({label: "2 hours", value: 2});
  choices_hours.push({label: "3 hours", value: 3});
  choices_hours.push({label: "4 hours", value: 4});
  choices_hours.push({label: "5 hours", value: 5});

  const options = [
    {label: "Female", value: "female"},
    {label: "Male", value: "male"}
  ];

  function calculate() {
    if (weight === "") {
      alert("Please enter weight.");
    }

    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (hours * burning);

    if (gender === "female") {
      result = grams_left / (weight * 0.6);

      if (result < 0) {
        setBloodAlcohol(0);
      } else {
        setBloodAlcohol(result);
      }
    } else {
      result = grams_left / (weight * 0.7);

      if (result < 0) {
        setBloodAlcohol(0);
      } else {
        setBloodAlcohol(result);
      }
    }

  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Alcometer</Text>
          <Text style={styles.semiHeading}>Weight</Text>
          <TextInput style={styles.input} onChangeText={text => setWeight(text)} placeholder="Weight in kilograms" keyboardType="numeric"/>
        </View>
        <View>
          <Text style={styles.semiHeading}>Bottles</Text>
          <Picker selectedValue={bottles} onValueChange={(itemValue) => setBottles(itemValue)}>
            {choices_bottles.map((bottles, index) => (
              <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
            ))}
          </Picker>
        </View>
        <View>
          <Text style={styles.semiHeading}>Time</Text>
          <Picker selectedValue={hours} onValueChange={(itemValue) => setHours(itemValue)}>
            {choices_hours.map((hours, index) =>(
              <Picker.Item key={index} label={hours.label} value={hours.value}/>          
            ))}
          </Picker>
        </View>
        <View>
          <Text style={styles.semiHeading}>Gender</Text>
          <Radiobutton options={options} onPress={(value) => {setGender(value)}}/>
        </View>
        <View>
          <Text>The blood alcohol level is: {bloodAlcohol.toFixed(2)}</Text>
        </View>
        <Button style={styles.button} title="Calculate" onPress={calculate}/>
      </ScrollView>
    </View>
  );
}


