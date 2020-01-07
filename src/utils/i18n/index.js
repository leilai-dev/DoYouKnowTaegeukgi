import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
// storage 사용 유무?
import storage from '../storage';
import { I18nManager } from 'react-native';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./translations/en.json'),
  koKR: () => require('./translations/ko-KR.json')
};

export const setI18nConfig = async () => {
  const { languageTag, isRTL } = await getCurrentLanguage();

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

export const getCurrentLanguage = async () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'kr', isRTL: false };

  let { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // 로컬 storage에서 현재 설정된 언어 설정이 있을 경우 해당 언어 반영
  const savedLanguage = await storage.get('languageTag');
  languageTag = savedLanguage || languageTag;
  console.log(languageTag)
  return { languageTag, isRTL };
}

export const setCurrentLanguage = async (languageTag) => {
  // lodash 파라미터 무슨 의미인지 모르게따
  storage.save('languageTag', languageTag).then(_ => {
    i18n.locale = languageTag;
  });
}

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export default translate;
// 해당 파일 임포트 하여 번역 대상 텍스트 i18n(key) 로 대체하기
// 앱 실행시 i18n 설정 불러오기