import {View, Text} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface usePhoteSceenControllerTypes {
  imageUrls: string[];
  setImageUrls: Dispatch<SetStateAction<string[]>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  handleAddImage: () => void;
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

    console.log(index);

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
  return {imageUrls, setImageUrls, handleAddImage, imageUrl, setImageUrl};
};

export default usePhotoScreenController;
