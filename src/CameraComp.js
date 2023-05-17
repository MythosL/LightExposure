import React from 'react';
import { View, Text, Platform, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { CameraFullScreen } from './CameraFullScreen';

const CameraComp = ({ illuminance, type, cameraRef, flash, aboutLux }) => {
  return (
    <View style={styles.container}>
      <CameraFullScreen type={type}>
        <View style={styles.overlaytop}>
          <Text style={styles.luxvalue}>LUX Value</Text>
          <Text style={styles.lux}> {Platform.OS === 'android' ? `${illuminance}` : `Only available on Android`} </Text>
          <View style={styles.toptextContainer}>
            <Icon name="information-circle-outline" size={30} type="ionicon" onPress={() => aboutLux()} color="white" />
          </View>
        </View>

        <View style={styles.overlaybottom}>

        {illuminance < 1000 ? (
        <View>
        <Text style={styles.lux}>Not enough light to start your circadian rhythm</Text>
        </View>
      ) : illuminance < 5000 ? (
        <View>
          <Text style={styles.luxvalue} >Recommended exposure:</Text>
          <Text style={styles.lux}>60 - 120 min</Text>
        </View>
      ) : illuminance < 10000 ? (
        <View>
          <Text style={styles.luxvalue} >Recommended exposure:</Text>
          <Text style={styles.lux}>20 - 30 min</Text>
        </View>
      ) : illuminance < 50000 ? (
        <View>
          <Text style={styles.luxvalue} >Recommended exposure:</Text>
          <Text style={styles.lux}>15 - 20 min</Text>
        </View>
      ) : illuminance < 100000 ? (
        <View>
          <Text style={styles.luxvalue} >Recommended exposure:</Text>
          <Text style={styles.lux}>10 - 15 min</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.luxvalue} >Recommended exposure:</Text>
          <Text style={styles.lux}>1 - 2 min</Text>
        </View>
      )}
        </View>
      </CameraFullScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlaytop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 40,
  },
  overlaybottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 40,
  },

  lux: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  luxvalue: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  toptextContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 50,
    paddingRight: 30,
  },
  toptext: {
    fontSize: 16,
    color: '#fff',
  },
});
export { CameraComp, styles };
