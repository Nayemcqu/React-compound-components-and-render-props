import Accordion from "./components/accordion/Accordion";


function App() {
  return (
   <main>

<section>

<h2>Why work with us?</h2>
<Accordion className='accordion'>
<Accordion.Item id="experience" className="accordion-item" title="we got 20 years of experience">
<article>
  <p> you cant go wrong with us.</p>
  <p> we are in the business for more than 20 years.</p>
</article>

</Accordion.Item>
<Accordion.Item id="local-guides" className="accordion-item" title="we are working with local guides.">
<article>
  <p> we are not doing this from office.</p>
  <p> we are working with the local guides.</p>
</article>

</Accordion.Item>

</Accordion>
</section>

  </main>
  );

}

export default App;
