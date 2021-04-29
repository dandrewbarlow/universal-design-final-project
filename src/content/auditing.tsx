// Andrew Barlow
// auditing.tsx
// content for the practices of universal design
// Universal Design
// 2021

// Content Section: Auditing for Universal Design
export default function Auditing() {
    return (
        <section>
            <h2>Auditing for Universal Design</h2>

            <p>
                There are a lot of tools that make it extremely easy to verify if your site is up to modern standards of accessibility.
            </p>

            <h3>
                <a href="https://wave.webaim.org/"><abbr title="Web Accessibility Evaluation Tool">WAVE</abbr></a>
            </h3>

            <p>
                WAVE is a web service that provides automated tools to check for common accessibility no-no's. It provides an extension for both chrome and Firefox browsers, and can alternatively be used on any site using their web address.
            </p>

            <h3>
                <a href="https://www.deque.com/axe/devtools/">AXE DevTools</a>
            </h3>

            <p>
                A paid alternative for professional developers is deque's AXE plugin. I have no personal experience with this one, but I've heard good things, and the promotional site has an impressive feature list.
            </p>

            <h3>
                Chrome Lighthouse
            </h3>

            <p>
                Google Chrome has a special feature included with their developer tools. By going to the normal development menu (right click `{'->'}` inspect element), you can find it as the far right menu item. You can then generate a report that scores your website based on:

                <ul>
                    <li>Performance</li>
                    <li>Accessibility</li>
                    <li>Best Practices</li>
                    <li> <abbr title="Search Engine Optimization">SEO</abbr> </li>
                    <li>Progressive Web App (when applicable)</li>
                </ul>
            </p>

            <p> 
                While none of these tools are the final word in accessible web design, they provide a very comprehensive set of tools by which to judge a website.
            </p>


        </section>
   )
}
