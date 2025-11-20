import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ProjectsTabProps {
  theme: 'classic' | 'neon';
  colors: any;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  theme: 'classic' | 'neon';
  colors: any;
}

const ProjectCard = ({ title, description, tech, theme, colors }: ProjectCardProps) => {
  const isNeon = theme === 'neon';

  return (
    <View style={[
      styles.projectCard,
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
        styles.projectTitle,
        {
          color: isNeon ? colors.accent : colors.accent,
          ...(isNeon && {
            textShadowColor: colors.accent,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 10,
          })
        }
      ]}>
        {title}
      </Text>
      <Text style={[styles.projectDescription, { color: isNeon ? '#ccc' : colors.textSecondary }]}>
        {description}
      </Text>
      <View style={styles.techStack}>
        {tech.map((item, index) => (
          <View
            key={index}
            style={[
              styles.techBadge,
              {
                backgroundColor: isNeon ? '#1a1a1a' : '#f3f4f6',
                borderColor: isNeon ? colors.accentSecondary : colors.accent,
                ...(isNeon && { borderWidth: 1 })
              }
            ]}
          >
            <Text style={[
              styles.techText,
              {
                color: isNeon ? colors.accentSecondary : colors.accent,
                ...(isNeon && {
                  textShadowColor: colors.accentSecondary,
                  textShadowOffset: { width: 0, height: 0 },
                  textShadowRadius: 5,
                })
              }
            ]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function ProjectsTab({ theme, colors }: ProjectsTabProps) {
  const isNeon = theme === 'neon';

  const projects = [
    {
      title: '🎨 Portfolio App',
      description: 'A beautiful portfolio application with theme switching and animated components.',
      tech: ['React Native', 'TypeScript', 'Reanimated'],
    },
    {
      title: '📱 TabView Component',
      description: 'Custom tab navigation component with smooth animations and responsive design.',
      tech: ['React Native', 'Animations', 'TypeScript'],
    },
    {
      title: '🔥 Trainer Search App',
      description: 'Application to find and connect with professional trainers in your area.',
      tech: ['React Native', 'Firebase', 'Maps API'],
    },
    {
      title: '⚡ Real-time Chat',
      description: 'Instant messaging application with real-time updates and notifications.',
      tech: ['WebSocket', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[
        styles.header,
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
          styles.headerTitle,
          {
            color: isNeon ? colors.accentSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.accentSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 15,
            })
          }
        ]}>
          My Projects 🚀
        </Text>
        <Text style={[styles.headerText, { color: isNeon ? '#ccc' : colors.textSecondary }]}>
          Here are some of the projects I've worked on
        </Text>
      </View>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          theme={theme}
          colors={colors}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 24,
  },
  projectCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
