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
import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import {promptsType} from '../ShowPromptsScreen/promptsData';
import {saveRegistrationProgress} from '../../../common/utils/registrationUtils';

const PromptsScreen = () => {
  const route = useRoute();

  const handleNext = (): void => {
    //@ts-ignore
    if (route.params?.prompts.length > 0) {
      //@ts-ignore
      saveRegistrationProgress('Prompts', route.params?.prompts.length);
    }

    navigate(NavScreenTags.PREFINAL_SCREEN);
  };

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Prompts Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

      {/* rest of the screen  */}

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="eye-outline"
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

        <View style={styles.promptsContainer}>
          {
            //@ts-ignore
            route?.params?.prompts ? (
              //@ts-ignore
              route?.params?.prompts?.map(
                (item: promptsType, index: number) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        navigate(NavScreenTags.SHOW_PROMPTS_SCREEN)
                      }
                      style={styles.promptItem}>
                      <CustomText
                        text={item?.question}
                        txtStyle={styles.promptItemTxt}
                      />
                      <CustomText
                        text={item?.answer}
                        txtStyle={styles.promptItemTxt}
                      />
                    </Pressable>
                  );
                },
              )
            ) : (
              <View style={styles.promptsInnerItemContainer}>
                <Pressable
                  onPress={() => navigate(NavScreenTags.SHOW_PROMPTS_SCREEN)}
                  style={styles.promptItem}>
                  <CustomText
                    text="Select a prompt"
                    txtStyle={styles.promptItemTxt}
                  />
                  <CustomText
                    text="And write your own answer"
                    txtStyle={styles.promptItemTxt}
                  />
                </Pressable>
                <Pressable
                  onPress={() => navigate(NavScreenTags.SHOW_PROMPTS_SCREEN)}
                  style={styles.promptItem}>
                  <CustomText
                    text="Select a prompt"
                    txtStyle={styles.promptItemTxt}
                  />
                  <CustomText
                    text="And write your own answer"
                    txtStyle={styles.promptItemTxt}
                  />
                </Pressable>
                <Pressable
                  onPress={() => navigate(NavScreenTags.SHOW_PROMPTS_SCREEN)}
                  style={styles.promptItem}>
                  <CustomText
                    text="Select a prompt"
                    txtStyle={styles.promptItemTxt}
                  />
                  <CustomText
                    text="And write your own answer"
                    txtStyle={styles.promptItemTxt}
                  />
                </Pressable>
              </View>
            )
          }
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

export default PromptsScreen;

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
    marginTop: scaleSize(30),
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
  promptsContainer: {
    marginTop: scaleSize(22),
    rowGap: scaleSize(20),
  },
  promptItem: {
    borderColor: Colors.purpleButtonTheme,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: scaleSize(10),
    height: scaleSize(70),
  },
  promptItemTxt: {
    color: 'grey',
  },
  promptsInnerItemContainer: {
    gap: scaleSize(22),
  },
});
