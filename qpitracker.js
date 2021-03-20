// Sourced from: https://www.youtube.com/watch?v=oEm_POQszcg

const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const numberOfUnits = document.querySelector("#number-of-units");
const letterMark = document.querySelector("#letter-mark");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const clear = document.querySelector("#clear");
const calcQPI = document.querySelector("#calc-QPI");
let QPIArray = [];

add.addEventListener("click", () => 
{
    if (courseCode.value === "" || numberOfUnits.value <= 0 || letterMark.selectedIndex === 0)
    {
        alert("Please input the right values.")
    } 
    else 
    {
        const tr = document.createElement("tr");
        const tdCourseCode = document.createElement("td");
        tdCourseCode.innerHTML = courseCode.value;
        const tdNumberOfUnits = document.createElement("td");
        tdNumberOfUnits.innerHTML = numberOfUnits.value;
        const tdLetterMark = document.createElement("td");
        tdLetterMark.innerHTML = letterMark.options[letterMark.selectedIndex].text;
        tr.appendChild(tdCourseCode);
        tr.appendChild(tdNumberOfUnits);
        tr.appendChild(tdLetterMark);
        tbody.appendChild(tr);
        table.classList.remove("display-none");
        calcQPI.classList.remove("display-none");
        clear.classList.remove("display-none");
        QPIArray.push
        ({
            "numberOfUnits": numberOfUnits.value, 
            "letterMark": letterMark.options[letterMark.selectedIndex].value,
        });
        courseCode.value = "";
        numberOfUnits.value = "";
        letterMark.selectedIndex = "0";
    }
    
})

calcQPI.addEventListener("click", () => {
    let sumOfNumberOfUnits = 0, productOfSumOfNumberOfUnitsAndLetterMarks = 0,
    sumOfProductOfSumOfNumberOfUnitsAndLetterMarks = 0;

    QPIArray.forEach(result => {
        sumOfNumberOfUnits += parseFloat(result.numberOfUnits);
        productOfSumOfNumberOfUnitsAndLetterMarks = parseFloat(result.numberOfUnits) * parseFloat(result.letterMark);
        sumOfProductOfSumOfNumberOfUnitsAndLetterMarks += productOfSumOfNumberOfUnitsAndLetterMarks;
    });

    const tr = document.createElement('tr');

    tdTotalNumberOfUnits = document.createElement('td');
    tdTotalNumberOfUnits.innerHTML = `Your Total Number Of Units is ${sumOfNumberOfUnits}`;

    tdQPI = document.createElement('td');
    tdQPI.innerHTML = `your QPI is ${(sumOfProductOfSumOfNumberOfUnitsAndLetterMarks / sumOfNumberOfUnits).toFixed(2)}`;

    tr.appendChild(tdTotalNumberOfUnits);
    tr.appendChild(tdQPI);
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove();
    }
    tfoot.appendChild(tr);

});

clear.addEventListener("click", () => {
    QPIArray = [];
    tbody.querySelectorAll("*").forEach(child => child.remove());
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove();
    }
    

    table.classList.add("display-none");
    calcQPI.classList.add("display-none");
    clear.classList.add("display-none");
})