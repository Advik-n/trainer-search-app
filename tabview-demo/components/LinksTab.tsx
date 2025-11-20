import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';

interface LinksTabProps {
  theme: 'classic' | 'neon';
  colors: any;
}

interface LinkItemProps {
  icon: string;
  title: string;
  subtitle: string;
  url: string;
  theme: 'classic' | 'neon';
  colors: any;
}

const LinkItem = ({ icon, title, subtitle, url, theme, colors }: LinkItemProps) => {
  const isNeon = theme === 'neon';

  const handlePress = () => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.linkCard,
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
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.linkContent}>
        <Text style={styles.icon}>{icon}</Text>
        <View style={styles.linkText}>
          <Text style={[
            styles.linkTitle,
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
          <Text style={[
            styles.linkSubtitle,
            { color: isNeon ? colors.textSecondary : colors.textSecondary }
          ]}>
            {subtitle}
          </Text>
        </View>
        <Text style={[
          styles.arrow,
          {
            color: isNeon ? colors.accentSecondary : colors.accent,
            ...(isNeon && {
              textShadowColor: colors.accentSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 8,
            })
          }
        ]}>
          →
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function LinksTab({ theme, colors }: LinksTabProps) {
  const isNeon = theme === 'neon';

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
          Let's Connect! 🤝
        </Text>
        <Text style={[styles.headerText, { color: isNeon ? '#ccc' : colors.textSecondary }]}>
          Feel free to reach out through any of these platforms
        </Text>
      </View>

      <LinkItem
        icon="📧"
        title="Email"
        subtitle="advik_naveen@gmail.com"
        url="mailto:advik_naveen@gmail.com"
        theme={theme}
        colors={colors}
      />

      <LinkItem
        icon="💼"
        title="LinkedIn"
        subtitle="Connect on LinkedIn"
        url="https://www.linkedin.com/in/advik-n/"
        theme={theme}
        colors={colors}
      />

      <LinkItem
        icon="🐙"
        title="GitHub"
        subtitle="Check out my projects"
        url="https://github.com/Advik-n"
        theme={theme}
        colors={colors}
      />

      <LinkItem
        icon="🌐"
        title="Portfolio"
        subtitle="View my work"
        url="https://advik-n.github.io"
        theme={theme}
        colors={colors}
      />

      <View style={[
        styles.footer,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
          ...(isNeon && {
            borderWidth: 2,
          })
        }
      ]}>
        <Text style={[
          styles.footerText,
          {
            color: isNeon ? colors.textSecondary : colors.textSecondary,
            ...(isNeon && {
              textShadowColor: colors.textSecondary,
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 8,
            })
          }
        ]}>
          ✨ Available for collaboration ✨
        </Text>
      </View>
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
  linkCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
  },
  linkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
    marginRight: 16,
  },
  linkText: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  linkSubtitle: {
    fontSize: 14,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
