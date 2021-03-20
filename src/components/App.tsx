import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
 const itemsRef = React.useRef([]);
 const btnRef = React.useRef([]);
 const [copySuccess, setCopySuccess] = React.useState('');
 const [promocode, setPromo] = React.useState('')
 const [indx, setIndex ] = React.useState(0)
 const [ rows, setRows ] = React.useState([
    {
      name:'Siteconstruction.io',
      description:'description',
      code:'12vvdf'
    },
    {
      name:'Appvision.com',
      description:'description',
      code:'45sfgs'
    },
    {
      name:'Analytics.com',
      description:'description',
      code:'145gf'
    },
    {
      name:'Logotype.com',
      description:'description',
      code:'145gfsdfr'
    }
  ])

 React.useEffect(() => {
  itemsRef.current = itemsRef.current.slice(0, rows.length);//clone array
  btnRef.current = btnRef.current.slice(0, rows.length);//clone array
 },[rows])

 const filter = (input) => {
   let newarr = rows.filter((item) => item.name.toUpperCase().indexOf(input.toUpperCase()) > -1)
   setRows(newarr)
  }
 
  const reset = () => {
    setRows([
      {
        name:'Siteconstruction.io',
        description:'description',
        code:'12vvdf'
      },
      {
        name:'Appvision.com',
        description:'description',
        code:'45sfgs'
      },
      {
        name:'Analytics.com',
        description:'description',
        code:'145gf'
      },
      {
        name:'Logotype.com',
        description:'description',
        code:'145gfsdfr'
      }
    ])
  }

  const activate = (i) => {
    if(btnRef.current[i].innerHTML === 'Activate bonus')
      btnRef.current[i].innerHTML = 'Activated'
    else{
      btnRef.current[i].innerHTML = 'Activate bonus'
    }
  }

  const copyPromo = (i) => {
    const promo = !!itemsRef.current[i].value ? itemsRef.current[i].value : promocode;
    navigator.clipboard.writeText(promo)
    setIndex(i)
    setCopySuccess('copied')
  }

  const getPromocode = (e) => {
    setPromo(e.target.value)
  }


  return (
   <React.Fragment>
     <div className='container'> 
      <header className='header'>
        <h1>Services</h1>
        <div>filter</div>
        <input className='input-field' onChange={(e) => filter(e.target.value)} type="text" />
        <button onClick={reset}>reset</button>
      </header>
      {rows.map((row, index) => {
        return (
          <div key={index} className='sub-container'>
          <div className='name'>
            <h3>{row.name}</h3>
            {row.description}
          </div>
          <div className='field'>
            <div>promocode</div>
            <FontAwesomeIcon onClick={() => copyPromo(index)} icon={faCopy} />
            <input onChange={getPromocode} ref={el => itemsRef.current[index] = el}  value={row.code} className='input-field' type="text" />
            {index === indx ? copySuccess : ''}
          </div>
          <div className='button'>
            <button ref={el => btnRef.current[index] = el} onClick={() => activate(index)}>Activate bonus</button>
          </div>
        </div>
        )
      })}
      
     </div>
   </React.Fragment>
  );
};

export default App;