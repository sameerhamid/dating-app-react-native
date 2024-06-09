import {jwtDecode} from 'jwt-decode';
import {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';
import {Get} from '../../../common/services/httpRequrest';
import {AuthContext} from '../../Auth/AuthContext';
import {HomeScreenTopTab} from '../../../common/constants/enums';
import {ThemeModelItem} from '../../../common/model/theme/themeModel';
import textStyles, {
  TextStyleTypes,
} from '../../../common/components/customText/textStyles';
import {useTheme} from '@react-navigation/native';

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
interface TabTypes {
  id: number;
  name: string;
}
interface HomeScreenControllerTypes {
  profileData: ProfileDataType[];
  currentProfile: ProfileDataType;
  tabs: TabTypes[];
  textStyle: TextStyleTypes;
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

const useHomeScreenController = (): HomeScreenControllerTypes => {
  const [userId, setUserId] = useState<string>('');
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
  const [profileData, setProfileData] = useState<ProfileDataType[]>([]);
  const [currentProfile, setCurrentProfile] = useState<ProfileDataType>(
    profileData[0],
  );
  const tabs: TabTypes[] = [
    {id: 1, name: HomeScreenTopTab.COMPATIBLE},
    {id: 2, name: HomeScreenTopTab.ACTIVE_TODAY},
    {id: 3, name: HomeScreenTopTab.NEW_HERE},
  ];

  const theme: ThemeModelItem = useTheme();
  const textStyle = textStyles(theme.colors);
  const [selectedTab, setSelectedTab] = useState(1);
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

  return {
    profileData,
    currentProfile,
    tabs,
    textStyle,
    selectedTab,
    setSelectedTab,
  };
};

export default useHomeScreenController;
