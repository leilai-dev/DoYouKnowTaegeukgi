import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Layout, Input, Icon, Toggle, Text } from '@ui-kitten/components';

import Store from '../store';

const useToggleChanges = (initialCheck = false) => {
  const [checked, setChecked] = React.useState(initialCheck);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return {
    checked,
    onChange: onCheckedChange,
  };
};

const RBContainer = (props) => {
  const navigateDetails = () => {
    props.navigation.navigate('FlagList');
  };

  const switchSizeButtonAppearance = (textSize) => {
    switch (textSize) {
      case 0.2:
        return 'filled'
      case 0.4:
        return 'filled'
      case 0.6:
        return 'filled'
      case 0.8:
        return 'filled'
      case 1:
        return 'filled'
      default:
        return 'outline';
    }
  }

  const onIconPress = () => {

  }

  const renderIcon = (style) => (
    <Icon {...style} fill='#232323' name="edit-2-outline" />
  )
  return (
    <ScrollView style={{
      padding: 22,
      paddingBottom: 200,
    }}>
      {/* 레이아웃 마진 적절히 주기 */}

      {/* 글자 표시 on, 루프 on 일 때 텍스트 속도 조정 on */}
      <Layout style={{ backgroundColor: 'tranperant', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 24 }}>
        {/* 글자 표시 토글 연결 */}
        <Store.Consumer>
          {
            store => (
              <Toggle
                textStyle={{ fontSize: 22, height: '100%', paddingTop: 6, textAlignVertical: 'center' }}
                text='글자 표시'
                status='control'
                checked={store.isTextDisplay}
                onChange={() => store.textDisplayToggle()}
              />
            )
          }
        </Store.Consumer>

        {/* 루프 애니메이션 토글, 글자 표시 on 일때 */}
        <Store.Consumer>
          {
            store => (
              <Toggle
                textStyle={{ fontSize: 22, height: '100%', paddingTop: 6, textAlignVertical: 'center' }}
                text='반복 재생'
                status='control'
                disabled={!store.isTextDisplay}
                checked={store.isTextLoop}
                onChange={() => store.textLoopToggle()}
              />
            )
          }
        </Store.Consumer>
      </Layout>

      <Store.Consumer>
        {
          store => (
            <Input
              style={{ marginBottom: 24 }}
              value={store.textMessage}
              icon={renderIcon}
              disabled={!store.isTextDisplay}
              // onIconPress={onFocus} // 쓸일이 있나?
              onChangeText={store.onChangeTextMessage}
            />
          )
        }
      </Store.Consumer>

      {/* 텍스트 크기 조정 버튼 5 종류 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 24, height: 32, lineHeight: 32 }}>글자 크기</Text>
      </TouchableWithoutFeedback>
      <Store.Consumer>
        {
          store => (
            <Layout style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              backgroundColor: 'tranperant'
            }}>
              <Button style={{}} size='tiny' appearance={store.textSize === 0.2 ? 'filled' : 'outline'}
                onPress={() => store.changeTextSize(0.2)}
              >가</Button>
              <Button style={{}} size='small' appearance={store.textSize === 0.4 ? 'filled' : 'outline'}
                onPress={() => store.changeTextSize(0.4)}
              >가</Button>
              <Button style={{}} size='medium' appearance={store.textSize === 0.6 ? 'filled' : 'outline'}
                onPress={() => store.changeTextSize(0.6)}
              >가</Button>
              <Button style={{}} size='large' appearance={store.textSize === 0.8 ? 'filled' : 'outline'}
                onPress={() => store.changeTextSize(0.8)}
              >가</Button>
              <Button style={{}} size='giant' appearance={store.textSize === 1 ? 'filled' : 'outline'}
                onPress={() => store.changeTextSize(1)}
              >가</Button>
            </Layout>
          )
        }
      </Store.Consumer>

      {/* 텍스트 속도 조정 5단계? 2~20 2/5/10/20/40 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 24, height: 32, lineHeight: 32 }}>반복 속도</Text>
      </TouchableWithoutFeedback>
      <Store.Consumer>
        {
          store => (
            <Layout style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              backgroundColor: 'tranperant',
              marginBottom: 24
            }}>
              <Button style={{}} size='medium' appearance={store.loopSpeed === 40 ? 'filled' : 'outline'} disabled={!store.isTextLoop}
                onPress={() => store.changeLoopSpeed(40)}
              >X 1</Button>
              <Button style={{}} size='medium' appearance={store.loopSpeed === 20 ? 'filled' : 'outline'} disabled={!store.isTextLoop}
                onPress={() => store.changeLoopSpeed(20)}
              >X 2</Button>
              <Button style={{}} size='medium' appearance={store.loopSpeed === 10 ? 'filled' : 'outline'} disabled={!store.isTextLoop}
                onPress={() => store.changeLoopSpeed(10)}
              >X 3</Button>
              <Button style={{}} size='medium' appearance={store.loopSpeed === 5 ? 'filled' : 'outline'} disabled={!store.isTextLoop}
                onPress={() => store.changeLoopSpeed(5)}
              >X 4</Button>
              <Button style={{}} size='medium' appearance={store.loopSpeed === 2 ? 'filled' : 'outline'} disabled={!store.isTextLoop}
                onPress={() => store.changeLoopSpeed(2)}
              >X 5</Button>
            </Layout>
          )
        }
      </Store.Consumer>

      {/* 텍스트 표시 위치 버튼 4종 디폴트 가운데 작게 */}
      <TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontSize: 24, height: 32, lineHeight: 32 }}>글자 영역</Text>
      </TouchableWithoutFeedback>
      <Store.Consumer>
        {
          store => (
            <Layout style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              backgroundColor: 'tranperant',
              marginBottom: 48
            }}>
              <Button style={{}} size='giant' appearance={store.textPosition === 'center' ? 'filled' : 'outline'} disabled={!store.isTextDisplay || !store.isTextLoop}
                onPress={() => store.changeTextPosition('center')}
              ></Button>
              <Button style={{}} size='giant' appearance={store.textPosition === 'flex-end' ? 'filled' : 'outline'} disabled={!store.isTextDisplay || !store.isTextLoop}
                onPress={() => store.changeTextPosition('flex-end')}
              ></Button>
              <Button style={{}} size='giant' appearance={store.textPosition === 'flex-start' ? 'filled' : 'outline'} disabled={!store.isTextDisplay || !store.isTextLoop}
                onPress={() => store.changeTextPosition('flex-start')}
              ></Button>
              <Button style={{}} size='giant' appearance={store.textPosition === 'expand' ? 'filled' : 'outline'} disabled={!store.isTextDisplay || !store.isTextLoop}
                onPress={() => store.changeTextPosition('expand')}
              ></Button>
            </Layout>
          )
        }
      </Store.Consumer>

      {/* 텍스트 크기 / 색상 / 효과 / 아웃라인 / 포지션 */}
      {/* 텍스트 이동 속도 */}
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Write a comment..." />
      </View>
      <View style={styles.gridContainer}>
        {data.grids.map(grid => (
          <TouchableOpacity
            key={grid.icon}
            onPress={() => this.Scrollable.close()}
            style={styles.gridButtonContainer}
          >
            <View style={[styles.gridButton, { backgroundColor: grid.color }]}>
              <FAIcon name={grid.icon} style={styles.gridIcon} />
            </View>
            <Text style={styles.gridLabel}>{grid.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Sample" onPress={() => this.Scrollable.close()}></Button>
      <Button title='DETAILS' onPress={() => { this.Scrollable.close(); this.navigateDetails() }}></Button> */}

    </ScrollView>
  )
}

export default RBContainer;