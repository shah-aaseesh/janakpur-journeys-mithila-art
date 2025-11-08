# Travel Janakpur Logo Implementation Guide

## Logo Placeholder Locations

The website currently uses "TJ" text placeholders that can be easily replaced with your actual logo image.

### 1. Header Logo (src/components/Header.tsx)
**Lines 65-71:** Replace the `<div>` with logo styling with:
```jsx
<img 
  src="/travel-janakpur-logo.png" 
  alt="Travel Janakpur Logo" 
  className="w-8 h-8 object-contain"
/>
```

### 2. Hero Section Logo (src/components/Hero.tsx)
**Lines 19-23:** Replace the large circular logo with:
```jsx
<img 
  src="/travel-janakpur-logo.png" 
  alt="Travel Janakpur Logo" 
  className="w-20 h-20 object-contain"
/>
```

## To Add Your Logo:
1. Save your logo image as `/public/travel-janakpur-logo.png`
2. Replace the placeholder code at the locations mentioned above
3. Adjust the `w-` and `h-` classes to match your logo's dimensions

## Current Logo Features:
- Orange background with travel elements (suitcases, airplane)
- Bold "TRAVEL JANAKPUR" text in 3D style
- Modern, dynamic design perfect for travel agency branding