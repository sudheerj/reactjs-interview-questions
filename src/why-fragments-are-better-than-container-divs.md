48. ### Why fragments are better than container divs?

    Below are the list of reasons to prefer fragments over container DOM elements,

    1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    2. Some CSS mechanisms like _Flexbox_ and _CSS Grid_ have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    3. The DOM Inspector is less cluttered.

