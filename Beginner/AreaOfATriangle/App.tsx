import React, { ChangeEvent, Dispatch, SetStateAction, useState, } from 'react';
import { StyleSheet} from 'react-native';
import "./styles.css"
import { getArea } from './utils/getArea';
import InputField from './components/InputField';
import { AREA, BASE, HEIGHT,TITLE } from './constants';


export default function App() {
  const [base , setBase] = useState<number>(0);
  const [height , setHeight] = useState<number>(0);

  const [area , setArea] = useState<number>(0);


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
            <td>{BASE}</td>
            <td>{HEIGHT}</td>
            <td>{AREA}</td>

          </tr>
          <tr>
            <td>{<InputField 
                    placeholder={'Enter Input Here ...'}
                    type="number"                
                    onChange={(e) =>handleTextChange(e,setBase)}
                    id="input" 
                  />
                }
              </td>
              <td>{<InputField 
                    placeholder={'Enter Input Here ...'}
                    type="number"                
                    onChange={(e) =>handleTextChange(e,setHeight)}
                    id="input" 
                  />
                }
              </td>
            <td>{area}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={()=>{setArea(getArea(base, height))}}>Press Enter</button>

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