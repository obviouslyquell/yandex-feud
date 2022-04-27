import './App.scss';
import SearchResult from './components/SearchResult/SearchResult';
import ChooseLevel from './components/ChooseLevel/ChooseLevel';
import React from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = React.useState([])
  const [value, setValue] = React.useState('')
  const [answer, setAnswer] = React.useState([])
  const [data, setData] = React.useState({})
  const [visiblePart, setVisiblePart] = React.useState([])
  React.useEffect(() => {

    async function fetchData() {
      const result = await axios('https://62691b2cf2c0cdabac09d466.mockapi.io/questions');
      setData(result.data);
    }

    fetchData();
  }, []);
  
  const onSelectLevel = (event) =>{       
    if(data.length>1){
      setQuestions(data[event.target.id].array)
      
      //makeVisibleHiddenPart()
    }else{
      console.log('onselectlvl не готов')
    }
  }
  const takeVisiblePart = (part) =>{
    console.log(part + ' part')
    setVisiblePart(part)
  }
  const handleChange = (event) =>{
  setValue(event.target.value);
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
          {data.length>1?data.map(e=><ChooseLevel 
          key={e.id}
          id={e.id}
          onSelectLevel={()=>onSelectLevel}
          />):console.log('не готова')}

         <div className="searchBoxWrapper">
           <div className="searchBox">
                <img src="img/search.webp" alt="" className="searchResult__img" />
                <p className="searchResult__text">{visiblePart} &nbsp;</p>
                <form action="" onSubmit={handleSubmit}>
                <input type="text" className="searchInput" onChange={handleChange} value={value}/>
                <input type="submit" value="submit" />
                </form>
           </div>
           <ul className="searchResults">
              {questions.map((e, index)=><SearchResult 
              content={e} 
              key={index} 
              index={index} 
              answer={answer} 
              questions={questions}
              takeVisiblePart={takeVisiblePart}
              />)}
           </ul>
         </div>
       </section>
    </div>
  );
}

export default App;