import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({className,children}){

const id=useAccordionItemContext();
    
  const {toggleItem}=useAccordionContext();  

    return  <h3 className={className} onClick={()=>toggleItem(id)}>{children}</h3>

}