import React from "react";
import NewsFeed from "@/Components/AllNews/AllNews";
import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";

export default function AllNews(){
    return(
       <div>
         <Navbar/>
         <NewsFeed/>
         <Footer/>
       </div>
    )
}
