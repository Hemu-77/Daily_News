import React from "react";
import NewsDetails from "@/Components/EachNews/EachNews";
import Navbar from "@/Components/Common/Navbar";

export default function AllNews(){
    return(
       <div>
         <Navbar/>
         <NewsDetails/>
       </div>
    )
}