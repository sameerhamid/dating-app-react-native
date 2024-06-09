// Type of Border
export enum BorderType {
  DOTTED = 1,
  SOLID = 2,
  DASHED = 3,
}

// Style of Border
export enum BorderStyle {
  DOTTED = 'dotted',
  DASHED = 'dashed',
  SOLID = 'solid',
}

// Render Image Source Type
export enum ImageSourceType {
  URL = 'Url',
  LOCAL = 'Local',
}

// gender enums

export enum Gender {
  MEM = 'Men',
  WOMEN = 'Women',
  NON_BINARY = 'Non-Binary',
}

// type screen enums
export enum Type {
  STRIAGHT = 'striaght',
  GAY = 'gay',
  LESIBIAN = 'lesibian',
  BISEXUAL = 'bisexual',
}

// dating type
export enum DatingType {
  MEM = 'Men',
  WOMEN = 'Women',
  EVERYONE = 'Everyone',
}

// looking for type

export enum LookingFor {
  LIFEPARTNER = 'Lifepartner',
  LONG_TERM_RELATIONSHIP = 'Long-term relationship',
  LONG_TERM_RELATIONSHIP_OPEN_TO_SHORT = 'Long-term relationship open to short',
  SHORT_TERM_RELATIONSHIP_OPEN_TO_LONG = 'Short-term relationship open to long',
  SHORT_TERM_RELATIONSHIP = 'Short-term relationship',
  FIGURING_OUT_MY_DATING_GOALS = 'Figuring out my dating goals',
}

// show promts switch enums

export enum ShowPromptsEnum {
  ABOUT_ME = 'About me',
  SELF_CARE = 'Self Care',
}

// auth screen enums

export enum AuthScreenEnums {
  NAME = 'Name',
  EMAIL = 'Email',
  PASSWORD = 'Password',
  BIRTH = 'Birth',
  LOCATION = 'Location',
  GENDER = 'Gender',
  TYPE = 'Type',
  DATING = 'Dating',
  LOOKING_FOR = 'LookingFor',
  HOME_TOWN = 'HomeTown',
  PHOTOS = 'Photos',
  PROMPTS = 'Prompts',
}

export enum HomeScreenTopTab {
  COMPATIBLE = 'Compatible',
  ACTIVE_TODAY = 'Active Today',
  NEW_HERE = 'New Here',
}
