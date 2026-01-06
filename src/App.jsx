import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return (
   <main>

<section>

<h2>Why work with us?</h2>
<Accordion className='accordion'>
<AccordionItem className="accordion-item" title="we got 20 years of experience">
<article>
  <p> you cant go wrong with us.</p>
  <p> we are in the business for more than 20 years.</p>
</article>

</AccordionItem>
<AccordionItem className="accordion-item" title="we are working with local guides.">
<article>
  <p> we are not doing this from office.</p>
  <p> we are working with the local guides.</p>
</article>

</AccordionItem>

</Accordion>
</section>

  </main>
  );

}

export default App;
