321. ### Can I use javascript urls in react16.9?

     Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like `<a href>` and create a security hole.

     ```javascript
     const companyProfile = {
       website: "javascript: alert('Your website is hacked')",
     };
     // It will log a warning
     <a href={companyProfile.website}>More details</a>;
     ```

     Remember that the future versions will throw an error for javascript URLs.

