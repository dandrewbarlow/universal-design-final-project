// Andrew Barlow
// Universal Design Spring 2021 Final

// IMPORTS///////////////////////////////////////////////////////////////
import dog from "./img/cute-dog.jpg";
import ReactEmbedGist from "react-embed-gist";

// WEBSITE CONTENT////////////////////////////////////////////////////////

// Content Section: Why Universal Design
export function Why() {
  return (
    <section id="why">
      <h2>Why Universal Design?</h2>
      <p>
        Universal Design is a philosophy of design whose goals are to make
        something that works for the largest number of people. By incorporating
        inclusive design methods and implementing standards designed to help
        impaired users, a web designer can easily create accessible websites
        with only a few new tools.
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
        Universal Design posits that the idea of "accessible design" falls short
        of the goalpost. Accessibility should not be an afterthought or
        specialty role of a developer, but should be a goal from the starting
        point of a website's design. It's main point being that accessible
        design is <em>good</em> design.
      </p>
    </section>
  );
}

// Content Section: Practices of Universal Design
export function Practices() {
  return (
    <section>
      <h2>Practices of Universal Design</h2>

      <h3>Semantic HTML</h3>

      <p>
        Some of the most important ways to make a website universal is also the
        most straightforward. The HTML5 standard includes accessibility features
        baked into the default. By following the rules of semantic web design, a
        designer is already ahead of the curve. By properly tagging content,
        accessibility tools like screenreaders can display content in a friendly
        way to impaired users.
      </p>

      <h4>Images</h4>

      <p>Here's an HTML tag for a simple image:</p>

      <code>&lt;img src="img/cute-dog.jpg" alt="A very cute puppy"&gt;</code>

      <img src={dog} alt="A very cute puppy" />

      <p>
        Here's what it looks like when the source file is unavailable (on
        purpose in this case).
      </p>

      <code>&lt;img src="img/missing-dog.jpg" alt="A very cute puppy"&gt;</code>
      <br />
      <br />

      <img src="img/missing-dog.jpg" alt="A very cute puppy" />

      <p>
        The <code>alt</code> tag's purpose is to provide a visual description of
        an image for screenreaders to display to the visually impaired. As seen
        here, it comes with the added benefit of preventing a missing image
        source from becoming a page-breaking eyesore. The <code>alt</code> tag
        is{" "}
        <strong>
          <em>not</em>
        </strong>{" "}
        for inserting keywords for attention from search engines. There are
        better ways of doing so, and putting it inside image tags creates
        confusion.
      </p>

      <h4>Semantics and Structure</h4>

      <p>
        To go into more detail, a much more effective and user-friendly way to
        pursue search engine optimization (S.E.O.) is through the smart use of
        semantic web design. The web has changed a lot since the 90's and{" "}
        <code>div</code>'s just don't fit the bill anymore. The HTML standards
        have come up with descriptive tags that allow a designer to
        heirarchichally structure their page in a way that makes sense to
        designers and readers. For example:
      </p>

      <ReactEmbedGist gist="dandrewbarlow/3567f60acdb3c069e0b0078dd0f2b872" />

      <p>
        Here is an example of a simple HTML heirarchy that will work for
        countless websites. Some of the important features include:
      </p>

      <ul>
        <li>Language declaration [line 2] </li>

        <li>
          Extensive use of the <code>meta</code> tag [lines 4-11]
        </li>

        <ul>
          <li>
            This is where search engine optimization keywords and information
            goes.
          </li>

          <li>
            This keeps the information visible to "web scrapers" that analyze
            your content, removing the need to place keywords in odd places that
            confuse people using assistive technology.
          </li>

          <li>
            This tag also is used to access the <code>viewport</code> property.
            This tag is used to help a website look right, no matter what device
            accesses it. There are many more things to do in this regard, but
            this tag is the starting point.
          </li>
        </ul>

        <li>
          The actual HTML content is laid out simply and in a heirarchichal
          structure following the importance of the information.{" "}
        </li>

        <ul>
          <li>
            This is what it means to say universal web design is simple. These
            are considerations a web designer should already be considering when
            making a page.
          </li>

          <li>
            Putting the content in these descriptive tabs allow smooth reading
            and navigation for all users, not just the impaired.
          </li>

          <li>
            Avoid using <code>div</code>'s for anything but styling. They say
            nothing about their content, so they should not be used for content.
          </li>
        </ul>

        <li>
          Lastly I would like to guarantee that whatever you're doing, there's a
          tag for that. I used a simple example, but{" "}
          <a href="https://www.w3schools.com/TAGS/default.ASP">
            the w3schools website has an excellent reference
          </a>{" "}
          to the multitude of available tags
        </li>

        <li></li>
      </ul>
    </section>
  );
}
