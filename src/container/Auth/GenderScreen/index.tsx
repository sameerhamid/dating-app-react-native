import {
  Pressable,
  SafeAreaView,
  StyleSheet,
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
import {AuthScreenEnums, Gender} from '../../../common/constants/enums';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
const GenderScreen = () => {
  const [gender, setGender] = useState<string>('');

  const handleNext = (): void => {
    if (gender.trim() !== '') {
      saveRegistrationProgress(AuthScreenEnums.GENDER, {gender});
      navigate(NavScreenTags.TYPE_SCREEN);
    }
  };

  useEffect(() => {
    getRegistrationProgress(AuthScreenEnums.GENDER).then(({gender}) => {
      setGender(gender);
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Gender Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

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
          <CustomText
            text="Which gender describe you the best"
            txtSize={scaleFontSize(22)}
          />

          <CustomText
            txtStyle={{marginTop: scaleSize(10)}}
            text="Dating app users are matched based on these three gernder groups. You can add more about gender after"
            txtSize={scaleFontSize(14)}
          />
        </View>

        <View style={styles.genderContainer}>
          <View style={styles.genderInnterContainer}>
            <CustomText text={Gender.MEM} txtSize={scaleFontSize(18)} />
            <Pressable onPress={() => setGender(Gender.MEM)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  gender === Gender.MEM
                    ? Colors.purpleButtonTheme
                    : Colors.grey100
                }
              />
            </Pressable>
          </View>

          <View style={styles.genderInnterContainer}>
            <CustomText text={Gender.WOMEN} txtSize={scaleFontSize(18)} />
            <Pressable onPress={() => setGender(Gender.WOMEN)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  gender === Gender.WOMEN
                    ? Colors.purpleButtonTheme
                    : Colors.grey100
                }
              />
            </Pressable>
          </View>

          <View style={styles.genderInnterContainer}>
            <CustomText text={Gender.NON_BINARY} txtSize={scaleFontSize(18)} />
            <Pressable onPress={() => setGender(Gender.NON_BINARY)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  gender === Gender.NON_BINARY
                    ? Colors.purpleButtonTheme
                    : Colors.grey100
                }
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.tickConteiner}>
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={scaleSize(30)}
            color={'black'}
          />
          <CustomText text="Visible on profile" txtSize={scaleFontSize(18)} />
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

export default GenderScreen;

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
  genderContainer: {
    marginTop: scaleSize(22),
    rowGap: scaleSize(20),
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: scaleSize(22),
  },
  genderInnterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tickConteiner: {
    marginTop: scaleSize(22),
    flexDirection: 'row',
    gap: scaleSize(8),
    alignItems: 'center',
  },
});
