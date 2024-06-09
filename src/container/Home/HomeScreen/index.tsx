import {Pressable, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import useHomeScreenController from './HomeScreenController';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../common/styles/colors';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';

import CustomText from '../../../common/components/customText';
import textStyles from '../../../common/components/customText/textStyles';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const {
    profileData,
    currentProfile,
    tabs,
    textStyle,
    selectedTab,
    setSelectedTab,
  } = useHomeScreenController();

  const renderTop = (): React.ReactElement => (
    <View
      style={{
        marginTop: scaleSize(20),
        flexDirection: 'row',
        columnGap: 10,
        paddingHorizontal: scaleSize(10),
      }}>
      <View>
        <Ionicons name="sparkles" size={30} color={Colors.text} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: scaleSize(8),
        }}>
        {tabs.map(tab => {
          return (
            <Pressable
              onPress={() => setSelectedTab(tab.id)}
              key={tab.id}
              style={{
                backgroundColor:
                  selectedTab === tab.id ? Colors.text : Colors.white,
                paddingHorizontal: scaleSize(10),
                borderRadius: scaleSize(20),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText
                text={tab.name}
                txtStyle={
                  selectedTab === tab.id ? textStyle.white14 : textStyle.black16
                }
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
  return <SafeAreaView>{renderTop()}</SafeAreaView>;
};

export default HomeScreen;
