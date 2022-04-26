import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import React from 'react';


const example = ['что будет если финляндия вступит в нато', 'что будет если россию отключат от свифт', 'что будет если украина вступит в ес', 'что будет если съесть плесень', 'что будет если отключат swift в россии в 2022', 'что будет если отжиматься каждый день', 'что будет если не активировать windows 10', 'что будет если отключат от swift']
/*const keys = example.map(e=>{
  return e.split(' ').splice(3)
})
console.log(keys) [
  [ 'финляндия', 'вступит', 'в', 'нато' ],
  [ 'россию', 'отключат', 'от', 'свифт' ],
  [ 'украина', 'вступит', 'в', 'ес' ],
  [],
  [ 'съесть', 'плесень' ],
  [ 'отключат', 'swift', 'в', 'россии', 'в', '2022' ],
  [ 'отжиматься', 'каждый', 'день' ],
  [ 'не', 'активировать', 'windows', '10' ],
  [ 'отключат', 'от', 'swift' ]
]*/



function App() {
  
  const [value, setValue] = React.useState('')
  const [answer, setAnswer] = React.useState([])
  const handleChange = (event) =>{
  setValue(event.target.value)
  }

  const handleSubmit = (event) =>{
  event.preventDefault()
  setAnswer([...answer, value])
  setValue('')

  }


  return (
    <div className="App">
       <header className="header container">

       </header>
       <section className="content container">
         <h2 className="content-text">How does yandex autocomplete this?</h2>
         <div className="searchBoxWrapper">
           <div className="searchBox">
                <img src="img/search.webp" alt="" className="searchResult__img" />
                <p className="searchResult__text">что будет если &nbsp;</p>
                <form action="" onSubmit={handleSubmit}>
                <input type="text" className="searchInput" onChange={handleChange} value={value}/>
                <input type="submit" value="submit" />
                </form>
           </div>
           <ul className="searchResults">
              {example.map((e, index)=><SearchResult content={e} key={index} index={index} answer={answer}/>)}
           </ul>
         </div>
       </section>
    </div>
  );
}

export default App;
