import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  label: string;
}

const Dropdown: FC<Props> = ({ label }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
          <Text style={styles.dropdown}>
            This is where the dropdown will be rendered.
          </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>{label}</Text>
      <Icon type='font-awesome' name="chevron-down"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    width: "90%",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: '#fff',
    top: 50,
  },
});

export default Dropdown;