137. ### How to implement _default_ or _NotFound_ page?

     A `<Switch>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below

     ```jsx harmony
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/user" component={User} />
       <Route component={NotFound} />
     </Switch>
     ```

