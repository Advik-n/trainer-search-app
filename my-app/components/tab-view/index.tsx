import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  interpolate,
  Extrapolate 
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface TabViewProps {
  tabs: Tab[];
  activeColor?: string;
  inactiveColor?: string;
  indicatorColor?: string;
}

export default function TabView({ 
  tabs, 
  activeColor = '#007AFF',
  inactiveColor = '#8E8E93',
  indicatorColor = '#007AFF'
}: TabViewProps) {
  const [activeTab, setActiveTab] = useState(0);
  const translateX = useSharedValue(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    translateX.value = withSpring(index, {
      damping: 20,
      stiffness: 90,
    });
  };

  const indicatorStyle = useAnimatedStyle(() => {
    const tabWidth = width / tabs.length;
    return {
      transform: [
        {
          translateX: interpolate(
            translateX.value,
            [0, tabs.length - 1],
            [0, tabWidth * (tabs.length - 1)],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const tabWidth = width / tabs.length;

  return (
    <View style={styles.container}>
      {/* Tab Headers */}
      <View style={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, { width: tabWidth }]}
            onPress={() => handleTabPress(index)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                { color: activeTab === index ? activeColor : inactiveColor }
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
        
        {/* Animated Indicator */}
        <Animated.View
          style={[
            styles.indicator,
            indicatorStyle,
            { width: tabWidth, backgroundColor: indicatorColor }
          ]}
        />
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {tabs[activeTab].content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    position: 'relative',
  },
  tab: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
});
