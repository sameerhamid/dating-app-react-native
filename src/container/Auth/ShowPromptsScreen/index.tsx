import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../../../common/components/customText';
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../../common/components/customHeader';
import {Images} from '../../../common/constants/images';
import {goBack, navigate} from '../../../common/utils/navigatorUtils';
import Colors from '../../../common/styles/colors';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
import {
  DatingType,
  LookingFor,
  ShowPromptsEnum,
} from '../../../common/constants/enums';
import {promptsData, promptsType, QuestionsType} from './promptsData';
import Spacer from '../../../common/components/utility/spacer';
import {
  BottomModal,
  SlideAnimation,
  ModalContent,
  ModalTitle,
} from 'react-native-modals';
import CustomButtom from '../../../common/components/customButton';
const ShowPrompts = () => {
  const [prompts, setPrompts] = useState<promptsType[]>([]);
  const [option, setOption] = useState<string>(ShowPromptsEnum.ABOUT_ME);
  const [answer, setAnswer] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [isModalVisibel, setIsModalVisible] = useState<boolean>(false);

  const handlModel = (item: QuestionsType) => {
    setIsModalVisible(true);

    setQuestion(item.question);
  };

  useEffect(() => {
    if (prompts.length === 3) {
      setIsModalVisible(false);
      navigate(NavScreenTags.PROMPTS_SCREEN, {prompts: prompts});
    }
  }, [prompts]);

  const addPrompt = () => {
    if (answer !== '') {
      const newPromt = {question, answer};
      setPrompts(previousPrompts => [...previousPrompts, newPromt]);
      setAnswer('');
      setQuestion('');
      setIsModalVisible(false);
    }
    console.log(prompts);
  };

  const renderSwitchContainer = () => {
    return (
      <View style={styles.switchContainer}>
        {promptsData?.map(item => {
          return (
            <Pressable
              key={item.id}
              onPress={() => setOption(item.name)}
              style={[
                styles.switch,
                {
                  backgroundColor:
                    option === item.name
                      ? Colors.purpleButtonTheme
                      : Colors.grayBackground,
                },
              ]}>
              <CustomText
                txtSize={16}
                text={item?.name}
                txtStyle={{color: option === item.name ? '#fff' : 'black'}}
              />
            </Pressable>
          );
        })}
      </View>
    );
  };

  const renderBottomModal = () => {
    return (
      <>
        <BottomModal
          visible={isModalVisibel}
          modalAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          onTouchOutside={() => setIsModalVisible(false)}
          // height={0.3}
          width={1}
          onSwipeOut={() => setIsModalVisible(false)}
          modalTitle={<ModalTitle title="Answer the question" hasTitleBar />}>
          <ModalContent>
            <View style={styles.modleContainer}>
              <CustomText text={question ?? ''} txtSize={18} />

              <TextInput
                placeholder="Enter yourt answer"
                placeholderTextColor={'#858282'}
                style={styles.input}
                value={answer}
                onChangeText={txt => setAnswer(txt)}
              />

              <CustomButtom
                title="Add"
                btnStyle={{marginTop: scaleSize(20)}}
                isCompleteRadiusButton
                onPress={addPrompt}
              />
            </View>
          </ModalContent>
        </BottomModal>
      </>
    );
  };

  const renderQuestions = () => {
    return (
      <>
        {promptsData?.map((item, index) => {
          return (
            <View key={item.id}>
              {option === item.name && (
                <View style={styles.questionContainer}>
                  {item?.questions.map(question => {
                    return (
                      <Pressable
                        key={question.id}
                        style={styles.questionItem}
                        onPress={() => handlModel(question)}>
                        <CustomText
                          text={question?.question}
                          txtSize={scaleFontSize(18)}
                        />
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer}>
        <CustomHeader
          title="Show Prompts Screen"
          leftAccessories={Images.BACK_ARROW}
          leftAccessoriesPress={goBack}
        />
        {/* heading  */}

        {/* rest of the screen  */}

        <View style={styles.container}>
          <View style={styles.topContainer}>
            <CustomText
              text="View All"
              txtStyle={{color: Colors.purpleButtonTheme}}
            />

            <CustomText
              text="Prompts"
              txtStyle={{color: Colors.purpleButtonTheme}}
            />
          </View>

          {renderSwitchContainer()}
          <Spacer height={scaleSize(20)} />
          <View>{renderQuestions()}</View>
        </View>
      </SafeAreaView>

      {renderBottomModal()}
    </>
  );
};

export default ShowPrompts;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    marginHorizontal: scaleSize(20),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    columnGap: scaleSize(16),
    marginTop: scaleSize(18),
  },
  switch: {
    padding: scaleSize(10),
    borderRadius: scaleSize(50),
  },
  questionContainer: {
    rowGap: scaleSize(16),
  },
  questionItem: {},
  modleContainer: {
    marginHorizontal: scaleSize(10),
    marginVertical: scaleSize(22),
  },

  input: {
    marginTop: scaleSize(16),
    borderWidth: scaleSize(1),
    paddingHorizontal: scaleSize(16),
    color: 'black',
    fontSize: scaleFontSize(18),
    borderStyle: 'dashed',
    height: scaleSize(80),
    borderRadius: scaleSize(10),
  },
});
