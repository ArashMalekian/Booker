import axios from 'axios';
import React, { createContext , useEffect , useState , useReducer } from 'react'
import { DateShower } from '../funcs/DateShower';

export const dateContext = createContext();

  const initialState = {
      data:{},
      loading:true,
      error:''
  }

  const reducer = (state , action) => {
      switch(action.type){
          case"SUCCESS" :
          return {
              loading:false,
              error:"",
              data:action.payload
          }
          case"FAILED" :
          return {
              loading:true,
              data:[],
              error:"error"
          }
          default :
          return state;
      }
  }

export const BookerContext = (props) => {
      const [date, dispatch] = useReducer(reducer, initialState)

      useEffect(() => {
          axios.get('http://api.codebazan.ir/time-date/?json=all')
          .then(Response => {
              dispatch({type : "SUCCESS" , payload : Response.data})
              console.log(date);
      })
      .catch( error => {
          dispatch({type : "FAILED" , payload : error})
      })
      }, [])

    //   const [date, setDate] = useState({})
    //   useEffect(() => {
    //       const fetchDate = async () => {
    //           setDate(await DateShower() );
    //           console.log(date);
    //       };
    //       fetchDate();
    //     }, [])
    return (
        <div>
            <dateContext.Provider value={date} >
                {props.children}
            </dateContext.Provider>
        </div>
    )
}
