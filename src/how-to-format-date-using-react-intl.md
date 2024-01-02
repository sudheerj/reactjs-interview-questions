145. ### How to format date using React Intl?

     The `injectIntl()` higher-order component will give you access to the `formatDate()` method via the props in your component. The method is used internally by instances of `FormattedDate` and it returns the string representation of the formatted date.

     ```jsx harmony
     import { injectIntl, intlShape } from "react-intl";

     const stringDate = this.props.intl.formatDate(date, {
       year: "numeric",
       month: "numeric",
       day: "numeric",
     });

     const MyComponent = ({ intl }) => (
       <div>{`The formatted date is ${stringDate}`}</div>
     );

     MyComponent.propTypes = {
       intl: intlShape.isRequired,
     };

     export default injectIntl(MyComponent);
     ```

## React Testing

