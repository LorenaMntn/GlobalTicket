import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

const Contact = ({navigation}) => {
  const [formName, setFormName] = useState('Enter Name');
  const [formEmail, setFormEmail] = useState('Enter Email');
  const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
  const [formMessage, setFormMessage] = useState(
    "Let us know what's on your mind",
  );
  const submit = () => {
    if (!formName || !formEmail || !formMessage) {
      Alert.alert('Please enter info in all required fields');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={name => setFormate(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={email => setFormEmail(email)}
        value={formEmail}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Phone: </Text>
      <TextInput
        style={styles.textinput}
        onChangeText={phone => setFormPhoneNumber(phone)}
        value={formPhoneNumber}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitextinput}
        onChangeText={message => setFormMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />
      <Button title="Contact Us" color="#708090" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
  },
  txtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '80%',
    paddingBottom: 15,
  },
  multitxtinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    width: '90%',
    height: 120,
    marginBottom: 50,
  },
});

export default Contact;
