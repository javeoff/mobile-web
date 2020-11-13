import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking, Button, SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { WebView} from 'react-native-webview'

const title = "WEBRZN"

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
  <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#2` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen3({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#3` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen4({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#4` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen5({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#5` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen6({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#6` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen7({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#7` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen8({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `http://webrzn.ru/#8` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

function HomeScreen9({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <Text style={styles.menu}>&#9776;</Text>
        <Text onPress={() => navigation.openDrawer()} style={styles.logo}>{title}</Text>
      </View>
      <WebView
        source={{ uri: `https://webrzn.ru/category/blog-ajtishnika/` }}
        style={{ flex: 1}}
      />
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Главная" component={HomeScreen}/>
        <Drawer.Screen name="О нас" component={HomeScreen2} />
        <Drawer.Screen name="Услуги" component={HomeScreen3} />
        <Drawer.Screen name="Портфолио" component={HomeScreen4} />
        <Drawer.Screen name="Отзывы" component={HomeScreen5} />
        <Drawer.Screen name="Клиенты" component={HomeScreen6} />
        <Drawer.Screen name="Вопросы и ответы" component={HomeScreen7} />
        <Drawer.Screen name="Наши преимущества" component={HomeScreen8} />
        <Drawer.Screen name="Блог" component={HomeScreen9} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: "100%",
    height: 90,
    backgroundColor: "#fff",
    position: 'relative'
  },
  menu: {
    fontSize: 35,
    marginLeft: 15,
    marginTop: 35,
    color: "rgba(0,0,0,.3)",
    position: "absolute"
  },
  logo: {
    fontSize: 30,
    position: 'absolute',
    top: 40,
    bottom: 0,
    right: 0,
    left: 10,
    margin: 'auto',
    textAlign:'center',
    fontFamily: 'sans-serif',
    color: 'rgb(0, 122, 255)',
    fontWeight: "700"  
  }
});
