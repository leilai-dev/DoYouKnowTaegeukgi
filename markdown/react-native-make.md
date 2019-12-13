### [Generate your React Native app icons in a single command line] (https://medium.com/bam-tech/generate-your-react-native-app-icons-in-a-single-command-line-145af2e329b2)
Use it
```
Have a single icon file at the ready somewhere:
1024x1024px is recommended
For Android make sure your icon is adaptive icon compliant
For iOS make sure your icon does not have a transparent background
Then in your React Native project, run:
react-native set-icon --path <path to your icon> --platform <android|ios|all> --background <color-for-android>
```
```
react-native set-icon --path ./AppIcon1024x.png --platform android --background yellow
```
