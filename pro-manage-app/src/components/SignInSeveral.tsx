import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomDropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const SignInServeral: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setShowOptions(false);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <View >
      <TouchableOpacity
        style={styles.selectedOptionContainer}
        onPress={handleToggleOptions}
      >
        <Text style={styles.selectedOptionText}>
          {selectedOption || "Selecione"}
        </Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelect(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SignInServeral;

const styles = StyleSheet.create({
  selectedOptionContainer: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 13,
    borderRadius: 4,
    marginBottom: 20,
    padding: 10
  },
  selectedOptionText: {
    fontSize: 12,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    marginTop: 10,
  },
});

