import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavScreenTags} from '../../../common/constants/navScreenTags';
import CustomText from '../../../common/components/customText';
import Colors from '../../../common/styles/colors';
const EmailScreen = () => {
  const [email, setEmail] = useState<string>('');
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Email Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="email-outline"
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
            text="Please provide a valid email"
            txtSize={scaleFontSize(30)}
          />

          <CustomText
            txtStyle={{marginTop: scaleSize(12)}}
            text="Email verification helps us to keep the account secure"
            txtSize={scaleFontSize(12)}
          />

          <TextInput
            placeholder="Enter your email (Required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.input}
            value={email}
            onChangeText={fName => setEmail(fName)}
          />
          <CustomText
            txtStyle={{marginTop: scaleSize(14)}}
            text="Note: You will be asked to verfy your email"
            txtSize={scaleFontSize(12)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate(NavScreenTags.PASSWORD_SCREEN);
          }}>
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

export default EmailScreen;
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
