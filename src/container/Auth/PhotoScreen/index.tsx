import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../common/components/customText';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import Colors from '../../../common/styles/colors';
import {NavScreenTags} from '../../../common/constants/navScreenTags';

import CustomImage from '../../../common/components/custonImage';
import {screenWidth} from '../../../common/constants/dimensions';
import CustomButtom from '../../../common/components/customButton';
import usePhotoScreenController from './PhotoScreenController';
const PhotoScreen = () => {
  const {
    imageUrls,
    setImageUrls,
    handleAddImage,
    imageUrl,
    setImageUrl,
    handleNext,
  } = usePhotoScreenController();

  console.log('image', imageUrls);

  const renderPhotoList = () => {
    return (
      <View style={styles.pototsContainer}>
        {imageUrls?.slice(0, 6).map((url: string, index: number) => {
          return (
            <Pressable
              key={index}
              style={[
                {...styles.potosInnerContainer, borderWidth: url ? 0 : 2},
              ]}>
              {url ? (
                <CustomImage
                  source={url}
                  key={index}
                  imageStyle={styles.imageStyle}
                />
              ) : (
                <MaterialCommunityIcons
                  name="image-outline"
                  size={scaleSize(38)}
                  color={'black'}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Photo Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

      {/* rest of the screen  */}

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialIcons
              name="photo-camera-back"
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

        <View style={{marginTop: scaleSize(22)}}>
          <CustomText
            text="Pick your photos and videos"
            txtSize={scaleFontSize(22)}
          />
          {renderPhotoList()}
        </View>

        <View style={{marginTop: scaleSize(10)}}>
          <CustomText text="Drag to record" txtSize={scaleFontSize(16)} />
          <CustomText
            text="Add four to six photos"
            txtSize={scaleFontSize(16)}
            txtStyle={{color: Colors.purpleButtonTheme}}
          />
        </View>

        <View style={styles.inputContainer}>
          <CustomText
            text="Add a picture of yourself"
            txtSize={scaleFontSize(16)}
          />
          <View style={styles.innerInputContainer}>
            <MaterialIcons
              name="photo-camera-back"
              size={scaleSize(22)}
              color={'black'}
            />

            <TextInput
              placeholder="Enter your image url"
              placeholderTextColor={'#BEBEBE'}
              style={styles.input}
              value={imageUrl}
              onChangeText={fName => setImageUrl(fName)}
            />
          </View>
        </View>

        {/* <CustomButtom
          onPress={handleAddImage}
          title="Add Image"
          btnStyle={{marginTop: scaleSize(28)}}
        /> */}

        <TouchableOpacity style={styles.addImageBtn} onPress={handleAddImage}>
          <CustomText text="Add Image" txtStyle={styles.addImageBtnTxt} />
        </TouchableOpacity>

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

export default PhotoScreen;

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
  pototsContainer: {
    marginTop: scaleSize(30),
    flexDirection: 'row',
    gap: scaleSize(15),
    flexWrap: 'wrap',
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
    // marginTop: scaleSize(20),
    // color: 'black',
    // borderBottomWidth: scaleSize(1),
    // paddingHorizontal: scaleSize(6),
    // paddingVertical: scaleSize(12),
    fontSize: scaleFontSize(18),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: scaleSize(10),
  },

  potosInnerContainer: {
    width: screenWidth * 0.27,
    height: screenWidth * 0.27,
    borderRadius: scaleSize(10),
    borderStyle: 'dashed',
    borderColor: Colors.purpleButtonTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerInputContainer: {
    marginTop: scaleSize(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayBackground,
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(6),
    columnGap: scaleSize(6),
    borderRadius: scaleSize(10),
  },
  addImageBtn: {
    alignSelf: 'center',
    marginTop: scaleSize(20),
  },
  addImageBtnTxt: {
    color: '#106eda',
  },
});
