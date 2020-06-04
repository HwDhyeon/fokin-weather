import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: '천둥번개가 치는 날이에요',
    subtitle: '가급적이면 외출을 자제해주세요',
  },
  Drizzle: {
    iconName: 'weather-partly-rainy',
    gradient: ['#89F7FE', '#66A6FF'],
    title: '이슬비가 내리는 날이에요',
    subtitle: '외출시 가벼운 우산을 챙겨주세요',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: '비가 내리는 날이에요',
    subtitle: '외출시 우산을 챙겨주세요',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: '눈이 내리는 날이에요',
    subtitle: '외출시 우산을 챙겨주세요',
  },
  Atmosphere: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'weather.title',
    subtitle: 'weather.subtitle',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
    title: '하늘이 맑은 날이에요 :)',
    subtitle: '어디든 놀러나가요!',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: '구름이 잔뜩 낀 날이에요',
    subtitle: '우울해지지는 말아주세요 ʕ•́ᴥ•̀ʔっ',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '안개가 잔뜩 낀 날이에요',
    subtitle: '운전 시 시야확보에 주의해주세요',
  },
  Dust: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#4DA0B0', '#D39D38'],
    title: '대기질이 나빠요 :(',
    subtitle: '가급적이면 외출을 자제해주세요',
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3C3B3F', '#605C3C'],
    title: '대기질이 나빠요 :(',
    subtitle: '가급적이면 외출을 자제해주세요',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          style={{ color: 'white' }}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 42,
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
