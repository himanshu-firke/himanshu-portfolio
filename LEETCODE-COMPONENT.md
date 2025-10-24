# LeetCode Stats Component

A beautiful, animated LeetCode statistics showcase component integrated into your portfolio.

## Features

✨ **Animated Statistics**
- Counter animation that counts up when section becomes visible
- Smooth fade-in and slide-up animations
- Progress bars with gradient fills

🎨 **Visual Design**
- Matches portfolio's purple/pink gradient theme
- Color-coded difficulty levels:
  - Easy: Green gradient
  - Medium: Yellow/Orange gradient
  - Hard: Red/Pink gradient
- Glassmorphism effects and hover animations
- Responsive grid layout

📊 **Stats Displayed**
- Total problems solved (large featured card)
- Easy problems solved with progress bar
- Medium problems solved with progress bar
- Hard problems solved with progress bar
- Global ranking
- Acceptance rate

🔗 **Integration**
- Direct link to your LeetCode profile
- Fetches live stats from LeetCode API (with fallback)
- Username: `Himanshu-Firke01`

## API Integration

The component attempts to fetch live stats from:
```
https://leetcode-stats-api.herokuapp.com/Himanshu-Firke01
```

If the API is unavailable, it falls back to placeholder stats. You can update these in the component.

## Customization

To update your LeetCode username, edit `LeetCode.tsx`:

```tsx
const username = "Himanshu-Firke01";
```

To update fallback stats, modify the catch block in the `fetchStats` function.

## Position in Portfolio

The LeetCode section appears:
1. Hero
2. Skills
3. **LeetCode Stats** ← New section
4. Experience
5. Projects
6. Certificates
7. Education
8. Views
9. Contact

## Theme Colors

The component uses your portfolio's color scheme:
- Background: `hsl(261 69% 4%)` (dark purple)
- Primary gradient: Purple to Pink
- Difficulty colors: Green, Yellow/Orange, Red/Pink
- Text: Foreground colors from theme

## Animations

- **On scroll into view**: Fade in and slide up
- **Number counters**: Animate from 0 to actual value over 2 seconds
- **Progress bars**: Fill from 0% to actual percentage
- **Hover effects**: Scale, glow, and border color changes

Enjoy showcasing your problem-solving journey! 🚀
