import React from 'react';
import { Alert, BackHandler } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = 'cd4d167eb3c576a0bd3a83500221ae34';

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      Toast.show('불러오기 성공');
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };
  backPress = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false },
    );
    return true;
  };
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress);
  }
  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPress);
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
