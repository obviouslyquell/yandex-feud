import React from 'react'

function SearchResult({content, answer, questions, index, takeVisiblePart}) {

    const splitted=questions.map(e=>e.split(' '))
    let stack = []; 
    for(let i = 0; i<splitted.length; i++){
      if(splitted[0][i]===splitted[1][i] && splitted[0][i]===splitted[2][i]){
        stack.push(splitted[0][i])
      }else{
        break;
      }
    }
    
    const visiblePart = stack.join(' ')
    const s = new Set(visiblePart.split(' '))
    const hiddenPart = splitted[index].filter(e=>!s.has(e))
    console.log(hiddenPart)
    //const visiblePart = content.split(' ').splice(0,3)
    //console.log(visiblePart) ['что', 'будет', 'если'] 
    //const hiddenPart = content.split(' ').splice(3)
    //console.log(hiddenPart) ['отключат', 'swift', 'в', 'россии', 'в', '2022']
    const maskWidth = 10*hiddenPart.join('').length;
    const matched = hiddenPart.filter( el => answer.indexOf( el ) > -1 ); 
    
    const textClassNames = `searchResult__answer  ${matched.length>0?'visible':'hidden'}`
    const maskClassNames = `mask ${matched.length>0?'hidden':'visible'}`;

    //сделать маску z-index'om
    takeVisiblePart(visiblePart)
  return (
    <li className="searchResult">
                <img src="img/search.webp" alt="" className="searchResult__img" />
                <p className="searchResult__text">{visiblePart} &nbsp;</p>
                <div>
                
                <div className={textClassNames}>{hiddenPart.join(' ')}</div>
                <div className={maskClassNames} style={{width: `${maskWidth}px`}}></div>  
                </div>
                
    </li>
  )
}

export default SearchResult