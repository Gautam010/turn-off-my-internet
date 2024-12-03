import { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NativeModules } from 'react-native';
const { MobileDataModule } = NativeModules;

const toggleMobileData = (enable) => {
    MobileDataModule.toggleMobileData(enable, (error, success) => {
        if (error) {
            console.error(error);
        } else {
            console.log(success);
        }
    });
};

const Example = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState(null); 

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (selectedTime) => {
    setTime(selectedTime); 
    hideTimePicker();
  };


  if (time) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
        <Text>
          Mobile data will be turned off at {String(time.getHours())}:
          {String(time.getMinutes().toString().padStart(2, "0"))}
        </Text>
        <Button title="Change Time" onPress={() => setTime(null)} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue"  }}>
      <Button title="Set Time to turn off mobile data" onPress={showTimePicker} />
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
