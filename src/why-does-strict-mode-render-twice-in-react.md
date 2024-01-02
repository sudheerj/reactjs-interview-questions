336. ### Why does strict mode render twice in React?
      StrictMode renders components twice in development mode(not production) in order to detect any problems with your code and warn you about those problems. This is used to detect accidental side effects in the render phase.  If you used `create-react-app` development tool then it automatically enables StrictMode by default.

      ```js
      ReactDOM.render(
        <React.StrictMode>
          {App}
        </React.StrictMode>,
        document.getElementById('root')
      );
      ```

      If you want to disable this behavior then you can remove `strict` mode.
      ```js
      ReactDOM.render(
        {App}, 
        document.getElementById('root')
      );
      ```

      To detect side effects the following functions are invoked twice:

      1. Class component constructor, render, and shouldComponentUpdate methods
      2. Class component static getDerivedStateFromProps method
      3. Function component bodies
      4. State updater functions
      5. Functions passed to useState, useMemo, or useReducer (any Hook)

