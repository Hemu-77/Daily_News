import React from "react";
import NewsFeed from "@/Components/AllNews/AllNews";
import Navbar from "@/Components/Common/Navbar";

export default function AllNews(){
    return(
       <div>
         <Navbar/>
         <NewsFeed/>
       </div>
    )
}
