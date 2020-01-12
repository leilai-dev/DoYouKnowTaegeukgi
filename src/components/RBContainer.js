import React, { useState, useContext } from 'react';
import { ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import {
  Button, Layout, Input, Toggle, Text, Radio,
  RadioGroup,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Slider from '@react-native-community/slider';
import { TextContext } from '../contexts/TextContext';

// const useToggleChanges = (initialCheck = false) => {
//   const [checked, setChecked] = React.useState(initialCheck);

//   const onCheckedChange = (isChecked) => {
//     setChecked(isChecked);
//   };

//   return {
//     checked,
//     onChange: onCheckedChange,
//   };
// };

const RBContainer = (props) => {
  const {
    isTextDisplay, setTextDisplay,
    isTextLoop, setTextLoop,
    text, setText,
    loopSpeed, setLoopSpeed,
    textPosition, setTextPosition,
    fontSize, setFontSize,
    fontColor, setFontColor,
    backgroundAlpha, setBackgroundAlpha,
    backgroundColor, setBackgroundColor,
  } = useContext(TextContext);

  const navigateDetails = () => {
    props.navigation.navigate('FlagList');
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onCheckedChange = (index) => {
    const colors = ['black',
      'rebeccapurple',
      'navy',
      'greenyellow',
      'red',
      'lightpink',
      'moccasin',
      'white',]
    setFontColor(colors[index]);
    setSelectedIndex(index);
  };

  const renderIcon = (style) => (
    <Icon fill='#232323' name="edit" size={24} />
  )

  const icon1 = () => (
    <EntypoIcon color='white' name="align-vertical-middle" size={24} />
  )
  const icon2 = () => (
    <EntypoIcon color='white' name="align-top" size={24} />
  )
  const icon3 = () => (
    <EntypoIcon color='white' name="align-bottom" size={24} />
  )
  const icon4 = (style) => (
    <EntypoIcon color='white' name="resize-full-screen" size={24} />
  )



  return (
    <ScrollView
      style={{
        paddingBottom: 130,
        width: '93%',
      }}
    >
      {/* 레이아웃 마진 적절히 주기 */}

      {/* 글자 표시 on, 루프 on 일 때 텍스트 속도 조정 on */}
      <Layout
        style={{
          backgroundColor: 'tranperant',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 18
        }}>
        {/* 글자 표시 토글 연결 */}

        <Toggle
          textStyle={{ fontSize: 22, height: '100%', paddingTop: 6, textAlignVertical: 'center' }}
          text='글자 표시'
          status='control'
          checked={isTextDisplay}
          onChange={() => setTextDisplay(!isTextDisplay)}
        />


        {/* 루프 애니메이션 토글, 글자 표시 on 일때 */}
        <Toggle
          textStyle={{ fontSize: 22, height: '100%', paddingTop: 6, textAlignVertical: 'center' }}
          text='반복 재생'
          status='control'
          disabled={!isTextDisplay}
          checked={isTextLoop}
          onChange={() => setTextLoop(!isTextLoop)}
        />
      </Layout>

      <Input
        ref={ref => this.Input = ref}
        style={{ marginBottom: 18 }}
        value={text}
        onIconPress={() => this.Input.focus()}
        icon={renderIcon}
        disabled={!isTextDisplay}
        onChangeText={e => setText(e)}
      />

      {/* 텍스트 크기 조정 버튼 5 종류 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 22, height: 28, lineHeight: 28 }}>글자 크기</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Layout style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: 'tranperant',
          marginBottom: 12
        }}>
          <Button style={{}} size='tiny' appearance={fontSize === 0.2 ? 'filled' : 'outline'}
            onPress={() => setFontSize(0.2)}
            disabled={!isTextDisplay || isTextLoop}
          >가</Button>
          <Button style={{}} size='small' appearance={fontSize === 0.3 ? 'filled' : 'outline'}
            onPress={() => setFontSize(0.3)}
            disabled={!isTextDisplay || isTextLoop}
          >가</Button>
          <Button style={{}} size='medium' appearance={fontSize === 0.4 ? 'filled' : 'outline'}
            onPress={() => setFontSize(0.4)}
            disabled={!isTextDisplay || isTextLoop}
          >가</Button>
          <Button style={{}} size='large' appearance={fontSize === 0.6 ? 'filled' : 'outline'}
            onPress={() => setFontSize(0.6)}
            disabled={!isTextDisplay || isTextLoop}
          >가</Button>
          <Button style={{}} size='giant' appearance={fontSize === 0.8 ? 'filled' : 'outline'}
            onPress={() => setFontSize(0.8)}
            disabled={!isTextDisplay || isTextLoop}
          >가</Button>
        </Layout>
      </TouchableWithoutFeedback>

      {/* 텍스트 색상 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 22, height: 28, lineHeight: 28, marginBottom: 2 }}>글자 색상</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Layout style={{
          backgroundColor: 'tranperant',
          marginBottom: 18
        }}>
          <RadioGroup
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
            selectedIndex={selectedIndex}
            onChange={onCheckedChange}
          >
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'black',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              status='primary'
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'rebeccapurple',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'navy',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'greenyellow',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'red',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'lightpink',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'moccasin',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
            <Radio
              style={{
                borderRadius: 4,
                padding: 8,
                backgroundColor: 'white',
              }}
              disabled={!isTextDisplay || isTextLoop}
            />
          </RadioGroup>
        </Layout>
      </TouchableWithoutFeedback>

      {/* 텍스트 속도 조정 5단계? 2~20 2/5/10/20/40 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 22, height: 28, lineHeight: 28, marginBottom: 6 }}>반복 속도</Text>
      </TouchableWithoutFeedback>
      <Layout style={{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'tranperant',
        marginBottom: 18
      }}>
        <Button style={{}} size='medium' appearance={loopSpeed === 40 ? 'filled' : 'outline'}
          onPress={() => setLoopSpeed(40)}
          disabled={!isTextDisplay || isTextLoop}
        >X 1</Button>
        <Button style={{}} size='medium' appearance={loopSpeed === 20 ? 'filled' : 'outline'}
          onPress={() => setLoopSpeed(20)}
          disabled={!isTextDisplay || isTextLoop}
        >X 2</Button>
        <Button style={{}} size='medium' appearance={loopSpeed === 10 ? 'filled' : 'outline'}
          onPress={() => setLoopSpeed(10)}
          disabled={!isTextDisplay || isTextLoop}
        >X 3</Button>
        <Button style={{}} size='medium' appearance={loopSpeed === 5 ? 'filled' : 'outline'}
          onPress={() => setLoopSpeed(5)}
          disabled={!isTextDisplay || isTextLoop}
        >X 4</Button>
        <Button style={{}} size='medium' appearance={loopSpeed === 2 ? 'filled' : 'outline'}
          onPress={() => setLoopSpeed(2)}
          disabled={!isTextDisplay || isTextLoop}
        >X 5</Button>
      </Layout>

      {/* 텍스트 표시 위치 버튼 4종 디폴트 가운데 작게 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 22, height: 28, lineHeight: 28, marginBottom: 6 }}>글자 영역</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Layout style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: 'tranperant',
          marginBottom: 18
        }}>
          <Button style={{}} size='giant' appearance={textPosition === 'center' ? 'filled' : 'outline'}
            onPress={() => setTextPosition('center')}
            disabled={!isTextDisplay || isTextLoop}
            icon={icon1}
          ></Button>
          <Button style={{}} size='giant' appearance={textPosition === 'flex-end' ? 'filled' : 'outline'}
            onPress={() => setTextPosition('flex-end')}
            disabled={!isTextDisplay || isTextLoop}
            icon={icon2}
          ></Button>
          <Button style={{}} size='giant' appearance={textPosition === 'flex-start' ? 'filled' : 'outline'}
            onPress={() => setTextPosition('flex-start')}
            textStyle={{ textAlignVertical: 'bottom' }}
            disabled={!isTextDisplay || isTextLoop}
            icon={icon3}
          ></Button>
          <Button style={{}} size='giant' appearance={textPosition === 'expand' ? 'filled' : 'outline'}
            onPress={() => setTextPosition('expand')}
            disabled={!isTextDisplay || isTextLoop}
            icon={icon4}
          ></Button>
        </Layout>
      </TouchableWithoutFeedback>

      {/* 배경 알파 react-native-slider 컴포넌트 추가하기*/}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 22, height: 28, lineHeight: 28, marginBottom: 6 }}>배경 투명도</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Layout style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          backgroundColor: '#3366FF',
          borderRadius: 48,
          marginBottom: 48
        }}>
          <Slider
            style={{ width: '100%', height: 40 }}
            value={backgroundAlpha}
            onValueChange={(value) => {
              clearTimeout(this.sliderTimeoutId)
              this.sliderTimeoutId = setTimeout(() => {
                setBackgroundAlpha(value)
              }, 100)
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#102694"
            maximumTrackTintColor="#D9E4FF"
            thumbTintColor="white"
          />
        </Layout>
      </TouchableWithoutFeedback>
      {/* 배경 색상 / 알파 / 텍스트 색상 / 효과 - 볼드, 아웃라인, ...  */}

    </ScrollView>
  )
}

export default RBContainer;