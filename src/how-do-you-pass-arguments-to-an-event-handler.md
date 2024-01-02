265. ### How do you pass arguments to an event handler?

     During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.

     Let us take an example of user details updated in a grid,

     ```javascript
     <button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
     <button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
     ```

     In the both approaches, the synthetic argument `e` is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for `bind` method.

