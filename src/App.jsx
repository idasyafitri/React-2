import { useEffect } from "react";
import { useState } from "react";
import Card from "./component/card";
import Modal from "./component/Modal";
import Spinner from "./component/spinner";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [user] = useState([
    {id: Math.random(), name: "Lorem", subtitle:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed magnam sint perferendis, debitis quas tempora numquam ullam fugit esse`},
    {id: Math.random(), name:"Ida", subtitle:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed magnam sint perferendis, debitis quas tempora numquam ullam fugit esse`},
    {id: Math.random(), name:"Gea", subtitle:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed magnam sint perferendis, debitis quas tempora numquam ullam fugit esse`},
  ]
  );

  // useEffect{()=>{},[]};

  const displayUser= user.map((val) =>(
    <Card key={val.id} title={val.name}  subtitle={val.subtitle}/> // key khusus dipakai di sini
    ));

  useEffect(()=> {
    const Timer = setTimeout(()=> {
      
        setLoading((prevState) => (prevState = false));

    }, 2000);
      return()=>{
        clearTimeout(Timer);
      }
  }, []);
  if(isLoading) {
    return (
      <div style={{ textAlign:"center", marginTop:"40px"}}>
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <section style={{ display:"flex" }}> {displayUser}</section>
      <section>
        <Modal title={"paragraf"}>
          <p>ini adalah paragraf</p>
        </Modal>
        <Modal title={"heading"}>
          <h1>ini adalah heading 1</h1>
        </Modal>
        <Modal>
          <section>
          {/* ini component 1 */}
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ariana</td>
                <td>C</td>
              </tr>
            </tbody>
          </table>

          {/* ini component 2 */}
          <section>
            <h1>Contoh component 2</h1>
          </section>
          {/* ini component 3 */}
          <p>Lebih bagusnya kalau dalam satu induk terdapat satu anak meskipun di dalam anak itu ada banyak component</p>
          </section>
        </Modal>
      </section>
      {useState}
      {/* <p>Count : {count}</p>
      <button onClick={()=>setCount((prevState) => prevState+1)} >Click</button> */}

    </div>
  )
  
}

export default App;
