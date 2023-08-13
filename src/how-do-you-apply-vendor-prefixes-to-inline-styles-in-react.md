116. ### How do you apply vendor prefixes to inline styles in React?

     React _does not_ apply _vendor prefixes_ automatically. You need to add vendor prefixes manually.

     ```jsx harmony
     <div
       style={{
         transform: "rotate(90deg)",
         WebkitTransform: "rotate(90deg)", // note the capital 'W' here
         msTransform: "rotate(90deg)", // 'ms' is the only lowercase vendor prefix
       }}
     />
     ```

