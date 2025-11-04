# Quick Start Guide - Adding New Exercises

## 🚀 5-Minute Setup

### Step 1: Copy Template (30 seconds)
```bash
# Copy the template folder
cp -r src/exercises/__template__ src/exercises/exercise-03-your-topic
```

### Step 2: Edit Files (3 minutes)

**Edit `Problem.js`:**
- Line 4: Change exercise title
- Line 7-14: Update problem description and options
- Line 19-30: Add your problem code

**Edit `Solution.js`:**
- Line 4: Change exercise title
- Line 6: Add correct answer
- Line 8-18: Write explanation
- Line 24-80: Add solution code and examples

### Step 3: Register Exercise (1 minute)

**Edit `src/exercises/index.js`:**

```javascript
// 1. Import your exercise
import * as Exercise03 from './exercise-03-your-topic';

// 2. Add to exercises array
export const exercises = [
  // ... existing exercises
  {
    id: 'exercise-03',
    title: 'Your Topic Name',
    description: 'What this exercise teaches',
    difficulty: 'Medium', // Easy, Medium, or Hard
    topics: ['Hook1', 'Concept2', 'Pattern3'],
    Problem: Exercise03.Problem,
    Solution: Exercise03.Solution,
  },
];
```

### Step 4: Test (30 seconds)
```bash
npm start
```

Visit http://localhost:3000 and your exercise should appear!

## 📋 Checklist

- [ ] Copied template folder with correct naming
- [ ] Updated Problem.js with question and code
- [ ] Updated Solution.js with answer and explanation
- [ ] Registered in exercises/index.js
- [ ] Tested in browser
- [ ] No console errors

## 🎯 Exercise Naming Convention

```
exercise-[NUMBER]-[topic-name]

Examples:
✅ exercise-03-useCallback-optimization
✅ exercise-04-context-api-pitfalls
✅ exercise-05-custom-hooks
❌ Exercise3
❌ exercise_3_useCallback
❌ 03-useCallback
```

## 💡 Quick Tips

1. **Keep it focused**: One concept per exercise
2. **Make it interactive**: Add buttons, inputs, etc.
3. **Show comparisons**: Wrong vs. Right approach
4. **Explain thoroughly**: Don't just show code, explain why
5. **Use console.log**: Help users debug and learn

## 🎨 Color Codes (Copy-Paste Ready)

```javascript
// Problem/Warning
backgroundColor: '#fff3cd', border: '1px solid #ffc107'

// Wrong Approach
backgroundColor: '#ffe6e6'

// Correct Solution
backgroundColor: '#e6ffe6'

// Information/Tips
backgroundColor: '#e6f3ff'

// Key Takeaways
backgroundColor: '#f0f0f0'
```

## 📝 Difficulty Guidelines

**Easy**: Basic React concepts, straightforward answers
- useState basics
- Props passing
- Simple event handlers

**Medium**: Intermediate concepts, requires understanding
- State closures
- useEffect dependencies
- Memoization basics

**Hard**: Advanced patterns, tricky edge cases
- Complex state management
- Performance optimization
- Advanced hooks patterns

## 🔍 Topic Suggestions

Common interview topics:
- useState, useEffect, useRef, useCallback, useMemo
- Closures, State Batching, Event Handlers
- Dependencies, Infinite Loops, Memory Leaks
- Performance, Memoization, Re-renders
- Context API, Custom Hooks, Composition

## ⚡ Common Mistakes to Avoid

❌ Don't hardcode exercise numbers in multiple places
✅ Use the exercise ID consistently

❌ Don't forget to export in index.js
✅ Always add both Problem and Solution exports

❌ Don't skip the explanation
✅ Always explain WHY, not just WHAT

❌ Don't use external dependencies without updating package.json
✅ Keep exercises self-contained with inline styles

## 🆘 Troubleshooting

**Exercise doesn't appear on homepage:**
- Check if registered in `exercises/index.js`
- Verify import path is correct
- Ensure index.js exports both Problem and Solution

**"Exercise not found" error:**
- Check exercise ID matches folder name (without 'exercise-' prefix)
- Verify ID in registry matches navigation string

**Styling looks broken:**
- Use inline styles for consistency
- Copy styles from existing exercises
- Test in browser dev tools

## 📚 Full Documentation

For detailed information, see [STRUCTURE.md](./STRUCTURE.md)

---

Need help? Check existing exercises for examples! 🎓
