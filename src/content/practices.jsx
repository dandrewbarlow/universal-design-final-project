// Andrew Barlow
// practices.tsx
// content for the practices of universal design
// Universal Design
// 2021

// Imports//////////////////////////////////////////////////////////////////

// A cute puppy
import Dog from "./img/cute-dog.jpg";

// Embedded github gists for the lazy web developer
// @ts-ignore
import ReactEmbedGist from "react-embed-gist";

// weird import; not necessary for live site,
// but tests fail without it. This is admittedly a stack overflow pull
// @ts-ignore
import regeneratorRuntime from "regenerator-runtime";


// Content Section: Practices of Universal Design
export default function Practices() {
    return (
        <section>
        <h2>Practices of Universal Design</h2>

        <nav>
            <ol>
                <li><a href="#html5">HTML5</a></li>
                <li><a href="#images">Images</a> </li>
                <li><a href="#structure">Semantics and Structure</a></li>
            </ol>
        </nav>

        <h3 id="html5">HTML5</h3>

        <p>
            Some of the most important ways to make a website universal are also the most straightforward. The HTML5 standard includes accessibility features baked into the default. By following the rules of semantic web design, a designer is already ahead of the curve. By properly tagging content, accessibility tools like screen-readers can display content in a friendly way to impaired users.
        </p>

        <h3 id="images">Images</h3>

        <p>Here's an HTML tag for a simple image:</p>

        <code>&lt;img src="img/cute-dog.jpg" alt="A very cute puppy"&gt;</code>

        <img src={Dog} alt="A very cute puppy" />

        <p>
            Here's what it looks like when the source file is unavailable (on
            purpose in this case).
        </p>

        <code>&lt;img src="img/missing-dog.jpg" alt="A very cute puppy"&gt;</code>
        <br />
        <br />

        <img src="img/missing-dog.jpg" alt="A very cute puppy" />

        <p>
            The <code>alt</code> tag's purpose is to provide a visual description of an image for screen-readers to display to the visually impaired. As seen here, it comes with the added benefit of preventing a missing image source from becoming a page-breaking eyesore. The <code>alt</code> tag is{" "} <strong> <em>not</em> </strong>{" "} for inserting keywords for attention from search engines. There are better ways of doing so, and putting it inside image tags creates confusion.
        </p>

        <h3 id="structure">Semantics and Structure</h3>

        <p>
            To go into more detail, a much more effective and user-friendly way to pursue search engine optimization (S.E.O.) is through the smart use of semantic web design. The web has changed a lot since the 90's and{" "} <code>div</code>'s aren't a one-size fits all anymore. The HTML standards have come up with descriptive tags that allow a designer to hierarchically structure their page in a way that makes sense to designers and readers. For example:
        </p>

        <ReactEmbedGist gist="dandrewbarlow/3567f60acdb3c069e0b0078dd0f2b872" />

        <p>
            Here is an example of a simple HTML hierarchy that will work for countless websites. Some of the important features include:
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
                This keeps the information visible to "web scrapers" that analyze your content, removing the need to place keywords in odd places that confuse people using assistive technology.
            </li>

            <li>
                This tag also is used to access the <code>viewport</code> property. This tag is used to help a website look right, no matter what device accesses it. There are many more things to do in this regard, but this tag is the starting point.
            </li>
            </ul>

            <li>
            The actual HTML content is laid out simply and in a hierarchical structure following the importance of the information.{" "}
            </li>

            <ul>
            <li>
                This is what it means to say universal web design is simple. These are considerations a web designer should already be considering when making a page.
            </li>

            <li>
                Putting the content in these descriptive tabs allow smooth reading and navigation for all users, not just the impaired.
            </li>

            <li>
                Avoid using <code>div</code>'s for anything but styling. They say nothing about their content, so they should not be used for content.
            </li>
            </ul>

            <li>
            Lastly I would like to guarantee that whatever you're doing, there's a tag for that. I used a simple example, but{" "} <a href="https://www.w3schools.com/TAGS/default.ASP"> the w3schools website has an excellent reference </a>{" "} to the multitude of available tags
            </li>

        </ul>

        
        </section>
    );
}