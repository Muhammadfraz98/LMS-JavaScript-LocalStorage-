let booksTest = JSON.parse(localStorage.booksRecord).length
let booksArray = booksTest ? JSON.parse(localStorage.booksRecord) : []


// Index Table insert----------------------------------------//
function init(){
    
    let booksTable = document.getElementById("bookRows");
    if(booksTable){       
        for(let i=0 ; i < booksArray.length; i++){
            console.log(i, booksArray[i])
            prepareTableCell(i,booksArray[i].bookname, booksArray[i].authorname, booksArray[i].publishername, booksArray[i].publishdate);
        }
        
    }
}

// Author Table insert----------------------------------------//
function onAuthorsShow(){
    let authorsTable = document.getElementById("authorRows");
    if(authorsTable){
        for(let i=0 ; i < booksArray.length; i++){
            console.log(i, booksArray[i]);
            prepareAuthorsTable(i,booksArray[i].authorname);

        }
    }
}

// Publisher Table insert----------------------------------------//
function onPublishersShow(){
    let authorsTable = document.getElementById("publisherRows");

    if(authorsTable){
        console.log('Publisher table test')
        for(let i=0 ; i < booksArray.length; i++){
            console.log(i, booksArray[i]);
            preparePublishersTable(i,booksArray[i].publishername);

        }
    }
}

// Book Register Function-----------------------------------//
function onRegisterPressed(){
    let bookName = document.getElementById("bookname").value;
    let authorName = document.getElementById("authorname").value;
    let publisherName = document.getElementById("publishername").value;
    let publishDate = document.getElementById("publishdate").value;

    let bookObj = {
        bookname: bookName,
        authorname: authorName,
        publishername: publisherName,
        publishdate: publishDate
    }

    if(selectedIndex == -1){
        booksArray.push(bookObj);
    }else{
        booksArray.splice(selectedIndex,1,bookObj) 
    }
    


    localStorage.booksRecord = JSON.stringify(booksArray);


    init();
    onClearPressed();


}

// -------------------/Books Table/--------------------------------//
function prepareTableCell(index,bookName, authorName, publisherName, publishDate){
    let table = document.getElementById("bookRows");
    let row = table.insertRow();
    
    let numberCell = row.insertCell(0);
    let bookNameCell = row.insertCell(1);
    let authorNameCell = row.insertCell(2);
    let publisherNameCell = row.insertCell(3);
    let publishDateCell = row.insertCell(4);
    let actionCell = row.insertCell(5);

    numberCell.innerHTML = index+1;
    bookNameCell.innerHTML = bookName;
    authorNameCell.innerHTML = authorName;
    publisherNameCell.innerHTML = publisherName;
    publishDateCell.innerHTML = publishDate;
    actionCell.innerHTML = '<button class="button button3" onclick="deleteTableRow('+index+')">Delete</button>&nbsp;<button class="button button2" onclick="onEditPress('+index+')">Edit</button>';

}




// -------------------/Authors Table/--------------------------------//

function prepareAuthorsTable(index, authorName){
    let table = document.getElementById("authorRows");
    console.log(table);
    let row = table.insertRow();

    let numberCell = row.insertCell(0);
    let authorNameCell = row.insertCell(1);
    let actionCell = row.insertCell(2);
    
    numberCell.innerHTML = index+1;
    authorNameCell.innerHTML = authorName;
    actionCell.innerHTML = '<button class="button button3" onclick="deleteAuthorRow('+index+')">Delete</button>';
}


// -------------------/Publisher Table/--------------------------------//

function preparePublishersTable(index, publisherName){
    let table = document.getElementById("publisherRows");
    let row = table.insertRow();

    let numberCell = row.insertCell(0);
    let publisherNameCell = row.insertCell(1);
    let actionCell = row.insertCell(2);
    
    numberCell.innerHTML = index+1;
    publisherNameCell.innerHTML = publisherName;
    actionCell.innerHTML = '<button class="button button3" onclick="deletePublisherRow('+index+')">Delete</button>';
}
// -------------------------Delete Books Row--------------------------//
function deleteTableRow(index){
    let table = document.getElementById("addedBooksList");
    table.deleteRow(index+1);
    booksArray.splice(index,1);
    localStorage.booksRecord = JSON.stringify(booksArray);
    // init();
}

// -------------------------Delete Authors Row--------------------------//
function deleteAuthorRow(index){
    let table = document.getElementById("authorsTable");
    table.deleteRow(index+1);
    booksArray.splice(index,1);
    localStorage.booksRecord = JSON.stringify(booksArray);
    // init();
}

// -------------------------Delete Publishers Row--------------------------//
function deletePublisherRow(index){
    let table = document.getElementById("publishersTable");
    table.deleteRow(index+1);
    booksArray.splice(index,1);
    localStorage.booksRecord = JSON.stringify(booksArray);
    // init();
}

// -------------------------Update -------------------------//


let selectedIndex = -1;
function onEditPress(index){
    console.log(booksArray[index]);
    selectedIndex = index;
    var bookObj = booksArray[index];

    document.getElementById("bookname").value = bookObj.bookname;
    document.getElementById("authorname").value = bookObj.authorname;
    document.getElementById("publishername").value= bookObj.publishername;
    document.getElementById("publishdate").value = bookObj.publishdate;


    document.getElementById("submit").innerHTML = "Update";
    


}

function onClearPressed(){
    selectedIndex = -1;
    document.getElementById("bookname").value = "";
    document.getElementById("authorname").value ="";
    document.getElementById("publishername").value= "";
    document.getElementById("publishdate").value="";
    document.getElementById("submit").innerHTML = "Nothing to Update"
}

function onUpdate(){
    let bookName = document.getElementById("bookname").value;
    let authorName = document.getElementById("authorname").value;
    let publisherName = document.getElementById("publishername").value;
    let publishDate = document.getElementById("publishdate").value;

    let bookObj = {
        bookname: bookName,
        authorname: authorName,
        publishername: publisherName,
        publishdate: publishDate
    }

    if(selectedIndex == -1){
        booksArray.push(bookObj);
    }else{
        booksArray.splice(selectedIndex,1,bookObj) 
    }
    


    localStorage.booksRecord = JSON.stringify(booksArray);


    // init();
    onClearPressed();
}