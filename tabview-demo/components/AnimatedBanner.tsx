import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';

interface AnimatedBannerProps {
  name: string;
  theme: 'classic' | 'neon';
  colors: any;
}

export default function AnimatedBanner({ name, theme, colors }: AnimatedBannerProps) {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Pulsing scale animation
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    // Gentle rotation
    rotate.value = withRepeat(
      withSequence(
        withTiming(5, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(-5, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    // Floating animation
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(10, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
        { translateY: translateY.value },
      ],
    };
  });

  const isNeon = theme === 'neon';

  return (
    <View style={[
      styles.container,
      { backgroundColor: colors.cardBackground }
    ]}>
      <Animated.View style={[styles.nameContainer, animatedStyle]}>
        <Text style={[
          styles.name,
          {
            color: isNeon ? colors.accent : colors.accentSecondary,
            ...(isNeon && {
              textShadowColor: colors.accent,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 25,
            })
          }
        ]}>
          {name.split('').map((char, index) => (
            <Text
              key={index}
              style={{
                ...(isNeon && {
                  textShadowColor: index % 2 === 0 ? '#00FF41' : '#FF00FF',
                  textShadowRadius: 20,
                })
              }}
            >
              {char}
            </Text>
          ))}
        </Text>
        <Text style={[
          styles.title,
          {
            color: isNeon ? colors.textSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.textSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 15,
            })
          }
        ]}>
          Full Stack Developer
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    borderRadius: 16,
    marginBottom: 20,
  },
  nameContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
