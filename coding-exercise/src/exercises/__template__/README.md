# Exercise Template

This is a template folder for creating new exercises. **DO NOT** register this template in the exercise registry.

## How to Use This Template

1. **Copy this folder** and rename it:
   ```
   cp -r __template__ exercise-XX-your-topic-name
   ```

2. **Update Problem.js**:
   - Replace `[Exercise Title]` with your exercise title
   - Add your problem code and logic
   - Update the questions and options

3. **Update Solution.js**:
   - Replace `[Exercise Title]` with your exercise title
   - Add your solution code with explanations
   - Update all placeholder text

4. **Register in exercises/index.js**:
   ```javascript
   import * as ExerciseXX from './exercise-XX-your-topic-name';
   
   export const exercises = [
     // ... existing exercises
     {
       id: 'exercise-XX',
       title: 'Your Topic Name',
       description: 'Brief description',
       difficulty: 'Medium',
       topics: ['Topic1', 'Topic2'],
       Problem: ExerciseXX.Problem,
       Solution: ExerciseXX.Solution,
     },
   ];
   ```

5. **Test your exercise**:
   ```bash
   npm start
   ```

## Template Sections

### Problem.js
- Exercise metadata (title, options, bonus)
- Interactive component
- Problem description with questions

### Solution.js
- Answer and explanation
- Problem demonstration (wrong approach)
- Solution demonstration (correct approach)
- Key takeaways
- Code comparison
- Common mistakes

## Styling Reference

- Problem warning: `#fff3cd` with `#ffc107` border
- Wrong approach: `#ffe6e6` background
- Correct solution: `#e6ffe6` background
- Information: `#e6f3ff` background
- Key takeaways: `#f0f0f0` background

## Tips

- Keep code examples concise and focused
- Use emojis for visual hierarchy (❌ ✅ 💡 📚 ⚠️)
- Add console.log statements for debugging
- Test all interactive elements
- Ensure responsive design with inline styles
