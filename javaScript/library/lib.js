let myLibrary = []


function Book(Title, Author,Pages,Read){
    this.Title = Title;
    this.Author= Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function()
    // {
    //     return (Title + Author + " , " + Pages + " , " + Read)
    // }
}


function addBookTooLibrary (Title,Author,Pages,Read){
    let book = new Book(Title,Author,Pages,Read);
    myLibrary.push(book);
    displayBooksOnPages();
}

// const thehobbit = new Book("The Hobbit", " by J.R.R. Tolien", "295 Pages", "not Read yet");
// console.log(thehobbit.info());
function displayBooksOnPages(){
    const books = document.querySelector('.books');

    const removeDivs = document.querySelector(".card");

    let index = 0;
    myLibrary.forEach(myLibrary =>{
        const card = document.createElement('div');
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary){

            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
    for( let i=0; i < removeDivs.length; i++){
        removeDivs[i].remove();
    }
}

const addBookButton = document.querySelector(".add-book-button")
addBookButton.addEventListener("click",displayTheForm);

function displayTheForm(){
    document.getElementById("add-book-form").style.display="";
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click",intakeFormData);

function intakeFormData(){
    let  Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")){
        return;
    }
    addBookTooLibrary(Title,Author,Pages,Read);

    document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click",clearForm);

function clearForm(){
    document.getElementById("add-book").reset();
}
// addBookTooLibrary("The habbit", "J.R.R, Tolkien"," 295 Pages","not Read yet");
// addBookTooLibrary("The seven habbits of highly effective people","Steven Covery","200 Pages","Read")
// displayBooksOnPages();