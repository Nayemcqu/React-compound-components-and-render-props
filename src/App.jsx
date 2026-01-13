import Accordion from "./components/accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";
import { PLACES } from "./util/places";


function App() {
  return (
   <main>

<section>

<h2>Why work with us?</h2>
<Accordion className='accordion'>
<Accordion.Item id="experience"  className="accordion-item">
  <Accordion.Title  className='accordion-item-title'>we got 20 years of experience </Accordion.Title>
  <Accordion.Content  className='accordion-item-content'>
    <article>
  <p> you cant go wrong with us.</p>
  <p> we are in the business for more than 20 years.</p>
</article>
</Accordion.Content>


</Accordion.Item  >

<Accordion.Item id="local-guides" className="accordion-item">

<Accordion.Title className='accordion-item-title' > we are working with local guides.</Accordion.Title>
<Accordion.Content className='accordion-item-content' >
<article>
  <p> we are not doing this from office.</p>
  <p> we are working with the local guides.</p>
</article>
</Accordion.Content>


</Accordion.Item>

</Accordion>
</section>

<SearchableList items={PLACES} itemKeyFn={(item)=>item.id}>
  {(item)=><Place item={item}/>}
</SearchableList>
<SearchableList items={['item 1','item 2']}  itemKeyFn={(item)=>item}>

{(item)=> item }
</SearchableList>
  </main>
  );

}

export default App;
