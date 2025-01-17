// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RegistrationForm from './RegistrationForm';
import Confirmation from './Confirmation';

const App = () => {

    const [registrationDetails, setRegistrationDetails] = useState(null);
    const handleConfirm = (details) => {
    setRegistrationDetails(details);
  };


  return (
   <SafeAreaView style={styles.container}>
      <RegistrationForm onConfirm={handleConfirm}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
