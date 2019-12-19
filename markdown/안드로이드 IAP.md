## react-native-iap 활용
### [dooboolab/react-native-iap: react-native native module for In App Purchase.] (https://github.com/dooboolab/react-native-iap)

## [Google Play 결제 개요  |  Android Developers] (https://developer.android.com/google/play/billing/billing_overview)
광고 제거 인앱 상품 등록을 위해 일회성 제품 구성

### [Google Play 결제 라이브러리 사용  |  Android Developers] (https://developer.android.com/google/play/billing/billing_library_overview)
안드로이드 디펜던시 음

영수증 검증의 경우 자체 서버 검증 / 기기 검증 (앱 자체 검증) 선택 가능,
기기 검증시 최소한 난독화 pro guard 활성화하기
```
-keep class com.android.vending.billing.**
```

### [관리되는 제품 만들기 - Play Console 고객센터] (https://support.google.com/googleplay/android-developer/answer/1153481)
필수 권한
```
관리되는 제품을 제공하려면 앱의 APK 매니페스트 파일에 com.android.vending.BILLING 권한을 선언해야 합니다. 전 세계에 앱을 배포하고자 한다면 모든 국가를 대상으로 com.android.vending.BILLING 권한을 사용하는 앱을 게시할 수 있습니다.
```
앱 정보 > 인앱 상품 > 관리되는 제품 만들기 위해 인앱 권한 설정 필요

#### [결제 프로필 만들기 - Play Console 고객센터] (https://support.google.com/googleplay/android-developer/answer/7161426)
이미 만드렁네

#### 


## 파이어 베이스로 결제 영수증 검증?
### [Google Play IAP verification using Cloud Functions - Sasikanth - Medium] (https://medium.com/@msasikanth/google-play-iap-verification-using-cloud-functions-bd8c3a22f9b9)
