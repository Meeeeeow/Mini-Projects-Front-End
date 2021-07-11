const btnAdd = document.querySelector(".add");



btnAdd.addEventListener("click",()=>{
   addNewNotes();
});
const  savedNotes = JSON.parse(localStorage.getItem("Notes"));
if(savedNotes)
{
    savedNotes.forEach(note=>{
        addNewNotes(note);
    });
}

function addNewNotes(txt =''){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML =
    `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="newnote ${txt ? '' : "hidden"}"></div>  
        <textarea class="${txt ? "hidden" : ''}"></textarea>
</div>
    `;
    const btnEdit =note.querySelector(".edit");
    const btnDel = note.querySelector(".delete");

    const newNote = note.querySelector(".newnote");
    const textArea = note.querySelector("textarea");

    newNote.innerHTML = marked(txt);
    textArea.innerHTML = txt;

    btnEdit.addEventListener("click",()=>{
        newNote.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    btnDel.addEventListener("click",()=>{
        note.remove();
        updateLS();
    });
    textArea.addEventListener("input",(e)=>{
        const { value } = e.target;
        newNote.innerHTML = marked(value);
        
        updateLS();
    });
    document.body.appendChild(note);

}

function updateLS(){
    const allNotes = document.querySelectorAll("textarea");

    const notes = [];

    allNotes.forEach(note =>{
        notes.push(note.value);
    });
    localStorage.setItem("Notes",JSON.stringify(notes));
}