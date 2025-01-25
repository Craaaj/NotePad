const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", true);
    // img.setAttribute("id","dltbtn")
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note =>{
            note.onkeyup = function(){
                updateStorage();
            }
        });
    }
});



document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});










// // Function to add image to all existing input boxes
// function addImageToInputBoxes() {
//     var elements = document.getElementsByClassName('input-box');
//     for (let i = 0; i < elements.length; i++) {
//         // Create the image element
//         let img = document.createElement("img");
//         img.src = "images/delete.png";
        
//         // Append the image to the existing input box
//         elements[i].appendChild(img);
//     }
// }

// // Event listener for the create button
// createBtn.addEventListener("click", () => {
//     // Create a new input box
//     let inputBox = document.createElement("p");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", true);

//     // Create the image for the new input box
//     let img = document.createElement("img");
//     img.src = "images/delete.png";
    
//     // Append the image to the new input box
//     inputBox.appendChild(img);
    
//     // Append the new input box to the notes container
//     notesContainer.appendChild(inputBox);

//     // Call the function to add images to all input boxes
//     addImageToInputBoxes();
// });
