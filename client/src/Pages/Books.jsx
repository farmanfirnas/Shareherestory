import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../Components/Book/BookCard";
import Loading from "./Loading";

const Books=()=>{
    const state=useSelector((state)=>{return state})
    const[book,setbooks]=React.useState([])
    const[loading,setloading]=React.useState(true)
    const getbookdata=async()=>{
        const book=await fetch("https://ill-jade-eel-gear.cyclic.app/book/get");
        const bookresp=await book.json()

       setbooks(bookresp)
       setloading(false)
      

    }
   

   React.useEffect(()=>{
   getbookdata()
   },[])
    
   if(loading){
    return <Loading/>
   }
    return(<Container minW={"80vw"}>
        <Stack direction={"column"}>
    {
        book.map((e)=>{
            return <BookCard key={e._id} title={e.title} img={e.img} id={e._id} description={e.description} cost={e.cost} author={e.author}/>
        })
    }
       
        </Stack>

    </Container>)
}

export default Books;