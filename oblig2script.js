console.log(resources)

let resouceHTML = ""

resources.map(resouce => resouceHTML += `
<button id="${resouce.category}-btn" class="btn"> ${resouce.category} </button> 

`)

console.log(resouceHTML)

document.getElementById("btns").innerHTML = resouceHTML;

// Legger inn innhold for hver meny i fanemenyen. 

let contentHTML = ""

resources.map(resouce => contentHTML += `<div id="${resouce.category}" class="content ${resouce.category}">
<div class="content-left">
<h1>${resouce.category}</h1> 
<p>${resouce.text}</p>
<a href="#">${resouce.sources}</a>
</div>
</div>`)

console.log(contentHTML)

var div = document.getElementById("content");
div.innerHTML += contentHTML

//document.getElementById("content").innerHTML = contentHTML;

