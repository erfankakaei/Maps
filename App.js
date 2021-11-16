import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: 35.715933,
          longitude: 51.406985,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  maps: {...StyleSheet.absoluteFillObject},
});

export default App;
