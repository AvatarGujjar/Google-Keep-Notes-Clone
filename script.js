const addButton = document.querySelector("#add");


const updateLSData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const dateTimeData = document.querySelectorAll('.date');
    // console.log(dateTimeData);
    // console.log(textAreaData);
    const notes = {msges:[], dates:[]};
    
    textAreaData.forEach((note, index) =>{
        return (
            notes.msges.push(note.value),
            notes.dates.push(dateTimeData[index].innerHTML)
        );
        
    });
    console.log(notes);
    

    localStorage.setItem('notes', JSON.stringify(notes));
}
 

const addNewNote = (text ='', date ='') => {
    // console.log("text",text);
    // console.log("text",date)


    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
        <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i></button>

            <button class="delete"> <i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}" ></div>
        <textarea class="${text ? "hidden" : "" }" placeholder="Take a note..."></textarea>

        
        <div class="date"></div>       `;
        console.log("Avata", date);

    note.insertAdjacentHTML('afterbegin', htmlData);
    

    //getting the refrences
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    const dateTimeEdit = note.querySelector('.date');
   

    //deleting the note
    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });


    // for internal input
    textArea.value = text;
    mainDiv.innerHTML = text;
     // console.log("Avatar",text);

    // Set the date
    dateTimeEdit.innerHTML = date;


    //toggle using edit button
    editButton.addEventListener('click', (e) => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');

        let currentDateTime = new Date();
        dateTimeEdit.innerHTML = currentDateTime.toLocaleString();
        
        
    });
 

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;

        let currentDateTime = new Date();
        dateTimeEdit.innerHTML = currentDateTime.toLocaleString();
        const datevalue = dateTimeEdit.innerHTML;
        // console.log("Avatar", value);
        // console.log("Singh", datevalue);
        mainDiv.innerHTML = value;
        updateLSData();

    });

    document.body.appendChild(note);

}


//getting data back from localStorage
const latestnotes = JSON.parse(localStorage.getItem('notes')) || [];
console.log("sa", localStorage.getItem('notes'))
console.log("a",  JSON.parse(localStorage.getItem('notes')));
console.log("as",  latestnotes);

if(latestnotes){
latestnotes?.msges?.forEach((note, index) => {
    const date = latestnotes.dates[index] || ''; // Get the corresponding date or an empty string
    addNewNote(note, date);
})
};
addButton.addEventListener('click',  () => addNewNote() ); 



//  --------Dark Mode-------------

const whiteModeBtn = document.querySelector(".whitebtn");
const darkModeBtn = document.querySelector(".darkbtn");
const darkMode = document.querySelector(".darkmode");

darkModeBtn.addEventListener('click' , (event) => {
    // console.log("event",event)
    // console.log("target", event.target)
    event.target.classList.add('hidden')
    whiteModeBtn.classList.remove('hidden')


})
whiteModeBtn.addEventListener('click' , (event) => {
    event.target.classList.add('hidden')
    darkModeBtn.classList.remove('hidden')
})


darkMode.addEventListener('click' , () => {
   
    document.querySelector('.heading').classList.toggle('headingDark');
    document.querySelector('button.learn-more .button-text').classList.toggle('button-textDark');
    // document.querySelector('.headingName').classList.toggle('headingNameDark');
    document.body.classList.toggle("bodyDark");
})


// --------------List---------

const listModeBtn = document.querySelector(".listbtn");
const gridModeBtn = document.querySelector(".gridbtn");
const listMode = document.querySelector(".list");


listModeBtn.addEventListener('click' , (event) => {
    event.target.classList.add('hidden')
    gridModeBtn.classList.remove('hidden')


});
gridModeBtn.addEventListener('click' , (event) => {
    event.target.classList.add('hidden')
    listModeBtn.classList.remove('hidden')
});
