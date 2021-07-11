
const btnAdd = document.querySelector('.add');

btnAdd.addEventListener("click",()=>{
    addNewNotes();
});
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach(note=>{
        addNewNotes(note);
    });
}
function addNewNotes(text=''){
  const note = document.createElement('div');
  note.classList.add('note');
  
  note.innerHTML = `
    <div class="notes">
                <div class="tools">
                    <button class="edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class = "delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
                <div class="newnote ${text ? '' : 'hidden'}"></div>
                <textarea class="${text ? 'hidden' : ''}"></textarea>
        </div>
  `

const btnEdit = note.querySelector('.edit');
const btnDel = note.querySelector('.delete');



const main = note.querySelector('.newnote');
const textarea = note.querySelector('textarea');

textarea.value =text;
main.innerHTML = marked(text);
btnEdit.addEventListener("click",()=>{
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
});

btnDel.addEventListener("click",()=>{
    note.remove();
    updateLS();
});

textarea.addEventListener("input",(e)=>{
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLS();
});
  document.body.appendChild(note)
}

function updateLS(){
    const notesAll = document.querySelectorAll('textarea');

    const notes=[];

    notesAll.forEach(note => {
        notes.push(note.value);
    });
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes)); //local server or sotrage  send
}