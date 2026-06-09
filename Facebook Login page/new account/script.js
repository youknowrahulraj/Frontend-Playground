let daySelect = document.getElementById("day");
let monthSelect = document.getElementById("month");
let yearSelect = document.getElementById("year");

for(let i = 1; i <= 31; i++){

    let option = document.createElement("option");

    option.value = i;
    option.text = i;

    daySelect.appendChild(option);
}

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

for(let i = 0; i < months.length; i++){

    let option = document.createElement("option");

    option.value = months[i];
    option.text = months[i];

    monthSelect.appendChild(option);
}

for(let i = 2026; i >= 1900; i--){

    let option = document.createElement("option");

    option.value = i;
    option.text = i;

    yearSelect.appendChild(option);
}