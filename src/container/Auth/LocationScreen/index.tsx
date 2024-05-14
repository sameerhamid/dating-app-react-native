import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';

import CustomText from '../../../common/components/customText';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import Colors from '../../../common/styles/colors';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import MapView, {MapMarker} from 'react-native-maps';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
const LocationScreen = () => {
  const [location, setLocation] = useState<string>('');

  const [coordinates] = useState([
    {
      latitude: 12.9716,
      lonigtude: 77.5946,
    },
    {
      latitude: 1.0451,
      lonigtude: 77.6269,
    },
  ]);

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(postion => {
  //     const {latitude, longitude} = postion.coords;
  //     setRegion({ ...region, latitude, longitude });

  //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlang=${latitude},${longitude}$key`)
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <CustomHeader
        title="Location Screen"
        leftAccessories={Images.BACK_ARROW}
        leftAccessoriesPress={goBack}
      />
      {/* heading  */}

      {/* rest of the screen  */}

      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.newsLetterIcon}>
            <MaterialCommunityIcons
              name="location-exit"
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
          <CustomText text="Where do you live?" txtSize={scaleFontSize(22)} />

          {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: 13.0451,
              longitude: 77.6269,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapMarker draggable coordinate={coordinates[0]}>
              <View>
                <CustomText
                  text={location}
                  txtSize={scaleFontSize(22)}
                  txtStyle={{textAlign: 'center'}}
                />
              </View>
            </MapMarker>
          </MapView> */}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate(NavScreenTags.GENDER_SCREEN);
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

export default LocationScreen;

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
  map: {
    width: '100%',
    height: scaleSize(400),
    borderRadius: scaleSize(5),
  },
});
