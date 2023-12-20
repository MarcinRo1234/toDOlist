const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const taskArrayList = document.querySelector(".tasks-array-list")
const pCounter = document.querySelector(".counter");
const btnEnd = document.querySelector(".btn-end");

let counter = 0;
let decrease = 0;

const removeLiElement = (e) => {
    e.target.parentNode.remove();
    decrease++;
    pCounter.textContent = `Liczba wykonanych zadań : ${decrease}`;
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
    liElement.innerHTML = counter + "." +"  " + inputValue + `<button class = "done">&#9989</button>`
    // liElement.textContent = counter +"   "+ inputValue;
    liElement.querySelector("button").addEventListener("click", removeLiElement);
    taskArrayList.appendChild(liElement);
    

    input.value="";
    console.log(counter);
    // const btnli =liElement.getElementsByClassName("fa-check");


    // btnli.addEventListener("click", removeLiElement)
};

const endWork = () => {
    let data = new Date();
    console.log(data);
    let NewDate = `${data.getDate()} : ${data.getMonth() + 1} : ${data.getFullYear()}`
    console.log(NewDate);
    localStorage.setItem(NewDate, decrease);
}

console.log(counter);




btnAdd.addEventListener("click", taskAdd)
btnEnd.addEventListener("click", endWork);
