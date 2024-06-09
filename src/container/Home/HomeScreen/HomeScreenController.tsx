import {jwtDecode} from 'jwt-decode';
import {useContext, useEffect, useState} from 'react';
import {Get} from '../../../common/services/httpRequrest';
import {AuthContext} from '../../Auth/AuthContext';

export interface JwtDecodeType {
  iat?: string;
  userId?: string;
}
export interface ProfileDataType {
  __v?: number;
  _id: string;
  blockedUsers?: [];
  createdAt?: string;
  dateOfBirth?: string;
  datingPrefrence?: [];
  email?: string;
  firstName?: string;
  gender?: string;
  imageUrls?: string[];
  likedProfiles: [];
  matches?: [];
  password?: string;
  prompts?: [];
  recievedLikes?: [];
  type?: string;
  updatedAt?: string;
}

interface HomeScreenControllerTypes {
  profileData: ProfileDataType[];
  currentProfile: ProfileDataType;
}

const useHomeScreenController = (): HomeScreenControllerTypes => {
  const [userId, setUserId] = useState<string>('');
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const [profileData, setProfileData] = useState<ProfileDataType[]>([]);
  const [currentProfile, setCurrentProfile] = useState<ProfileDataType>(
    profileData[0],
  );
  //@ts-ignore
  const {token} = useContext(AuthContext);
  const fetchUser = (): void => {
    const decodedToken: JwtDecodeType = jwtDecode(token);
    const userId = decodedToken.userId;
    setUserId(userId as string);
  };

  const fetchMatches = async (): Promise<void> => {
    Get(
      `/matches?userId=${userId}`,
      res => {
        //@ts-ignore
        if (res.matches) {
          //@ts-ignore
          setProfileData(res?.matches);
        }
      },
      err => {
        console.log(err);
      },
    );
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchMatches();
    }
  }, [userId]);

  useEffect(() => {
    if (profileData.length > 0) {
      setCurrentProfile(profileData[0]);
    }
  }, [profileData]);

  return {profileData, currentProfile};
};

export default useHomeScreenController;
