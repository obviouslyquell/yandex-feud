import React from 'react'

function SearchResult({content, answer}) {
    const visiblePart = content.split(' ').splice(0,3)
    //console.log(visiblePart) ['что', 'будет', 'если'] 
    const hiddenPart = content.split(' ').splice(3)
    //console.log(hiddenPart) ['отключат', 'swift', 'в', 'россии', 'в', '2022']
    const maskWidth = 10*hiddenPart.join('').length;
    console.log(answer)
    const matched = hiddenPart.filter( el => answer.indexOf( el ) > -1 ); 
    
    const classNames = `searchResult__mask active-mask ${matched.length>0?'visible':'hidden'}`


    //сделать маску z-index'om
  return (
    <li className="searchResult">
                <img src="img/search.webp" alt="" className="searchResult__img" />
                <p className="searchResult__text">{visiblePart.join(' ')} &nbsp;</p>
                <div className={classNames} style={{width: `${maskWidth}px`}}>{hiddenPart.join(' ')}</div>
    </li>
  )
}

export default SearchResult