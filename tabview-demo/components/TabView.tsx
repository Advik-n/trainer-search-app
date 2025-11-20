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

interface ThemeColors {
  background: string;
  cardBackground: string;
  headerBackground: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentSecondary: string;
  border: string;
  tabActive: string;
  tabInactive: string;
  shadow: string;
  cardBorder: string;
}

interface TabViewProps {
  tabs: Tab[];
  theme: 'classic' | 'neon';
  colors: ThemeColors;
}

export default function TabView({ 
  tabs, 
  theme,
  colors
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
  const isNeon = theme === 'neon';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Tab Headers */}
      <View style={[
        styles.tabHeader,
        {
          backgroundColor: colors.headerBackground,
          borderBottomColor: colors.border,
          ...(isNeon && {
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 10,
            elevation: 10,
          })
        }
      ]}>
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
                { 
                  color: activeTab === index ? colors.tabActive : colors.tabInactive,
                  ...(isNeon && activeTab === index && {
                    textShadowColor: colors.tabActive,
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 10,
                  })
                }
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
            { 
              width: tabWidth, 
              backgroundColor: colors.accent,
              ...(isNeon && {
                shadowColor: colors.accent,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 15,
                elevation: 10,
              })
            }
          ]}
        />
      </View>

      {/* Tab Content */}
      <View style={[styles.contentContainer, { backgroundColor: colors.background }]}>
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
    borderBottomWidth: 2,
    position: 'relative',
  },
  tab: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '700',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
});
