// // console.log(window);
// // console.log(window);


// // console.log("hello");


// // window.console.log("Hello");


// // console.log(document);
// // console.log(document.body);
// // console.log(document.title);
// // console.log(document.head);


// // // DOM => Document Object Model
// // // It is a tree like structure which contains nodes



// // console.log(document.body.childNodes());
// // console.log(document.body.children[2]);



// // let btn1 = document.body.children[2]
// // console.log(html.parentElement);
// // console.log(html.parentNode);




// // console.log(document.body.children[3]);
// // let div1 = document.body.children[3]
// // console.log(div1.firstElementChild);
// // console.log(div1.lastElementChild);
// // console.log(div1.nextElementSibling);


// // let head1 = div1.lastElementChild
// // console.log(head1.nextElementSibling)


// // console.log(head4.previousElementSibling);
// // console.log(head4.previousSibling);


// // // !dom direct access methods



// // // getElementById 
// // // returns only the first element

// // let h1 = document.getElementById("head1")
// // console.log(h1);




// // getElementByClass

// let head4 = document.getElementsByClassName("h44")
// console.log(head4);


// let convertedArray = Array.from(head4)
// console.log(convertedArray);


// convertedArray.map((ele) => {
//     ele.style.color = "blue";
//     ele.style.backgroundColor = "skyblue"
//     ele.style.innerText = "heading"
//     ele.style.fontSize = '10px'
// })



// // getElementByName

// let btnname = document.getElementsByName('btn')
// console.log(btnname);


// let h11 = document.getElementsByTagName("h1")
// console.log(h11);



// //?querySelector
// let h12 = document.querySelector(".h44")

// console.log(h12);





// let convertedArray1 = Array.from(h12)
// console.log(convertedArray1);


// convertedArray1.map((ele) => {
//     ele.style.color = "blue";
//     ele.style.backgroundColor = "skyblue"
//     ele.style.innerText = "heading"
//     ele.style.fontSize = '10px'
// })






// let h13 = document.querySelectorAll(".h44")
// console.log(h13);








// // getElementByName = NodeCollection 
// // QuerySelector = NodeCollection








// let img1 = document.createElement("img")
// console.log(img1);



// img1.setAttribute("src", "https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8")


// document.body.append(img1)


// img1.setAttribute("alt", "broken")





// // let heading = document.createElement('h1')
// // console.log(heading);

// // documnent.body.append(heading)


// // heading.setAttribute()


// // let h1 = document.createElement("h1")
// // h1.innerHTML = "javascript"
// // document.body.append(h1)


// let h1 = document.createElement("h1")
// h1.innerHTML = "javascript"
// document.body.append(h1)





// let p = document.createElement("h1")
// p.textContent = "playwright"
// document.body.append(p)


// p.setAttribute("id", "p1")
// document.body.append(p)
// console.log(p);


// p.removeAttribute("id");
// console.log(p);
// document.body.removeChild(p);
// console.log(document.body);



// // Event Handling

// // inline handling
// let btn1 = Document.getElementById('btn1')

// btn1.onClick = function demo() {
//     alert("clicked")
// }


// function demo() {
//     alert("button clicked")
// }


// addEventListener


/*
syntax

element.addEventLister("event", callback)

*/


// let btn1 = document.getElementById("btn1")

// btn1.addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue"

//     let img1 = document.createElement("img")

//     img1.setAttribute("src", "")
// })


let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "blue";
    }
});