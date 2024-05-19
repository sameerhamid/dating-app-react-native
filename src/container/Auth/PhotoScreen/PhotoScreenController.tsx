import {View, Text} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {navigate} from '../../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../../common/utils/registrationUtils';
import {AuthScreenEnums} from '../../../common/constants/enums';

interface usePhoteSceenControllerTypes {
  imageUrls: string[];
  setImageUrls: Dispatch<SetStateAction<string[]>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  handleAddImage: () => void;
  handleNext: () => void;
}
const usePhotoScreenController = (): usePhoteSceenControllerTypes => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleAddImage = (): void => {
    // find the first empty slot in the array

    console.log(imageUrls);

    const index = imageUrls.findIndex(url => url.trim() === '');

    // let index = -1;
    // for (let i = 0; i < imageUrls.length; i++) {
    //   if (imageUrl[i].trim() === '') index = i;
    //   break;
    // }

    if (index !== -1) {
      let updatedUrls = [...imageUrls];
      if (imageUrl !== '') {
        console.log('called inside if');

        updatedUrls[index] = imageUrl;
        setImageUrls(updatedUrls);
        setImageUrl('');
      }
    }
  };

  const handleNext = (): void => {
    if (imageUrls.length > 0) {
      saveRegistrationProgress(AuthScreenEnums.PHOTOS, {imageUrls});
    }
    navigate(NavScreenTags.PROMPTS_SCREEN);
  };

  useEffect(() => {
    getRegistrationProgress(AuthScreenEnums.PHOTOS).then(imageUrls => {
      console.log(imageUrls);

      if (imageUrls) {
        setImageUrl(imageUrls);
      }
    });
  }, []);
  return {
    imageUrls,
    setImageUrls,
    handleAddImage,
    imageUrl,
    setImageUrl,
    handleNext,
  };
};

export default usePhotoScreenController;
