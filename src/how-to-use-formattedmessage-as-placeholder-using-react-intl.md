143. ### How to use `<FormattedMessage>` as placeholder using React Intl?

     The `<Formatted... />` components from `react-intl` return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.

     ```jsx harmony
     import React from "react";
     import { injectIntl, intlShape } from "react-intl";

     const MyComponent = ({ intl }) => {
       const placeholder = intl.formatMessage({ id: "messageId" });
       return <input placeholder={placeholder} />;
     };

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```

