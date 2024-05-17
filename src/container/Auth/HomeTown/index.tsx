import {
  Pressable,
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
import {DatingType, LookingFor} from '../../../common/constants/enums';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
const HomeTownScreen = () => {
  const [home, setHOme] = useState<string>('');

  const handleNext = (): void => {
    if (home.trim() !== '') {
      saveRegistrationProgress('HomeTown', home);
      navigate(NavScreenTags.PHOTE_SCREEN);
    }
  };

  useEffect(() => {
    getRegistrationProgress('HomeTown').then(homeTown => {
      setHOme(homeTown);
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Home Town Screen"
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
            text="Where's your home town?"
            txtSize={scaleFontSize(22)}
          />
          <TextInput
            placeholder="Home town"
            placeholderTextColor={'#BEBEBE'}
            style={styles.input}
            value={home}
            onChangeText={txt => setHOme(txt)}
          />
        </View>

        {/* <View style={styles.tickConteiner}>
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={scaleSize(30)}
            color={'black'}
          />
          <CustomText text="Visible on profile" txtSize={scaleFontSize(18)} />
        </View> */}
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

export default HomeTownScreen;

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
  input: {
    marginTop: scaleSize(20),

    borderBottomWidth: scaleSize(1),
    paddingHorizontal: scaleSize(6),
    paddingVertical: scaleSize(12),
    fontSize: scaleFontSize(18),
  },
});
