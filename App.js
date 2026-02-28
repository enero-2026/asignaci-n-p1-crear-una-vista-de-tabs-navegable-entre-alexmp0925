import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();


function ScreenComponent({ route }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.title}>{route.name}</Text>

        {Array.from({ length: 40 }).map((_, index) => (
          <View key={index} style={styles.card}>
            <Text>Elemento {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const linking = {
  prefixes: ['http://localhost:19006'],
  config: {
    screens: {
      Home: 'home',
      Perfil: 'perfil',
      Configuracion: 'configuracion',
    },
  },
};


export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { flex: 1 },
        }}
      >
        <Tab.Screen name="Home" component={ScreenComponent} />
        <Tab.Screen name="Perfil" component={ScreenComponent} />
        <Tab.Screen name="Configuracion" component={ScreenComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
});