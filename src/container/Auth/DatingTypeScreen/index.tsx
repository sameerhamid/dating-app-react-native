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
import {AuthScreenEnums, DatingType} from '../../../common/constants/enums';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
const DatingTypeScreen = () => {
  const [datingPreferences, setDatingPrefrences] = useState<string[]>([]);

  const chooseOption = (option: string) => {
    if (datingPreferences.includes(option)) {
      setDatingPrefrences(
        datingPreferences.filter(selectedOption => selectedOption !== option),
      );
    } else {
      setDatingPrefrences([...datingPreferences, option]);
    }
  };

  useEffect(() => {
    getRegistrationProgress(AuthScreenEnums.DATING)
      .then(progressData => {
        if (progressData.datingPreferences) {
          setDatingPrefrences(progressData.datingPreferences);
        }
      })
      .catch(err => {
        console.log('Dating Screen>>>', err);
      });
  }, []);

  const handleNext = (): void => {
    if (datingPreferences.length > 0) {
      saveRegistrationProgress(AuthScreenEnums.DATING, {datingPreferences});
      navigate(NavScreenTags.LOOKIN_FOR_SCREEN);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Dating Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

      {/* rest of the screen  */}

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="heart-outline"
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
            text="Who do you want to date?"
            txtSize={scaleFontSize(22)}
          />

          <CustomText
            txtStyle={{marginTop: scaleSize(10)}}
            text="Select all the people you're open to meeting"
            txtSize={scaleFontSize(14)}
          />
        </View>

        <View style={styles.typeContainer}>
          <View style={styles.typeInnterContainer}>
            <CustomText text={DatingType.MEM} txtSize={scaleFontSize(18)} />
            <Pressable onPress={() => chooseOption(DatingType.MEM)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  datingPreferences.includes(DatingType.MEM)
                    ? Colors.purpleButtonTheme
                    : Colors.grey100
                }
              />
            </Pressable>
          </View>

          <View style={styles.typeInnterContainer}>
            <CustomText text={DatingType.WOMEN} txtSize={scaleFontSize(18)} />
            <Pressable onPress={() => chooseOption(DatingType.WOMEN)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  //@ts-ignore
                  datingPreferences.includes(DatingType.WOMEN)
                    ? Colors.purpleButtonTheme
                    : Colors.grey100
                }
              />
            </Pressable>
          </View>

          <View style={styles.typeInnterContainer}>
            <CustomText
              text={DatingType.EVERYONE}
              txtSize={scaleFontSize(18)}
            />
            <Pressable onPress={() => chooseOption(DatingType.EVERYONE)}>
              <MaterialCommunityIcons
                name="circle"
                size={scaleSize(26)}
                color={
                  datingPreferences.includes(DatingType.EVERYONE)
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

export default DatingTypeScreen;

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
  typeContainer: {
    marginTop: scaleSize(22),
    rowGap: scaleSize(20),
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: scaleSize(22),
  },
  typeInnterContainer: {
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
