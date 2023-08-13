176. ### What is the mental model of redux-saga?

     _Saga_ is like a separate thread in your application, that's solely responsible for side effects. `redux-saga` is a redux _middleware_, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

