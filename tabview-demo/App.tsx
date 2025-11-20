import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TabView from './components/TabView';
import ProfileTab from './components/ProfileTab';
import LinksTab from './components/LinksTab';
import ProjectsTab from './components/ProjectsTab';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { theme, toggleTheme, colors } = useTheme();
  const isNeon = theme === 'neon';

  const tabs = [
    {
      key: 'profile',
      title: 'Profile',
      content: <ProfileTab theme={theme} colors={colors} />
    },
    {
      key: 'projects',
      title: 'Projects',
      content: <ProjectsTab theme={theme} colors={colors} />
    },
    {
      key: 'links',
      title: 'Links',
      content: <LinksTab theme={theme} colors={colors} />
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isNeon ? "light" : "dark"} />
      <View style={[
        styles.header,
        {
          backgroundColor: colors.headerBackground,
          borderBottomColor: colors.border,
          ...(isNeon && {
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 15,
            elevation: 10,
          })
        }
      ]}>
        <View>
          <Text style={[
            styles.headerTitle,
            {
              color: isNeon ? colors.accent : '#ffffff',
              ...(isNeon && {
                textShadowColor: colors.accent,
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 20,
              })
            }
          ]}>
            {isNeon ? '✨ PORTFOLIO ✨' : 'Portfolio'}
          </Text>
          <Text style={[
            styles.headerSubtitle,
            {
              color: isNeon ? colors.textSecondary : '#ffffff',
              ...(isNeon && {
                textShadowColor: colors.textSecondary,
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 10,
              })
            }
          ]}>
            Advik Naveen
          </Text>
        </View>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[
            styles.themeButton,
            {
              backgroundColor: isNeon ? colors.cardBackground : '#ffffff',
              borderColor: colors.accent,
              ...(isNeon && {
                shadowColor: colors.accent,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 5,
              })
            }
          ]}
        >
          <Text style={[
            styles.themeButtonText,
            {
              color: isNeon ? colors.accent : colors.accent,
              ...(isNeon && {
                textShadowColor: colors.accent,
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 8,
              })
            }
          ]}>
            {isNeon ? '🌟' : '🎨'}
          </Text>
        </TouchableOpacity>
      </View>
      <TabView 
        tabs={tabs}
        theme={theme}
        colors={colors}
      />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.9,
  },
  themeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  themeButtonText: {
    fontSize: 24,
  },
});
