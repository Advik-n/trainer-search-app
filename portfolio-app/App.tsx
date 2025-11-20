import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Home Tab Component
const HomeRoute = () => (
  <ScrollView style={styles.scene}>
    <View style={styles.content}>
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Text style={styles.subtitle}>Professional Developer & Designer</Text>
      <Text style={styles.description}>
        Hi! I'm a passionate developer specializing in mobile and web applications.
        I create beautiful, functional, and user-friendly experiences.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Me</Text>
        <Text style={styles.cardText}>
          With expertise in React Native, TypeScript, and modern web technologies,
          I build cross-platform applications that deliver exceptional user experiences.
        </Text>
      </View>
    </View>
  </ScrollView>
);

// Portfolio Tab Component
const PortfolioRoute = () => (
  <ScrollView style={styles.scene}>
    <View style={styles.content}>
      <Text style={styles.title}>My Projects</Text>
      
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>🚀 Project 1: Mobile App</Text>
        <Text style={styles.projectDescription}>
          A cross-platform mobile application built with React Native and Expo,
          featuring modern UI/UX design and seamless performance.
        </Text>
        <Text style={styles.projectTech}>Tech: React Native, TypeScript, Expo</Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>💼 Project 2: Portfolio Website</Text>
        <Text style={styles.projectDescription}>
          A responsive portfolio website showcasing my work and skills,
          built with modern web technologies.
        </Text>
        <Text style={styles.projectTech}>Tech: React, Next.js, Tailwind CSS</Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>🎨 Project 3: Design System</Text>
        <Text style={styles.projectDescription}>
          A comprehensive design system with reusable components,
          ensuring consistency across all applications.
        </Text>
        <Text style={styles.projectTech}>Tech: React, Styled Components, Storybook</Text>
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.cardTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillTag}><Text style={styles.skillText}>React Native</Text></View>
          <View style={styles.skillTag}><Text style={styles.skillText}>TypeScript</Text></View>
          <View style={styles.skillTag}><Text style={styles.skillText}>JavaScript</Text></View>
          <View style={styles.skillTag}><Text style={styles.skillText}>React</Text></View>
          <View style={styles.skillTag}><Text style={styles.skillText}>Node.js</Text></View>
          <View style={styles.skillTag}><Text style={styles.skillText}>UI/UX Design</Text></View>
        </View>
      </View>
    </View>
  </ScrollView>
);

// Connections Tab Component
const ConnectionsRoute = () => {
  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.scene}>
      <View style={styles.content}>
        <Text style={styles.title}>Get in Touch</Text>
        
        <View style={styles.connectionCard}>
          <Text style={styles.connectionTitle}>📧 Email</Text>
          <TouchableOpacity onPress={() => handleEmailPress('your.email@example.com')}>
            <Text style={styles.linkText}>your.email@example.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailPress('contact@yourportfolio.com')}>
            <Text style={styles.linkText}>contact@yourportfolio.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.connectionCard}>
          <Text style={styles.connectionTitle}>🔗 Professional Links</Text>
          <TouchableOpacity onPress={() => handleLinkPress('https://github.com/yourusername')}>
            <Text style={styles.linkText}>GitHub Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://linkedin.com/in/yourusername')}>
            <Text style={styles.linkText}>LinkedIn Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://yourportfolio.com')}>
            <Text style={styles.linkText}>Personal Website</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.connectionCard}>
          <Text style={styles.connectionTitle}>🌐 Social Media</Text>
          <TouchableOpacity onPress={() => handleLinkPress('https://twitter.com/yourusername')}>
            <Text style={styles.linkText}>Twitter / X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://instagram.com/yourusername')}>
            <Text style={styles.linkText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress('https://dribbble.com/yourusername')}>
            <Text style={styles.linkText}>Dribbble</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactNote}>
          <Text style={styles.noteText}>
            Feel free to reach out! I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  home: HomeRoute,
  portfolio: PortfolioRoute,
  connections: ConnectionsRoute,
});

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home' },
    { key: 'portfolio', title: 'Portfolio' },
    { key: 'connections', title: 'Connect' },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      activeColor="#007AFF"
      inactiveColor="#8E8E93"
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  scene: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D1D1F',
  },
  subtitle: {
    fontSize: 20,
    color: '#6E6E73',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1D1F',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1D1D1F',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6E6E73',
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1D1D1F',
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6E6E73',
    marginBottom: 10,
  },
  projectTech: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  skillsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skillTag: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  skillText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  connectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  connectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#1D1D1F',
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    paddingVertical: 8,
    textDecorationLine: 'underline',
  },
  contactNote: {
    backgroundColor: '#E8F4FD',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
  },
  noteText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#1D1D1F',
    textAlign: 'center',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  indicator: {
    backgroundColor: '#007AFF',
    height: 3,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
});
