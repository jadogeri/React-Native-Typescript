import React, { ChangeEvent, Dispatch, SetStateAction, useState, } from 'react';
import { StyleSheet} from 'react-native';
import "./styles.css"
import { getResult } from './utils/getResult';
import InputField from './components/InputField';
import { FAHRENHEIT, CELCIUS,TITLE } from './constants';


export default function App() {
  const [fahrenheit, setFahrenheit] = useState<number>(0);

  const [celcius, setCelcius] = useState<number>(0);


  const handleTextChange = (event : ChangeEvent<HTMLInputElement>, callback : Dispatch<SetStateAction<number>>)  =>{

    callback(Number(event.target.value));

  }

   return (
    <div  style={styles.container}> 
      <table >
        <tbody>
          <tr>
            <th colSpan={2}>{TITLE}</th>
          </tr>
          <tr>
            <td>{FAHRENHEIT}</td>
            <td>{CELCIUS}</td>

          </tr>
          <tr>
            <td>{<InputField 
                    placeholder={'Enter Input Here ...'}
                    type="number"                
                    onChange={(e) =>handleTextChange(e,setFahrenheit)}
                    id="input" 
                  />
                }
              </td>
        
            <td>{celcius}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={()=>{setCelcius(getResult(fahrenheit))}}>Press Enter</button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    alignSelf:"center",
    marginRight : "30%",
    marginLeft : "30%"

    
  }
})