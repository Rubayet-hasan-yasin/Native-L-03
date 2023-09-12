import React, { useState } from 'react';
import { Text, View } from 'react-native';

//form validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be mxa of 16 characters')
  .required('length is required')
})


const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number)=>{

    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowreCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialchars = '!@#$%^()_+';


    if (upperCase) {
      characterList += upperCase
    }
    if (lowerCase) {
      characterList += lowerCase
    }
    if (numbers) {
      characterList += numbers
    }
    if (symbols) {
      characterList += symbols
    }


    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters:string, passwordLength: number)=>{
    let result='';

    for (let i = 0; i < passwordLength; i++) {
      const caracterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(caracterIndex)
    }
    return result;
  }


  const resetPassword = ()=>{
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(false)
    setUpperCase(false)
    setSymbols(false)
  }
  
  return (
    <View>
      <Text>APP</Text>
    </View>
  );
};

export default App;