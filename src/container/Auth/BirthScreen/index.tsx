import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../common/components/customText';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import Colors from '../../../common/styles/colors';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
const BirthScreen = () => {
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleDayChange = (txt: string) => {
    setDay(txt);
    if (txt.length === 2) {
      //@ts-ignore
      monthRef.current.focus();
    }
  };

  const handleMonthChange = (txt: string) => {
    setMonth(txt);
    if (txt.length === 2) {
      //@ts-ignore
      yearRef.current.focus();
    }
  };

  const handleNext = (): void => {
    if (day.trim() !== '' && month.trim() !== '' && year.trim() !== '') {
      const dateOfBirth = `${day}/${month}/${year}`;
      saveRegistrationProgress('BirthDate', dateOfBirth);
      navigate(NavScreenTags.LOCATION_SCREEN);
    }
  };

  useEffect(() => {
    getRegistrationProgress('BirthDate')
      .then(birth => {
        if (birth) {
          const dataOfBirth = birth.split('/');
          setDay(dataOfBirth[0]);
          setMonth(dataOfBirth[1]);
          setYear(dataOfBirth[2]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Birth Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="cake-variant-outline"
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
            text="What's your date of birth?"
            txtSize={scaleFontSize(30)}
          />

          <View style={styles.dateInputContainer}>
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              autoFocus={true}
              placeholder="DD"
              placeholderTextColor={'#BEBEBE'}
              style={styles.input}
              value={day}
              onChangeText={handleDayChange}
            />

            <TextInput
              ref={monthRef}
              maxLength={2}
              keyboardType="numeric"
              autoFocus={true}
              placeholder="DD"
              placeholderTextColor={'#BEBEBE'}
              style={styles.input}
              value={month}
              onChangeText={handleMonthChange}
            />

            <TextInput
              ref={yearRef}
              maxLength={4}
              keyboardType="numeric"
              autoFocus={true}
              placeholder="YYYY"
              placeholderTextColor={'#BEBEBE'}
              style={styles.input}
              value={year}
              onChangeText={txt => setYear(txt)}
            />
          </View>
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

export default BirthScreen;

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
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(12),
    fontSize: scaleFontSize(16),
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: scaleSize(22),
  },
  dateInputContainer: {
    flexDirection: 'row',
    gap: scaleSize(16),
  },
});
