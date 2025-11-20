import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AnimatedBanner from './AnimatedBanner';

interface ProfileTabProps {
  theme: 'classic' | 'neon';
  colors: any;
}

export default function ProfileTab({ theme, colors }: ProfileTabProps) {
  const isNeon = theme === 'neon';

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <AnimatedBanner name="ADVIK" theme={theme} colors={colors} />
      
      <View style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
          ...(isNeon && {
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 15,
            elevation: 8,
          })
        }
      ]}>
        <Text style={[
          styles.sectionTitle,
          {
            color: isNeon ? colors.accentSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.accentSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 15,
            })
          }
        ]}>
          About Me 👨‍💻
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Passionate Full Stack Developer with expertise in building modern web and mobile applications.
          I love creating beautiful, performant, and user-friendly experiences.
        </Text>
      </View>

      <View style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
          ...(isNeon && {
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 15,
            elevation: 8,
          })
        }
      ]}>
        <Text style={[
          styles.sectionTitle,
          {
            color: isNeon ? colors.textSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.textSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 10,
            })
          }
        ]}>
          Skills 🚀
        </Text>
        <View style={styles.skillsContainer}>
          {['React', 'React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'].map((skill, index) => (
            <View
              key={index}
              style={[
                styles.skillBadge,
                {
                  backgroundColor: isNeon ? '#1a1a1a' : '#e0e7ff',
                  borderColor: isNeon ? colors.accent : colors.accent,
                  ...(isNeon && {
                    borderWidth: 2,
                  })
                }
              ]}
            >
              <Text style={[
                styles.skillText,
                {
                  color: isNeon ? colors.accent : colors.accent,
                  ...(isNeon && {
                    textShadowColor: colors.accent,
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 5,
                  })
                }
              ]}>
                {skill}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
          ...(isNeon && {
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.6,
            shadowRadius: 15,
            elevation: 8,
          })
        }
      ]}>
        <Text style={[
          styles.sectionTitle,
          {
            color: isNeon ? colors.accentSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.accentSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 15,
            })
          }
        ]}>
          Experience 💼
        </Text>
        <View style={styles.experienceItem}>
          <Text style={[styles.jobTitle, { color: colors.text }]}>
            Full Stack Developer
          </Text>
          <Text style={[styles.company, { color: isNeon ? colors.textSecondary : colors.textSecondary }]}>
            Building amazing applications
          </Text>
          <Text style={[styles.text, { color: isNeon ? '#ccc' : colors.textSecondary }]}>
            • Developed responsive web and mobile applications{'\n'}
            • Implemented RESTful APIs and microservices{'\n'}
            • Collaborated with cross-functional teams
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  skillText: {
    fontSize: 14,
    fontWeight: '600',
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    marginBottom: 8,
  },
});
