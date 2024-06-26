import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import LottieView from 'lottie-react-native';
import CustomButtom from '../../../common/components/customButton';
import {navigate} from '../../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import CustomText from '../../../common/components/customText';

const BasicInfo = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headingTxtContainer}>
        <CustomText text="You're one of kind." txtStyle={styles.heading} />
        <CustomText
          text="You're profile should be too."
          txtStyle={styles.heading}
        />
      </View>

      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('./love.json')}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <View style={styles.bottomBtn}>
        <CustomButtom
          title="Enter Baisc Info"
          onPress={() => navigate(NavScreenTags.NAME_SCREEN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headingTxtContainer: {
    marginTop: scaleSize(48),
    alignItems: 'center',
  },
  heading: {
    fontSize: scaleFontSize(26),
  },
  lottieContainer: {
    marginTop: scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: scaleSize(260),
    height: scaleSize(300),
  },
  bottomBtn: {
    // backgroundColor: '#94070b',
    // backgroundColor: 'black',
    height: scaleSize(60),
    margin: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: scaleSize(340),
    position: 'absolute',
    bottom: scaleSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnTxt: {
    color: '#fff',
    fontSize: scaleFontSize(22),
    fontWeight: '500',
  },
});
