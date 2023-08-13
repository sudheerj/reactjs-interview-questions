253. ### Does React support all HTML attributes?

     As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs.

     Let us take few props with respect to standard HTML attributes,

     ```javascript
     <div tabIndex="-1" />      // Just like node.tabIndex DOM API
     <div className="Button" /> // Just like node.className DOM API
     <input readOnly={true} />  // Just like node.readOnly DOM API
     ```

     These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.

