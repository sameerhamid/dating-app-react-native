import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../common/components/customText';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import Colors from '../../../common/styles/colors';
import {saveRegistrationProgress} from '../../../common/utils/registrationUtils';
const PasswordScreen = () => {
  const [password, setPassword] = useState<string>('');

  const handleNext = (): void => {
    if (password.trim() !== '') {
      saveRegistrationProgress('Passoword', password);
      navigate(NavScreenTags.BIRTH_SCREEN);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Password Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={scaleSize(22)}
              color={'black'}
            />
          </View>
          <View style={styles.dotsContainer}>
            <View style={styles.dots} />
            <View style={styles.dots} />
            <View style={styles.dots} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <CustomText
            text="Please choose a password"
            txtSize={scaleFontSize(30)}
          />

          <TextInput
            autoFocus={true}
            placeholder="Enter your Password (Required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={fName => setPassword(fName)}
          />
          <CustomText
            txtStyle={{marginTop: scaleSize(14)}}
            text="Note: Your details will be safe with us"
            txtSize={scaleFontSize(12)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={scaleSize(34)}
            color={Colors.purpleButtonTheme}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    marginTop: scaleSize(40),
    marginHorizontal: scaleSize(20),
  },
  container: {
    marginTop: scaleSize(30),
    marginHorizontal: scaleSize(20),
  },
  iconsContainer: {
    flexDirection: 'row',
    columnGap: scaleSize(10),
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    columnGap: scaleSize(6),
  },
  dots: {
    width: scaleSize(8),
    height: scaleSize(8),
    borderRadius: scaleSize(4),
    backgroundColor: 'black',
  },
  newsLetterIcon: {
    padding: scaleSize(7),
    borderWidth: 1,
    borderRadius: scaleSize(30),
  },
  inputContainer: {
    marginTop: scaleSize(20),
  },
  input: {
    marginTop: scaleSize(20),

    borderBottomWidth: scaleSize(1),
    paddingHorizontal: scaleSize(6),
    paddingVertical: scaleSize(12),
    fontSize: scaleFontSize(18),
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: scaleSize(22),
  },
});
