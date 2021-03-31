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
const qpiresults = document.querySelector("#qpiresults");
const placeholder = document.getElementById('placeholder')
calcQPI.disabled = true;
let QPIArray = [];

add.addEventListener("click", () => // adds course code, units, and grades to table
{
    if (courseCode.value === "" || numberOfUnits.value <= 0 || letterMark.selectedIndex === 0) // checks if all form fields have been filled
    {
        alert("Please input the right values.")
    } 
    else 
    {
        calcQPI.disabled = false; // enables Calculate QPI button
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
        tbody.appendChild(tr); // adds inputted values to table
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

calcQPI.addEventListener("click", () => { // calculates the QPI
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
    tdQPI.classList.add('td-qpi')
    tdQPI.innerHTML = `${(sumOfProductOfSumOfNumberOfUnitsAndLetterMarks / sumOfNumberOfUnits).toFixed(2)}`;

    tr.appendChild(tdQPI);
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove();
    }
    placeholder.classList.add('hide');
    tfoot.appendChild(tr);
  
});

clear.addEventListener("click", () => { // clears table values
    calcQPI.disabled = true;
    QPIArray = [];
    tbody.querySelectorAll("*").forEach(child => child.remove());
    if(tfoot.querySelector("tr") !== null){
        tfoot.querySelector("tr").remove();
        placeholder.classList.remove('hide');
    }

    table.classList.add("display-none");
    calcQPI.classList.add("display-none");
    clear.classList.add("display-none");
})