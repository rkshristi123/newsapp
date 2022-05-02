// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

let searchnews = async ( value) => {

    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        
        let data = await res.json();
        console.log(data)

        return data;

    } catch (err) {
        console.log(err)

    }
};

let searchn = async ( value) => {
   

    try {
       
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value} `)
        
        let data = await res.json();
        console.log(data)

        return data;

    } catch (err) {
        console.log(err)

    }

};





let append=(data,container)=>{
    data.forEach(({urlToImage,description,title})=>{
let div=document.createElement('div')
div.setAttribute("class",'news')
let img=document.createElement('img')
img.src=urlToImage
let p1=document.createElement("p")
p1.innerText=title
let h3=document.createElement('h3')
h3.innerText=description

div.append(img,p1,h3)
div.addEventListener("click",myfun)
function myfun(){
    news(data)
}
container.append(div)
    })

}

function news(el){
    localStorage.setItem("newsh",JSON.stringify(el))
    window.location.href="news.html"
}
export { searchnews,append,searchn };