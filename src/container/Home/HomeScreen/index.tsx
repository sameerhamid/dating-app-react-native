import {SafeAreaView, View} from 'react-native';
import React from 'react';
import CustomText from '../../../common/components/customText';
import useHomeScreenController from './HomeScreenController';

const HomeScreen = () => {
  const {profileData, currentProfile} = useHomeScreenController();
  return (
    <SafeAreaView>
      <View>
        <CustomText text="HomeScreen" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
