# TabView Demo App

A React Native application demonstrating a custom TabView component with smooth animations.

## Features

- **Custom TabView Component** with animated tab transitions
- **4 Demo Tabs**: Home, Profile, Settings, and More
- **Smooth Animations** using react-native-reanimated
- **Responsive Design** that adapts to screen width
- **TypeScript Support** for type safety

## Project Structure

```
tabview-demo/
├── App.tsx                 # Main app with TabView implementation
├── components/
│   └── TabView.tsx        # Reusable TabView component
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd tabview-demo
```

2. Dependencies are already installed, but if needed:
```bash
npm install
```

## Running the App

### Start the development server:
```bash
npx expo start
```

### Run on specific platforms:
- **Android**: `npm run android` or press 'a' in the terminal
- **iOS**: `npm run ios` or press 'i' in the terminal (requires macOS)
- **Web**: `npm run web` or press 'w' in the terminal

### Using Expo Go:
1. Install Expo Go on your mobile device
2. Scan the QR code from the terminal
3. The app will load on your device

## TabView Component Usage

The `TabView` component accepts the following props:

```typescript
interface TabViewProps {
  tabs: Tab[];              // Array of tab objects
  activeColor?: string;     // Color for active tab text (default: #007AFF)
  inactiveColor?: string;   // Color for inactive tab text (default: #8E8E93)
  indicatorColor?: string;  // Color for bottom indicator (default: #007AFF)
}

interface Tab {
  key: string;              // Unique identifier
  title: string;            // Tab label
  content: React.ReactNode; // Content to display
}
```

### Example:
```tsx
const tabs = [
  {
    key: 'home',
    title: 'Home',
    content: <View><Text>Home Content</Text></View>
  },
  // ... more tabs
];

<TabView 
  tabs={tabs}
  activeColor="#007AFF"
  inactiveColor="#8E8E93"
  indicatorColor="#007AFF"
/>
```

## Customization

You can customize the TabView by:
- Changing colors via props
- Modifying styles in `TabView.tsx`
- Adjusting animation parameters (damping, stiffness)
- Adding more tabs to the demo

## Technologies Used

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **react-native-reanimated** - Smooth animations

## License

MIT
