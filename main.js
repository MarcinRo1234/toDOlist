const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const taskArrayList = document.querySelector(".tasks-array-list")

let counter = 0;


const taskAdd = () => {
    let inputValue = input.value;
    if(inputValue === "") {
        return alert("Wpisz zadanie");
    }
    counter++
    let liElement = document.createElement("li");
    liElement.classList.add("tasks-array-list-element");
    liElement.innerHTML = counter +"." +"  "+ inputValue +   `<i class="fa-solid fa-check"></i>` +   `<i class="fa-solid fa-x"></i>`;
    // liElement.textContent = counter +"   "+ inputValue;

    taskArrayList.appendChild(liElement);


    input.value="";
    console.log(counter);
};








btnAdd.addEventListener("click", taskAdd)