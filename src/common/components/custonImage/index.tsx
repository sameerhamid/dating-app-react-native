import {Image, ImageSourcePropType, ImageStyle, View} from 'react-native';
import React from 'react';
import {ImageSourceType} from '../../constants/enums';
import {imageStyles} from './styles';
interface Props {
  source?: ImageSourcePropType | string;
  tintColor?: string;
  imageStyle?: ImageStyle;
  sourceType?: ImageSourceType;
}

const defauleProps: Props = {
  source: undefined,
  tintColor: undefined,
  imageStyle: undefined,
  sourceType: undefined,
};
const CustomImage = (props: typeof defauleProps): React.ReactElement => {
  console.log(source);

  const {source, tintColor, imageStyle, sourceType} = props;

  const imageStyled = imageStyles();

  return source ? (
    <Image
      resizeMode="contain"
      style={{
        ...imageStyled.icon_22,
        ...(imageStyle ?? {}),
        ...{tintColor: tintColor ?? ''},
      }}
      //@ts-ignore
      source={sourceType === ImageSourceType.URL ? {uri: `${source}`} : source} // source will display image based on if it contains a url or is a locally stored image
    />
  ) : (
    <View />
  );
};

export default CustomImage;
