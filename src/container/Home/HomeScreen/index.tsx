import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../Auth/AuthContext';
import {jwtDecode} from 'jwt-decode';
import CustomText from '../../../common/components/customText';
interface JwtDecodeType {
  iat?: string;
  userId?: string;
}
const HomeScreen = () => {
  const [userId, setUserId] = useState<string>('');
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const [currentProfile, setCurrentProfile] = useState();
  const [profileData, setProfileData] = useState<[]>([]);
  //@ts-ignore
  const {token} = useContext(AuthContext);
  const fetchUser = (): void => {
    const decodedToken: JwtDecodeType = jwtDecode(token);
    const userId = decodedToken.userId;
    setUserId(userId as string);
  };

  const fetchMatches = async (): Promise<void> => {
    try {
    } catch (error) {
      console.log('Error', error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchMatches();
    }
  }, [userId]);

  return (
    <SafeAreaView>
      <View>
        <CustomText text="HomeScreen" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
