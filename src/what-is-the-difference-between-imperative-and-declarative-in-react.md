323. ### What is the difference between Imperative and Declarative in React?

     Imagine a simple UI component, such as a "Like" button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

     The imperative way of doing this would be:

     ```javascript
     if (user.likes()) {
       if (hasBlue()) {
         removeBlue();
         addGrey();
       } else {
         removeGrey();
         addBlue();
       }
     }
     ```

     Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

     In contrast, the declarative approach would be:

     ```javascript
     if (this.state.liked) {
       return <blueLike />;
     } else {
       return <greyLike />;
     }
     ```

     Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.

