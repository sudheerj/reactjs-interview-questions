125. ### What is the benefit of styles modules?

     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

     For example, these styles could be extracted into a separate component:

     ```javascript
     export const colors = {
       white,
       black,
       blue,
     };

     export const space = [0, 8, 16, 32, 64];
     ```

     And then imported individually in other components:

     ```javascript
     import { space, colors } from "./styles";
     ```

