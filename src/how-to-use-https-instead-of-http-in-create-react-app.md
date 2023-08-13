112. ### How to use https instead of http in create-react-app?

     You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

     ```json
     "scripts": {
       "start": "set HTTPS=true && react-scripts start"
     }
     ```

     or just run `set HTTPS=true && npm start`

