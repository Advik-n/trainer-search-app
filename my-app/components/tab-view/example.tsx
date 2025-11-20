import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TabView from './index';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

/**
 * Example implementation of the TabView component
 * This can be used as a reference or copied to your screens
 */
export default function TabViewExample() {
  const tabs = [
    {
      key: 'overview',
      title: 'Overview',
      content: (
        <ScrollView style={styles.tabContent}>
          <ThemedView style={styles.contentCard}>
            <ThemedText style={styles.cardTitle}>Welcome to Overview</ThemedText>
            <ThemedText style={styles.cardText}>
              This is the overview tab. You can display any content here including 
              lists, cards, forms, or any other React Native components.
            </ThemedText>
          </ThemedView>
        </ScrollView>
      )
    },
    {
      key: 'details',
      title: 'Details',
      content: (
        <ScrollView style={styles.tabContent}>
          <ThemedView style={styles.contentCard}>
            <ThemedText style={styles.cardTitle}>Detailed Information</ThemedText>
            <ThemedText style={styles.cardText}>
              This tab shows detailed information. The tab view automatically 
              handles smooth transitions between tabs with animated indicators.
            </ThemedText>
            <View style={styles.infoRow}>
              <ThemedText style={styles.label}>Feature 1:</ThemedText>
              <ThemedText style={styles.value}>Smooth Animations</ThemedText>
            </View>
            <View style={styles.infoRow}>
              <ThemedText style={styles.label}>Feature 2:</ThemedText>
              <ThemedText style={styles.value}>Customizable Colors</ThemedText>
            </View>
          </ThemedView>
        </ScrollView>
      )
    },
    {
      key: 'settings',
      title: 'Settings',
      content: (
        <ScrollView style={styles.tabContent}>
          <ThemedView style={styles.contentCard}>
            <ThemedText style={styles.cardTitle}>Settings & Options</ThemedText>
            <ThemedText style={styles.cardText}>
              Configure your preferences and options here. Each tab can contain 
              completely different content and layouts.
            </ThemedText>
          </ThemedView>
        </ScrollView>
      )
    }
  ];

  return (
    <ThemedView style={styles.container}>
      <TabView 
        tabs={tabs}
        activeColor="#007AFF"
        inactiveColor="#8E8E93"
        indicatorColor="#007AFF"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  contentCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    opacity: 0.7,
  },
});
