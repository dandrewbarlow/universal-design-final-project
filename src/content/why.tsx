// Andrew Barlow
// why.tsx
// content for the "why" section of the site
// Universal Design
// 2021

// Content Section: Why Universal Design
export default function Why() {
    return (
    <section id="why">
      <h2>Why Universal Design?</h2>
      <p>
        Universal Design is a philosophy of design whose goals are to make something that works for the largest number of people. Incorporating inclusive design methods and implementing standards designed to help impaired users can allow a web designer can easily create accessible websites with only a few new tools.
      </p>

      <p>
        Universal Design is more than accessibility, though. It is the recognition that an approach which removes barriers from a user's path is just good design. Designing a website to be universally used opens up its content to the widest possible audience. Design choices that make a website easier for disabled users also make it easier to use for everyone.
      </p>

      <figure>
        <img src="https://www.cdc.gov/media/images/releases/2015/p0730-us-disability.jpg" alt="Statistics graphic from the CDC"/>
    <figcaption>Fig. 1 - Disability Impacts All of US. <em>CDC</em></figcaption>

      </figure>
      <p>
        The amount of disabled people in the United States alone (<a href="https://www.disabilitystatistics.org/reports/acs.cfm?statistic=1">see here</a>) comprises an estimated 323,289,900 people. Meaning that an inaccessible site can prevent a huge section of the population from interacting with your site, making universal design an extremely practical decision for most site designers.
      </p>

      <p>
        Lastly <a href="https://www.fcc.gov/general/section-508-rehabilitation-act">the Rehabilitation Act of 1973 Section 508</a>  requires Federal agencies to make electronic/information technology accessible to people with disabilities. This also extends to employers with federal contracts (or subcontracts) and those receiving federal financial assistance. There is certainly only a subsection of websites, but not a small one. For many, designing an inaccessible website is not an option to begin with.
      </p>
    </section>
   );
}