147. ### What is `TestRenderer` package in React?

     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or `jsdom`.

     ```jsx harmony
     import TestRenderer from "react-test-renderer";

     const Link = ({ page, children }) => <a href={page}>{children}</a>;

     const testRenderer = TestRenderer.create(
       <Link page={"https://www.facebook.com/"}>{"Facebook"}</Link>
     );

     console.log(testRenderer.toJSON());
     // {
     //   type: 'a',
     //   props: { href: 'https://www.facebook.com/' },
     //   children: [ 'Facebook' ]
     // }
     ```

