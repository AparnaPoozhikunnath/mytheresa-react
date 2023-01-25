import { useState, useEffect } from "react";



 function fetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
         fetch(url)
         .then(response => response.json()).then(json => {
            setData(json);
         })
        
         .catch((err) => {
          console.log(err.message);
         });
       }, [url]);
       return  data;
  
  }
  
  export default fetchData;



