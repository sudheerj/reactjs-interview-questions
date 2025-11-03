# Architecture Overview

## 📊 Visual Structure

```
coding-exercise/
│
├── 📄 STRUCTURE.md          # Detailed documentation
├── 📄 QUICK_START.md        # Quick guide for adding exercises
├── 📄 ARCHITECTURE.md       # This file - architecture overview
│
└── src/
    ├── 📱 App.js            # Main app with routing
    │   └── Uses: HomePage, NavigationButton, exercises registry
    │
    ├── 🧩 components/       # Reusable UI components
    │   ├── HomePage.js      # Landing page
    │   ├── ExerciseCard.js  # Exercise card component
    │   └── NavigationButton.js  # Back button
    │
    └── 📚 exercises/        # All exercises
        ├── index.js         # ⭐ EXERCISE REGISTRY (add new exercises here)
        │
        ├── __template__/    # Template for new exercises
        │   ├── Problem.js
        │   ├── Solution.js
        │   ├── index.js
        │   └── README.md
        │
        ├── exercise-01-state-batching/
        │   ├── Problem.js
        │   ├── Solution.js
        │   └── index.js
        │
        └── exercise-02-useeffect-dependencies/
            ├── Problem.js
            ├── Solution.js
            └── index.js
```

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                          App.js                              │
│  - Manages currentView state                                 │
│  - Routes between home and exercise views                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ├─── home ────────────────────┐
                              │                              │
                              │                              ▼
                              │                    ┌──────────────────┐
                              │                    │   HomePage.js    │
                              │                    │  - Lists all     │
                              │                    │    exercises     │
                              │                    │  - Uses          │
                              │                    │    ExerciseCard  │
                              │                    └──────────────────┘
                              │                              │
                              │                              │ reads from
                              │                              ▼
                              │                    ┌──────────────────┐
                              │                    │ exercises/       │
                              │                    │   index.js       │
                              │                    │ (Registry)       │
                              │                    └──────────────────┘
                              │
                              └─── exercise-XX-problem ─────┐
                              └─── exercise-XX-solution ────┤
                                                             │
                                                             ▼
                                              ┌──────────────────────────┐
                                              │  Dynamically loads       │
                                              │  Problem or Solution     │
                                              │  component from registry │
                                              └──────────────────────────┘
```

## 🏗️ Component Hierarchy

```
App
├── NavigationButton (when not on home)
└── Current View
    ├── HomePage
    │   └── ExerciseCard (for each exercise)
    │       ├── View Problem button
    │       └── View Solution button
    │
    └── Exercise Component (Problem or Solution)
        └── Interactive React components
```

## 🎯 Key Design Decisions

### 1. **Centralized Registry Pattern**
- **File**: `exercises/index.js`
- **Why**: Single source of truth for all exercises
- **Benefit**: Add exercises without touching App.js

### 2. **Folder-per-Exercise Structure**
- **Pattern**: `exercise-XX-topic-name/`
- **Why**: Self-contained, easy to find and maintain
- **Benefit**: Clear organization as project scales

### 3. **Component Reusability**
- **Location**: `components/`
- **Why**: Shared UI components
- **Benefit**: Consistent styling and behavior

### 4. **Template-Based Creation**
- **Location**: `exercises/__template__/`
- **Why**: Standardized structure
- **Benefit**: Fast exercise creation, consistent format

### 5. **Dynamic Routing**
- **Implementation**: String-based view state
- **Why**: Simple, no external router needed
- **Benefit**: Lightweight, easy to understand

## 📦 Module Dependencies

```
App.js
  ↓ imports
  ├── HomePage (from components/)
  ├── NavigationButton (from components/)
  └── exercises (from exercises/index.js)

HomePage.js
  ↓ imports
  ├── ExerciseCard (from components/)
  └── exercises (from exercises/index.js)

exercises/index.js
  ↓ imports
  ├── exercise-01-state-batching
  ├── exercise-02-useeffect-dependencies
  └── ... (more exercises)

Each exercise folder
  ↓ exports via index.js
  ├── Problem component
  └── Solution component
```

## 🔑 Key Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `exercises/index.js` | Exercise registry | **Every time** you add a new exercise |
| `exercises/__template__/` | Template files | When creating a new exercise (copy it) |
| `components/ExerciseCard.js` | Exercise card UI | To change how exercises are displayed |
| `components/HomePage.js` | Home page layout | To change home page structure |
| `App.js` | Main routing logic | Rarely (architecture is stable) |

## 🚀 Scaling Strategy

### Adding 10 Exercises
✅ Current structure handles this perfectly
- Just add folders and register in index.js

### Adding 50 Exercises
✅ Current structure still works
- Consider adding categories in registry
- Group exercises by difficulty or topic

### Adding 100+ Exercises
⚠️ Consider enhancements:
- Add search/filter functionality
- Implement category pages
- Add pagination
- Create difficulty-based navigation

## 🎨 Styling Strategy

**Current**: Inline styles
- ✅ No CSS conflicts
- ✅ Component-scoped
- ✅ Easy to copy/paste
- ✅ Works without build config

**Future**: If needed
- CSS Modules for shared styles
- Styled Components for complex styling
- Tailwind CSS for utility classes

## 🧪 Testing Strategy

### Current Setup
- Manual testing in browser
- Visual verification

### Recommended Additions
```javascript
// Example test structure
describe('Exercise 01', () => {
  it('renders problem correctly', () => {
    // Test problem component
  });
  
  it('renders solution correctly', () => {
    // Test solution component
  });
});
```

## 📈 Performance Considerations

### Current Optimizations
- ✅ No unnecessary re-renders (simple state management)
- ✅ Lazy loading not needed (small bundle size)
- ✅ Inline styles (no CSS parsing overhead)

### Future Optimizations (if needed)
- React.lazy() for code splitting
- useMemo for expensive calculations
- Virtual scrolling for large exercise lists

## 🔒 Best Practices

1. **One Exercise = One Folder**: Keep exercises self-contained
2. **Register Immediately**: Add to registry right after creating
3. **Follow Naming**: Use `exercise-XX-topic-name` format
4. **Test Before Commit**: Always run `npm start` to verify
5. **Document Complex Logic**: Add comments for tricky code
6. **Keep Templates Updated**: Update `__template__` with improvements

## 🎓 Learning Path

For new contributors:
1. Read `QUICK_START.md` (5 min)
2. Browse existing exercises (10 min)
3. Copy template and create test exercise (15 min)
4. Read `STRUCTURE.md` for details (10 min)
5. Review this architecture doc (5 min)

Total: ~45 minutes to full productivity

## 🤝 Contributing Guidelines

1. **Before adding an exercise**:
   - Check if topic already exists
   - Ensure it's interview-relevant
   - Verify it teaches one clear concept

2. **When adding an exercise**:
   - Use the template
   - Follow naming conventions
   - Test thoroughly
   - Add clear explanations

3. **After adding an exercise**:
   - Verify navigation works
   - Check for console errors
   - Test on different screen sizes
   - Update documentation if needed

---

**Questions?** Check the other documentation files or review existing exercises for examples.
