# JavaScript DOM & Event Notes

## 1. getElementById vs getElementsByClassName vs querySelector/querySelectorAll
- **getElementById**: Ekta id diye element ber kore.  
- **getElementsByClassName**: Ek class er shob element return kore (HTMLCollection).  
- **querySelector / querySelectorAll**: CSS selector diye first element (querySelector) or shob element (querySelectorAll) ber kore.

## 2. New element create & insert
- Element create: `const div = document.createElement('div'); div.textContent='Hi';`  
- Insert into DOM: `parent.appendChild(div);` (last e add) or `parent.insertBefore(div, parent.firstChild);` (first e add)

## 3. Event Bubbling
- Event Bubbling: Child element click hole event parent dike chole jay automatically.

## 4. Event Delegation
- Event Delegation: Parent element e listener lagano, jate child element er event handle kora jay, new child o kaj kore.

## 5. preventDefault() vs stopPropagation()
- **preventDefault()**: Browser er default action stop kore (e.g. form submit block).  
- **stopPropagation()**: Event parent dike na jae, only current element e kaj kore.  
- Both use: `e.preventDefault(); e.stopPropagation();` jodi default action block + bubbling stop korte chai.