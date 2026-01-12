import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';

export default function WeatherScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [weather, setWeather] = useState<any>(null);

  // DEVELOPER 2: Insert your API Key and City here
  const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
  const CITY = 'London';

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        console.error('Weather API Error:', data.message);
      }
    } catch (error) {
      console.error('Network Error:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchWeather();
  };

  // Function to determine which icon to show based on weather condition code
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'Clear': return 'sunny-outline';
      case 'Clouds': return 'cloud-outline';
      case 'Rain': return 'rainy-outline';
      case 'Snow': return 'snow-outline';
      case 'Thunderstorm': return 'thunderstorm-outline';
      default: return 'partly-sunny-outline';
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primaryGreen} />
        <Text style={styles.loadingText}>Connecting to Station...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.primaryGreen} />
        }
      >
        {/* City and Condition Icon */}
        <View style={styles.mainInfo}>
          <Text style={styles.city}>{weather?.name || 'Unknown'}</Text>
          <Ionicons
            name={getWeatherIcon(weather?.weather[0]?.main)}
            size={100}
            color={Colors.primaryGreen}
            style={styles.weatherIcon}
          />
          <Text style={styles.temp}>
            {weather?.main ? Math.round(weather.main.temp) : '--'}°C
          </Text>
          <Text style={styles.desc}>
            {weather?.weather ? weather.weather[0].description : 'Fetching skies...'}
          </Text>
        </View>

        {/* Detailed Stats Section */}
        <View style={styles.detailsCard}>
          <View style={styles.detailItem}>
            <Ionicons name="water-outline" size={24} color={Colors.primaryGreen} />
            <Text style={styles.value}>{weather?.main?.humidity ?? '--'}%</Text>
            <Text style={styles.label}>Humidity</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailItem}>
            <Ionicons name="flag-outline" size={24} color={Colors.primaryGreen} />
            <Text style={styles.value}>{weather?.wind?.speed ?? '--'} m/s</Text>
            <Text style={styles.label}>Wind</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailItem}>
            <Ionicons name="thermometer-outline" size={24} color={Colors.primaryGreen} />
            <Text style={styles.value}>{weather?.main?.feels_like ? Math.round(weather.main.feels_like) : '--'}°C</Text>
            <Text style={styles.label}>Feels Like</Text>
          </View>
        </View>

        {/* Refresh Hint */}
        <Text style={styles.hint}>Pull down to refresh data</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.pureWhite,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pureWhite,
  },
  loadingText: {
    marginTop: 10,
    color: Colors.textGreen,
    fontSize: 16,
    fontWeight: '500'
  },
  mainInfo: {
    alignItems: 'center',
    marginTop: 40,
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.textGreen,
    letterSpacing: 0.5,
  },
  weatherIcon: {
    marginVertical: 15,
  },
  temp: {
    fontSize: 85,
    fontWeight: '200',
    color: Colors.primaryGreen,
  },
  desc: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#666',
    fontStyle: 'italic',
    marginTop: -5,
  },
  detailsCard: {
    flexDirection: 'row',
    marginTop: 50,
    backgroundColor: '#F8FBF9',
    borderRadius: 24,
    padding: 25,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textGreen,
    marginTop: 8,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0EAE4',
  },
  hint: {
    marginTop: 'auto',
    color: '#CCC',
    fontSize: 12,
    fontWeight: '600',
  }
});