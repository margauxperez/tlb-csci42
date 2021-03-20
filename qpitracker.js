const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const numberOfUnits = document.querySelector("#number-of-units");
const letterMark = document.querySelector("#letter-mark");
const tbody = document.querySelector("#tbody");
const table = document.querySelector("#table");
const clear = document.querySelector("#clear");
const calcQPI = document.querySelector("#calc-QPI");

add.addEventListener("click", () => {
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
})