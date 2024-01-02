105. ### Is it possible to use React without rendering HTML?

     It is possible. Below are the possible options:

     ```jsx harmony
     render() {
       return false
     }
     ```

     ```jsx harmony
     render() {
       return true
     }
     ```

     ```jsx harmony
     render() {
       return null
     }
     ```

     React version >=16.0.0:

     ```jsx harmony
     render() {
       return []
     }
     ```

     ```jsx harmony
     render() {
       return ""
     }
     ```

     React version >=16.2.0:

     ```jsx harmony
     render() {
       return <React.Fragment></React.Fragment>
     }
     ```

     ```jsx harmony
     render() {
       return <></>
     }
     ```

     React version >=18.0.0:

     ```jsx harmony
     render() {
       return undefined
     }
     ```

