169. ### What is the proper way to access Redux store?

     The best way to access your store in a component is to use the `connect()` function, that creates a new component that wraps around your existing one. This pattern is called _Higher-Order Components_, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let's take an example of `<FilterLink>` component using connect:

     ```javascript
     import { connect } from "react-redux";
     import { setVisibilityFilter } from "../actions";
     import Link from "../components/Link";

     const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.visibilityFilter,
     });

     const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
     });

     const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

     export default FilterLink;
     ```

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using `connect()` over accessing the store directly (using context API).

     ```javascript
     class MyComponent {
       someMethod() {
         doSomethingWith(this.context.store);
       }
     }
     ```

