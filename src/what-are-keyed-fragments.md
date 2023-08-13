252. ### What are Keyed Fragments?

     The Fragments declared with the explicit <React.Fragment> syntax may have keys. The general use case is mapping a collection to an array of fragments as below,

     ```javascript
     function Glossary(props) {
       return (
         <dl>
           {props.items.map((item) => (
             // Without the `key`, React will fire a key warning
             <React.Fragment key={item.id}>
               <dt>{item.term}</dt>
               <dd>{item.description}</dd>
             </React.Fragment>
           ))}
         </dl>
       );
     }
     ```

     **Note:** key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.

