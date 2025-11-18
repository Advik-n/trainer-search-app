import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi, I'm Advik! 👋</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Full Stack Developer</ThemedText>
        <ThemedText>
          Welcome to my interactive CV app! I'm passionate about building modern web and mobile applications.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">What I Do</ThemedText>
        <ThemedText>
          ✨ <ThemedText type="defaultSemiBold">Web Development</ThemedText> - Creating responsive and dynamic web applications
        </ThemedText>
        <ThemedText>
          🧩 <ThemedText type="defaultSemiBold">DSA</ThemedText> - Solving complex problems with efficient algorithms
        </ThemedText>
        <ThemedText>
          ⚛️ <ThemedText type="defaultSemiBold">React.js</ThemedText> - Building interactive user interfaces
        </ThemedText>
        <ThemedText>
          🚀 <ThemedText type="defaultSemiBold">Node.js</ThemedText> - Developing scalable backend services
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Explore My CV</ThemedText>
        <ThemedText>
          Tap the <ThemedText type="defaultSemiBold">My CV</ThemedText> tab below to view my complete portfolio with interactive elements, skills breakdown, and projects!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
