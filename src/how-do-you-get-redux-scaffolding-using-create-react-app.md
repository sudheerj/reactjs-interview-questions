328. ### How do you get redux scaffolding using create-react-app?
     Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
     1. Redux Toolkit and React-Redux dependencies
     2. Create and configure Redux store
     3. React-Redux `<Provider>` passing the store to React components
     4. Small "counter" example to demo how to add redux logic and React-Redux hooks API to interact with the store from components
        The below commands need to be executed along with template option as below,
     5. **Javascript template:**
     ```js
     npx create-react-app my-app --template redux
     ```
     2. **Typescript template:**
     ```js
     npx create-react-app my-app --template redux-typescript
     ```
