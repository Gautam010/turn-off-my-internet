import { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Example = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isTimeSet, setTime] = useState(false)

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    console.warn("a time has been picked")
    hideTimePicker();
    timeSetHandler(time);
   
  };

  const timeSetHandler = (time) => {
    setTime(newTime)
    // return(
    //   <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"}}>
    //     <Text>Mobile data will be turned off at {String(time.getHours())}:{String(time.getMinutes().toString().padStart(2, '0'))}</Text>
    //     <Button title="Change Time"/>
    //   </View>
    // )

  }
  return (
    <View style={{flex:1,justifyContent: "center",alignItems: "center" }}>
      <Button title="Set Time to turn of mobile data" onPress={showTimePicker}/>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );



};


export default Example;