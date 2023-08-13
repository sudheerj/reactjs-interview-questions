220. ### What is the purpose of registerServiceWorker in React?

     React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on a slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker for now. It's all about adding offline capabilities to your site.

     ```jsx
     import React from "react";
     import ReactDOM from "react-dom";
     import App from "./App";
     import registerServiceWorker from "./registerServiceWorker";

     ReactDOM.render(<App />, document.getElementById("root"));
     registerServiceWorker();
     ```

