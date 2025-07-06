# Design System Documentation

## Overview

The FigmaUX design system is built with consistency, scalability, and accessibility in mind. It provides a comprehensive set of design tokens, components, and guidelines to create exceptional user experiences.

## Design Tokens

### Colors

Our color palette is designed to be accessible and consistent across all platforms.

#### Primary Colors
- **Figma Blue** `#18A0FB` - Primary brand color
- **Purple** `#8B5CF6` - Secondary accent
- **Green** `#10B981` - Success states
- **Orange** `#F59E0B` - Warning states
- **Red** `#EF4444` - Error states

#### Neutral Colors
- **Gray 50** `#F9FAFB` - Background
- **Gray 100** `#F3F4F6` - Light borders
- **Gray 200** `#E5E7EB` - Borders
- **Gray 300** `#D1D5DB` - Disabled states
- **Gray 400** `#9CA3AF` - Placeholder text
- **Gray 500** `#6B7280` - Secondary text
- **Gray 600** `#4B5563` - Body text
- **Gray 700** `#374151` - Headings
- **Gray 800** `#1F2937` - Dark text
- **Gray 900** `#111827` - Primary text

### Typography

#### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

#### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

#### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

### Spacing

Our spacing system uses a consistent 4px base unit:

- **0**: 0px
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

### Border Radius

- **sm**: 0.125rem (2px)
- **base**: 0.25rem (4px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)
- **2xl**: 1rem (16px)
- **full**: 9999px

## Components

### Buttons

#### Primary Button
```tsx
<button className="btn-primary">
  Primary Action
</button>
```

#### Secondary Button
```tsx
<button className="btn-secondary">
  Secondary Action
</button>
```

#### Button Variants
- **Default**: Standard button with hover and focus states
- **Small**: Reduced padding for compact layouts
- **Large**: Increased padding for prominent actions
- **Icon**: Button with icon only
- **Loading**: Button with loading spinner

### Input Fields

#### Text Input
```tsx
<input 
  type="text" 
  placeholder="Enter your email" 
  className="input-field"
/>
```

#### Input States
- **Default**: Standard input styling
- **Focus**: Blue border and ring
- **Error**: Red border and error message
- **Success**: Green border
- **Disabled**: Grayed out and non-interactive

### Cards

#### Basic Card
```tsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

#### Card Variants
- **Default**: White background with subtle shadow
- **Interactive**: Hover effects and clickable
- **Featured**: Prominent styling for important content
- **Compact**: Reduced padding for dense layouts

### Badges

#### Basic Badge
```tsx
<span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
  New
</span>
```

#### Badge Types
- **Info**: Blue styling
- **Success**: Green styling
- **Warning**: Orange styling
- **Error**: Red styling

## Accessibility

### Color Contrast
All color combinations meet WCAG AA standards:
- Normal text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio

### Focus States
- All interactive elements have visible focus indicators
- Focus rings use the primary blue color
- Focus states are keyboard accessible

### Screen Readers
- Semantic HTML elements
- Proper ARIA labels
- Alt text for images
- Descriptive link text

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Touch-friendly target sizes (minimum 44px)

## Animation Guidelines

### Duration
- **Fast**: 150ms - Micro-interactions
- **Normal**: 300ms - Standard transitions
- **Slow**: 500ms - Page transitions

### Easing
- **Ease-out**: Most common for UI elements
- **Ease-in-out**: Smooth transitions
- **Linear**: Progress indicators

### Motion Preferences
- Respect `prefers-reduced-motion` media query
- Provide alternative experiences for users who prefer less motion

## Usage Guidelines

### Do's
- ✅ Use consistent spacing and typography
- ✅ Follow the color palette
- ✅ Implement proper focus states
- ✅ Test on multiple devices
- ✅ Consider accessibility first

### Don'ts
- ❌ Don't create custom colors outside the palette
- ❌ Don't skip hover and focus states
- ❌ Don't ignore mobile experience
- ❌ Don't forget to test with screen readers

## Implementation

### Tailwind CSS Classes
The design system is implemented using Tailwind CSS with custom utilities:

```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
```

### Custom Properties
CSS custom properties are used for dynamic theming:

```css
:root {
  --color-primary: #18A0FB;
  --color-secondary: #8B5CF6;
  --spacing-base: 1rem;
}
```

## Figma Integration

### Design Tokens Export
Design tokens can be exported from Figma using our plugin:

1. Install the FigmaUX plugin
2. Select components or styles
3. Export as JSON or CSS
4. Import into your project

### Component Sync
- Real-time synchronization between Figma and code
- Automatic updates when designs change
- Version control for design changes

## Resources

- [Figma Design File](https://figma.com/file/example)
- [Component Library](https://storybook.example.com)
- [Design Tokens](https://tokens.example.com)
- [Accessibility Guide](https://accessibility.example.com) 