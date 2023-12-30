const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const taskArrayList = document.querySelector(".tasks-array-list")
const pCounter = document.querySelector(".counter");
const btnEnd = document.querySelector(".btn-end");
const btnGetInformation = document.querySelector(".btn-get-information");
const summaryTasksDone = document.querySelector(".summary-tasks-done");
const summaryTasksAll = document.querySelector(".summary-tasks-all");


let counter = 0;
let decrease = 0;
let konkordat = 0;

const tasksEditing = (e) => {
    let editing = document.querySelector(".editing");
    console.log(editing);
    editing.style.display = "flex";
    
}

const removeLiElement = (e) => {
    e.target.parentNode.remove();
    decrease++;
    summaryTasksDone.textContent = `Liczba wykonanych zadań : ${decrease}`;
    console.log("działą");
}

const taskAdd = () => {
    let inputValue = input.value;
    if(inputValue === "") {
        return alert("Wpisz zadanie");
    }
    counter++
    let liElement = document.createElement("li");
    liElement.classList.add("tasks-array-list-element");
    // liElement.innerHTML = counter +"." +"  "+ inputValue +   `<i class="fa-solid fa-check"></i>` +   `<i class="fa-solid fa-x"></i>`;
    liElement.innerHTML = counter + "." +"  " + inputValue + `<button class = "done">&#9989</button>` +`<button class = "edit">&#128396</button>`
    // liElement.textContent = counter +"   "+ inputValue;
    liElement.querySelector("button").addEventListener("click", removeLiElement);
    liElement.querySelector(".edit").addEventListener("click", tasksEditing);
    taskArrayList.appendChild(liElement);
    
    
    input.value="";
    console.log(counter);
    // const btnli =liElement.getElementsByClassName("fa-check");


    // btnli.addEventListener("click", removeLiElement)
};

const endWork = () => {
    konkordat++
    let data = new Date();
    console.log(data);
    let NewDate = `${data.getDate()} : ${data.getMonth() + 1} : ${data.getFullYear()}`;
    console.log(NewDate);
    localStorage.setItem(NewDate, decrease);
    decrease = 0;
    console.log(NewDate);
    let total = localStorage.getItem(NewDate) * 1;
    summaryTasksAll.textContent += total;
    
}

console.log(counter);

const getInformation = () => {
   let kokon = localStorage.key
   console.log(kokon);

};


btnAdd.addEventListener("click", taskAdd);
btnEnd.addEventListener("click", endWork);
btnGetInformation.addEventListener("click", getInformation);
