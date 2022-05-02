// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let value=(localStorage.getItem("value"))
console.log(value)
import { navbar } from "../components/navbar.js"
import {  searchnews,append,searchn } from "./fetch.js"
let n = document.getElementById('navbar')
n.innerHTML = navbar()

 searchnews(value).then((data) => {
           
            console.log(data)
            

            let container=document.getElementById('results')
           container.innerHTML=null;
            append(data.articles,container)
            
            

        });

