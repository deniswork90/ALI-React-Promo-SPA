import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

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
      code:'itpromocodes_01'
    },
    {
      name:'Appvision.com',
      description:'description',
      code:'itpromocodes_02'
    },
    {
      name:'Analytics.com',
      description:'description',
      code:'itpromocodes_03'
    },
    {
      name:'Logotype.com',
      description:'description',
      code:'itpromocodes_04'
    }
  ])

 React.useEffect(() => {
  itemsRef.current = itemsRef.current.slice(0, rows.length);
  btnRef.current = btnRef.current.slice(0, rows.length);
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
        code:'itpromocodes_01'
      },
      {
        name:'Appvision.com',
        description:'description',
        code:'itpromocodes_02'
      },
      {
        name:'Analytics.com',
        description:'description',
        code:'itpromocodes_03'
      },
      {
        name:'Logotype.com',
        description:'description',
        code:'itpromocodes_04'
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
      <div className='sidebar'>
        <div className='logo'>
          <svg width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0667 28.8071H19.2C18.611 28.8071 18.1334 28.3295 18.1334 27.7404C18.1334 27.1513 18.1334 22.4 18.1334 22.4H24.3938C24.687 22.4 24.9372 22.1881 24.9856 21.899L25.4095 19.3657C25.4707 18.9999 25.1886 18.6667 24.8177 18.6667H14.4C14.4 18.6667 14.4 25.0894 14.4 27.7404C14.4 30.3914 16.549 32.5404 19.2 32.5404H22.9334V35.3167C21.0862 36.0184 19.5055 36.2667 17.4687 36.2667C12.1509 36.2667 9.25863 33.4809 9.07609 28.2737C9.0213 26.7106 9.06669 25.6048 9.06669 18.6667H1.02409C0.730958 18.6667 0.480691 18.8785 0.432358 19.1677L0.00835795 21.701C-0.0527754 22.0668 0.229225 22.4 0.600158 22.4H5.33336L5.34189 28.2737C5.44376 31.7699 6.55136 34.7127 8.56203 36.7394C10.6782 38.8725 13.7581 40 17.4687 40C20.595 40 22.9638 39.4833 26.0547 38.0379C26.4288 37.8629 26.6667 37.4859 26.6667 37.0729V29.4071C26.6667 29.0757 26.3981 28.8071 26.0667 28.8071Z" fill="#0085FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.8497 14.9333H9.0667V6.92265L14.4 5.03405V14.9333H25.6426C25.9358 14.9333 26.186 14.7214 26.2344 14.4323L26.6583 11.899C26.7195 11.5332 26.4374 11.2 26.0665 11.2H18.1334V0.600448C18.1334 0.186248 17.7236 -0.103352 17.333 0.0349147L5.73303 4.14265C5.4935 4.22751 5.33337 4.45411 5.33337 4.70825V11.2H2.27363C1.9805 11.2 1.73023 11.4118 1.68183 11.701L1.25797 14.2343C1.1967 14.6001 1.47877 14.9333 1.8497 14.9333Z" fill="#0085FF"/>
          </svg>
        </div>
        <ul>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li className='active'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
          <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#888991"/>
              </svg>
          </li>
        </ul>
      </div> 
      <div className='main'>
        <header className='top-bar'>
          <div className='balance'><span>Balance</span><p>213 920 $</p></div>
          <div className='payout'><span>Payout</span><p>159 465 $</p></div>
        </header>
        <div className='main-content'>
          <h1>Services</h1>
          <div className='filter'>
            <label className='label'>filter</label>
            <div><input className='input-field' onChange={(e) => filter(e.target.value)} type="text" />
            <button className='secondary' onClick={reset}>reset</button></div>
          </div>
          {rows.map((row, index) => {
            return (
              <div key={index} className='sub-container'>
              <div className='name'>
                <h3>{row.name}</h3>
                {row.description}
              </div>
              <div className='field'>
                <label className='label'>promocode</label>
                <FontAwesomeIcon onClick={() => copyPromo(index)} icon={faCopy} />
                <input onChange={getPromocode} ref={el => itemsRef.current[index] = el}  value={row.code} className='input-field' type="text" />
                <span>{index === indx ? copySuccess : ''}</span>
              </div>
              <div className='button'>
                <button ref={el => btnRef.current[index] = el} onClick={() => activate(index)}>Activate bonus</button>
              </div>
            </div>
            )
          })}
          <hr />
          <div className='footer'><span>&copy; IT Promocodes, 2019</span></div>
        </div>
      </div>
     </div>
   </React.Fragment>
  );
};

export default App;