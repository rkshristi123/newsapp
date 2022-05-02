// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js"
let n = document.getElementById('navbar')
n.innerHTML = navbar()

import {  searchnews,append,searchn } from "./fetch.js"

let search = (e) => {
    if (e.key === "Enter") {
        let value = document.getElementById('search_input').value;
        
       localStorage.setItem("value",value)

        window.location.href="search.html"
    }
};

document.getElementById('search_input').addEventListener("keydown", search);

let categories=document.getElementById('sidebar').children;
console.log(categories);


function nSearch(){
   
   

    searchn(this.id).then((data) => {
          
        console.log(data)

        let container=document.getElementById('results')
       container.innerHTML=null;

        append(data.articles,container)

    });
}


for(let el of categories){                 
    el.addEventListener("click",nSearch);
}


