// Andrew Barlow
// tenets.tsx
// contains content for the Tenets section of the page
// Universal Design
// 2021

export default function Tenets() {
    return (
        <section>
            <h2>Tenets of Universal Design</h2>
            <p>
                Universal Design posits that the idea of "accessible design" falls short of the goalpost. Accessibility should not be an afterthought or specialty role of a developer, but should be a goal from the starting point of a website's design. It's main point being that accessible design is <em>good</em> design.
            </p>

            <p>
                As a universal designer, one should consider all the different obstacles that a user could encounter, and address them before they're a problem. Designing with adequate color contrast allows visually impaired users to clearly see the components. It does the same for normal users. Providing descriptive labels to images and interactive elements assists those using screen-readers. It also provides context when a resource is unavailable.
            </p>
           <p>
                The point being that providing accessibility resources bolsters a website's usability for everyone, and should be considered a best practice, not an extra feature.
            </p>

            <p>
                Universal design can allow equitable internet use for users with varying degrees of ability. The following are some of the impairments that a designer should be actively thinking to address in their design:
            </p>

            <ul>
                <li>Auditory</li>
                <li>Cognitive, learning, &amp; neurological</li>
                <li>Physical</li>
                <li>Speech</li>
                <li>Visual</li>
            </ul>
 
            <p>Here are some of the principles that define universal design:</p>

            <h3>Principles</h3>
            <ul>
                <li>Equitable use</li>
                <li>Flexibility in use</li>
                <li>Simple Intuitive use</li>
                <li>Perceptible information</li>
                <li>Tolerance for error</li>
                <li>Size and space for approach and use</li>
            </ul>

            <p>
                By designing within these guidelines, you can create intuitive, beautiful, accessible websites.
            </p>

            <p>
                And as a last resort, you can also use ARIA rules. Partially joking there, but ARIA stands for Accessible Rich Internet Application. It helps define interactive elements on websites for assistive technology. That said, it was designed in the internet's wild west period to make up for deficiencies in internet standards of the time. These days, however, much of the features ARIA offers have been integrated into updates to the file standards themselves. HTML5 itself brings a lot of these features, without needing to learn ARIA.
            </p>

            <p>
                The general rule is only to use it when necessary. It can however be useful to hide elements that would only be distracting to a screen-reader.
            </p>

        </section>
    );
}
