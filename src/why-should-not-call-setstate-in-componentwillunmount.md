243. ### Why should not call setState in componentWillUnmount?
     You should not call `setState()` in `componentWillUnmount()` because once a component instance is unmounted, it will never be mounted again.

