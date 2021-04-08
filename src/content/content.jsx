// Andrew Barlow
// Universal Design Spring 2021 Final

// WEBSITE CONTENT////////////////////////////////////////////////////////

// Content Section: Why Universal Design
export function Why() {
  return(
    <section id="why">
      <h2>Why Universal Design?</h2>
      <p>
          Universal Design is a philosophy of design whose goals are to make something that works for the largest number of people. By incorporating inclusive design methods and implementing standards designed to help impaired users, a web designer can easily create accessible websites with only a few new tools.
      </p>
    </section>

  );
}

// Content Section: Tenets of Universal Design
export function Tenets() {
  return (
    <section>
      <h2>Tenets of Universal Design</h2>
      <p>
        Universal Design posits that the idea of "accessible design" falls short of the goalpost. Accessibility should not be an afterthought or specialty role of a developer, but should be a goal from the starting point of a website's design. It's main point being that accessible design is <em>good</em> design.
      </p>
    </section>
  )
}

// Content Section: Practices of Universal Design
export function Practices() {
  return (
    <section>
      <h2>Practices of Universal Design</h2>
      <h3>Semantic HTML</h3>
      <p>
        One of the most important ways to make a website universal is also the most straightforward. The HTML5 standard includes accessibility features baked into the default. By following the rules of semantic web design, a designer is already ahead of the curve. By properly tagging content, accessibility tools like screenreaders can display content in a friendly way to impaired users.
      </p>
      <h4>Images</h4>
      <code>
        &lt;img src="img/cute-dog.jpg" alt="A very cute puppy"&gt;
      </code>
    </section>
  )
}