import React, { ChangeEvent, useState, } from 'react';
import { StyleSheet} from 'react-native';
import "./styles.css"
import { getArea } from './utils/getArea';
import InputField from './components/InputField';




export default function App() {
  const [radius , setRadius] = useState<number>(0);
  const [area , setArea] = useState<number>(0);


  const handleTextChange = (event : ChangeEvent<HTMLInputElement>)  =>{

    setRadius(Number(event.target.value));

  }

   return (
    <div  style={styles.container}> 
      <table>
      <tr>
        <th colSpan={2}>Area Of A Square</th>
      </tr>
      <tr>
        <td>Sample Input</td>
        <td>Sample Output</td>

      </tr>
      <tr>
        <td>{<InputField 
                placeholder={'Enter Input Here ...'}
                type="number"                
                onChange={handleTextChange}
                id="input"
                
        
        />}</td>
        <td>{area}</td>
      </tr>
      <tr>
       <td colSpan={2}>
        <button onClick={()=>{setArea(getArea(radius))}}>Press Enter</button>

       </td>
      </tr>

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
    marginLeft:"40%"
    
  }
})