import {
  NavigationContainerRefWithCurrent,
  ParamListBase,
  Route,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRefWithCurrent<ParamListBase>
> = React.createRef();

export const navigate = (screenName: string, params?: object): void => {
  navigationRef.current?.navigate(screenName, params);
};

export const navigateToAnotherStack = (
  stackName: string,
  screenName: string,
  params?: object,
): void => {
  navigationRef.current?.navigate(stackName, {
    screenName,
    params,
  });
};

export const getCurrentScreenName = (): Route<string> | undefined =>
  navigationRef.current?.getCurrentRoute();

export const goBack = (): void => {
  navigationRef.current?.goBack();
};

export const replace = (routeName: string): void => {
  navigationRef.current?.dispatch(StackActions.replace(routeName));
};

/**
 * removes the current screen from the stack
 */
export const popScreen = () => {
  navigationRef.current?.dispatch(StackActions.pop());
};

/**
 * removes all active screens from the stack except initial
 */
export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};
