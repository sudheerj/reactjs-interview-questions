47. ### What are fragments?

    It's a common pattern or practice in React for a component to return multiple elements. _Fragments_ let you group a list of children without adding extra nodes to the DOM.
    You need to use either **<Fragment>** or a shorter syntax having empty tag (**<></>**).

    Below is the example of how to use fragment inside _Story_ component.
    ```jsx harmony
    function Story({title, description, date}) {
      return (
          <Fragment>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
          </Fragment>
        );
    }
    ```

    It is also possible to render list of fragments inside a loop with the mandatory **key** attribute supplied.

    ```jsx harmony
    function StoryBook() {
      return stories.map(story =>
        <Fragment key={ story.id}>
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          <p>{story.date}</p>
        </Fragment>
        );
    }
    ```

    Ususally you don't need to use **<Fragment>** until unless there is a need of _key_ attribute. The usage of shorter syntax looks like below.

    ```jsx harmony
    function Story({title, description, date}) {
      return (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
          </>
        );
    }
    ```

