import { useEffect, useState } from "react";

    

  const getQuote = (url, api_key) => {
    return fetch(url, {
      headers: { "X-Api-Key": api_key },
      contentType: "application/json",
    });
  };

const Footer = () => {
    const [count, setCount] = useState(10)
    const [setsetLoading, setSetsetLoading] = useState(false)
     const api_key = import.meta.env.VITE_api_key; 
     const [quote, setQuote] = useState('')
    // console.log(api_key);

     const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;  

     useEffect(() => {
        setSetsetLoading(true)
        getQuote(url, api_key)
         .then((res) => res.json())
         .then((data) => {
            setSetsetLoading(false)
            setQuote(data[0].quote)        
         })
         .catch((err) => {
           console.log(err);
           setSetsetLoading(false);
         });          
     }, [api_key, url ])

     useEffect(() => {
       const timer = setTimeout(() => {
        if(count > 0){
         setCount((prev) => prev - 1);
        }
       }, 1000);
     
       return () => {
            clearTimeout(timer) 
       }
     }, [count])

    useEffect(() => {
        if(count === 0){
            setSetsetLoading(true)
            getQuote(url, api_key)
            .then(res => res.json())
            .then(data => {
                setQuote(data[0].quote);      
                setSetsetLoading(false)  
                setCount(10)
            })
            .catch(err => {
                console.log(err);
                setSetsetLoading(false);
            })
        }
    }, [count, url, api_key])
    


    // console.log(count);
     
     

    return (
      <div className="min-h-20 bg-black text-white">
        <div className="p-4">
          <div className="flex justify-between text-xl">
            <div>Fetch New Quote Every 10 second</div>
            <div>{ !setsetLoading ? count: "Loading..."}</div>
          </div>
          <div className="bg-white text-black p-2 mt-2 font-bold" >
           <span className="text-bold text-red-400">Quote</span> {quote}
          </div>
        </div>
      </div>
    );
};

export default Footer;


/*
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/