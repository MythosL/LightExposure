import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { aboutLuxText } from './src/about.js';
import { LightSensor } from 'expo-sensors';
import {CameraComp,styles} from './src/CameraComp';

console.log(aboutLuxText);


export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [{ illuminance }, setData] = useState({ illuminance: 0 });
  const [hasLaunched, setHasLaunched] = useState(false);
  const [brightness, setBrightness] = useState(0);



  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    _toggle();

    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = LightSensor.addListener(setData);
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };





  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const aboutLux = () =>
    Alert.alert('About the app', aboutLuxText(), [

      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <CameraComp
    cameraRef={cameraRef}
    type={type}
    flash={flash}
    illuminance={illuminance} 
    setFlash={setFlash}
    setHasCameraPermission={setHasCameraPermission}
    styles={styles}
    aboutLux={aboutLux}
    />
  );
}