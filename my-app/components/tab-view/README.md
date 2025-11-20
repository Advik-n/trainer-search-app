# TabView Component

A customizable, animated tab view component for React Native applications built with Expo.

## Features

- Smooth animated tab transitions using `react-native-reanimated`
- Fully customizable colors
- Responsive design that adapts to screen width
- TypeScript support
- Easy to integrate

## Usage

```tsx
import TabView from '@/components/tab-view';
import { View, Text } from 'react-native';

const MyScreen = () => {
  const tabs = [
    {
      key: 'tab1',
      title: 'Home',
      content: <View><Text>Home Content</Text></View>
    },
    {
      key: 'tab2',
      title: 'Profile',
      content: <View><Text>Profile Content</Text></View>
    },
    {
      key: 'tab3',
      title: 'Settings',
      content: <View><Text>Settings Content</Text></View>
    }
  ];

  return (
    <TabView 
      tabs={tabs}
      activeColor="#007AFF"
      inactiveColor="#8E8E93"
      indicatorColor="#007AFF"
    />
  );
};
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tabs` | `Tab[]` | Yes | - | Array of tab objects containing key, title, and content |
| `activeColor` | `string` | No | `#007AFF` | Color of the active tab text |
| `inactiveColor` | `string` | No | `#8E8E93` | Color of inactive tab text |
| `indicatorColor` | `string` | No | `#007AFF` | Color of the bottom indicator line |

## Tab Interface

```typescript
interface Tab {
  key: string;        // Unique identifier for the tab
  title: string;      // Display text for the tab
  content: React.ReactNode;  // Content to render when tab is active
}
```

## Dependencies

- `react-native-reanimated` - For smooth animations

Make sure you have `react-native-reanimated` installed in your project.
