295. ### What is the typical use case of portals?

     React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually “break out” of its container.

     For example, dialogs, global message notifications, hovercards, and tooltips.

