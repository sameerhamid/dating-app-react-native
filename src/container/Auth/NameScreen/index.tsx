import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../../common/components/customText';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import Colors from '../../../common/styles/colors';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
import {AuthScreenEnums} from '../../../common/constants/enums';

const NameScreen = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  useEffect(() => {
    getRegistrationProgress(AuthScreenEnums.NAME).then(progressData => {
      if (progressData) {
        console.log(JSON.stringify(progressData));

        setFirstName(progressData.firstName || '');
      }
    });
  }, []);

  const handleNext = (): void => {
    if (firstName.trim() !== '') {
      saveRegistrationProgress(AuthScreenEnums.NAME, {firstName});

      navigate(NavScreenTags.EMAIL_SCREEN);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Name Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

      <View style={styles.headingContainer}>
        <CustomText
          text="NO BACKGROUND CHECKS ARE CONDUCTED"
          txtSize={scaleFontSize(22)}
        />
      </View>

      {/* rest of the screen  */}

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
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
          <CustomText text="What's your name?" txtSize={scaleFontSize(22)} />

          <TextInput
            placeholder="First name (required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.input}
            value={firstName}
            onChangeText={fName => setFirstName(fName)}
          />

          <TextInput
            placeholder="Last name"
            placeholderTextColor={'#BEBEBE'}
            style={styles.input}
            value={lastName}
            onChangeText={fName => setLastName(fName)}
          />
          <CustomText
            text="Last name is optional"
            txtSize={scaleFontSize(12)}
            txtStyle={{marginTop: scaleSize(6)}}
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

export default NameScreen;

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
    color: 'black',
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
