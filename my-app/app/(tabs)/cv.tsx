import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function CVScreen() {
  const skills = [
    { name: 'Web Development', icon: 'globe', level: 90 },
    { name: 'Data Structures & Algorithms', icon: 'chart.bar', level: 85 },
    { name: 'React.js', icon: 'atom', level: 90 },
    { name: 'Node.js', icon: 'server.rack', level: 85 },
  ];

  const projects = [
    { title: 'Trainer Search App', description: 'React Native app for finding trainers', tech: 'React Native, Expo' },
    { title: 'Full Stack Web App', description: 'Interactive web application', tech: 'React, Node.js' },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <Animated.View entering={FadeInUp.duration(800)} style={styles.header}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
          </View>
          <ThemedText style={styles.name}>Advik</ThemedText>
          <ThemedText style={styles.title}>Full Stack Developer</ThemedText>
          <ThemedText style={styles.subtitle}>
            Web Dev | DSA | React | Node.js
          </ThemedText>
        </Animated.View>

        {/* About Section */}
        <Animated.View entering={FadeInDown.delay(200).duration(800)} style={styles.section}>
          <ThemedText style={styles.sectionTitle}>About Me</ThemedText>
          <ThemedText style={styles.aboutText}>
            Passionate developer skilled in creating modern web applications and solving complex problems 
            with data structures and algorithms. Experienced in full-stack development with React and Node.js.
          </ThemedText>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Skills</ThemedText>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <View style={styles.skillHeader}>
                <ThemedText style={styles.skillName}>{skill.name}</ThemedText>
                <ThemedText style={styles.skillLevel}>{skill.level}%</ThemedText>
              </View>
              <View style={styles.progressBarContainer}>
                <Animated.View 
                  entering={FadeInDown.delay(600 + index * 100).duration(1000)}
                  style={[styles.progressBar, { width: `${skill.level}%` }]} 
                />
              </View>
            </View>
          ))}
        </Animated.View>

        {/* Projects Section */}
        <Animated.View entering={FadeInDown.delay(800).duration(800)} style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Projects</ThemedText>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectCard}>
              <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
              <ThemedText style={styles.projectDescription}>{project.description}</ThemedText>
              <ThemedText style={styles.projectTech}>{project.tech}</ThemedText>
            </View>
          ))}
        </Animated.View>

        {/* Contact Section */}
        <Animated.View entering={FadeInDown.delay(1000).duration(800)} style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Contact</ThemedText>
          <TouchableOpacity style={styles.contactButton}>
            <ThemedText style={styles.contactButtonText}>Get in Touch</ThemedText>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.6,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  skillItem: {
    marginBottom: 20,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
  },
  skillLevel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  projectCard: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    marginBottom: 8,
    opacity: 0.8,
  },
  projectTech: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  contactButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
