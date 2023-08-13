208. ### Give an example of Reselect usage?

     Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

     ```javascript
     import { createSelector } from "reselect";

     const shopItemsSelector = (state) => state.shop.items;
     const taxPercentSelector = (state) => state.shop.taxPercent;

     const subtotalSelector = createSelector(shopItemsSelector, (items) =>
       items.reduce((acc, item) => acc + item.value, 0)
     );

     const taxSelector = createSelector(
       subtotalSelector,
       taxPercentSelector,
       (subtotal, taxPercent) => subtotal * (taxPercent / 100)
     );

     export const totalSelector = createSelector(
       subtotalSelector,
       taxSelector,
       (subtotal, tax) => ({ total: subtotal + tax })
     );

     let exampleState = {
       shop: {
         taxPercent: 8,
         items: [
           { name: "apple", value: 1.2 },
           { name: "orange", value: 0.95 },
         ],
       },
     };

     console.log(subtotalSelector(exampleState)); // 2.15
     console.log(taxSelector(exampleState)); // 0.172
     console.log(totalSelector(exampleState)); // { total: 2.322 }
     ```

