import React from "react";
import NewsDetails from "@/Components/EachNews/EachNews";
import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import NewsGrid from "@/Components/SubNews/SubNews";

export default function AllNews(){
    return(
       <div>
         <Navbar/>
         <NewsDetails/>
         <NewsGrid/>
         <Footer/>
       </div>
    )
}