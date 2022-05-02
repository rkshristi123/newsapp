// Ude Import export (MANDATORY)
let newsh=JSON.parse(localStorage.getItem("newsh"))
console.log(newsh)
import { navbar } from "../components/navbar.js"
import {  searchnews,append,searchn } from "./fetch.js"
let n = document.getElementById('navbar')
n.innerHTML = navbar()


    

    let container=document.getElementById('detailed_news')
   
    append(newsh,container)
