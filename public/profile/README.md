# Profile Image Setup

To add your profile image to the hero section:

## Quick Setup:
1. Add your professional headshot as `prince-kumar.jpg` in this directory
2. The image should be:
   - **Square aspect ratio** (1:1) - e.g., 800x800px
   - **High quality** (at least 400x400px)
   - **Professional photo** - clear, well-lit headshot
   - **Format**: JPG, PNG, or WebP

## Update the Component:
In `src/components/sections/HeroSection.tsx`, uncomment and update lines 125-131:

```jsx
<Image
  src="/profile/prince-kumar.jpg"
  alt="Prince Kumar"
  fill
  className="object-cover"
  priority
/>
```

## Alternative: Use a Different Filename
If you prefer a different filename, update the `src` path accordingly:
```jsx
src="/profile/your-image-name.jpg"
```

## Current State:
The hero section currently shows your initials (PK) with a gradient background. Once you add your image, it will replace the initials with your professional photo.

## Recommended Image Specifications:
- **Dimensions**: 800x800px or higher
- **File size**: Under 500KB (optimized for web)
- **Background**: Professional or neutral
- **Style**: Business casual or professional attire