import { useEffect, useState } from "react"
import firebase from "../firebase"


function GetData() {

     const [getList, setGetList] = useState();


    useEffect( ()=>{
        const getDataRef = firebase.database().ref('test');
         getDataRef.on('value', (snapshot)=>{
            console.log(snapshot.val())

            const getData = snapshot.val();
            
            
            const getList = []

            for (let id in getData) {
                getList.push(getData[id])
            }
            
            // getList.push(getData);
            
            setGetList(getList);

        })
    },[])

    return (
       
            <div>
            
            

                {getList != null ? (
                
                <>
                     {getList .map((data, index)=>(
                            <>
                        {getList.length > 0 && (
                            <div className="gpt3__header-content">
                            <h2>Getting Data from Firebase</h2>
                            <h3>zero_seq: {getList[0].zero_seq}</h3>
                            <h3>positive_seq: {getList[0].zero_seq}</h3>
                            <h3>negative_seq: {getList[0].zero_seq}</h3>
                            <h3>Fault_type: {getList[0].Fault_type}</h3> 
                        </div>
                        )}
                        </> 
                        ))} 
                
                </>):(<div>Please Enter Data Above</div>)} 
                   
        </div>
      
    )
}

export default GetData