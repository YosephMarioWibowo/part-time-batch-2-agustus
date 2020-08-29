var data = [
    {
        name : "Yoseph",
        age : 28,
        email : "yoseph@mail.com",
        education : "bachelor degree",
        gender : "male",
        division : "production"
    },
    {
        name : "Mario",
        age : 17,
        email : "mario@mail.com",
        education : "diploma",
        gender : "male",
        division : "maintenance"
    }

]

function show() {
    var table = document.getElementById("table");
    table.innerHTML = "<tr><th>No</th><th>Nama</th><th>Age</th><th>Email</th><th>Education</th><th>Gender</th><th>Division</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnDiscard = "<button class='btn-discard' href='#' onclick='discard(" + i + ")'>Discard</button>";
        j = i + 1;
        table.innerHTML += "<tr><td>" + j 
        + "</td><td>" + data[i].name 
        + "</td><td>"+ data[i].age 
        +"</td><td>" + data[i].email 
        +"</td><td>" + data[i].education 
        +"</td><td>" + data[i].gender
        +"</td><td>" + data[i].division 
        +"</td><td>" + btnEdit + " " + btnDiscard + "</tr>";
    }
}

function add() {
    var inputName = document.getElementById("input-name");
    var inputAge = document.getElementById("input-age");
    var inputEmail = document.getElementById("input-email");
    var inputEducation = document.getElementById("input-education");
    var inputGender = document.getElementById("input-gender");
    var inputDivision = document.getElementById("input-division");
    data.push({
        name : inputName.value, 
        age : inputAge.value,
        email : inputEmail.value,
        education : inputEducation.value,
        gender : inputGender.value,
        division : inputDivision.value})
    show();
    inputName.value = "";
    inputAge.value = "";
    inputEmail.value = "";
    inputEducation.value = "";
    inputGender.value = "";
    inputDivision.value = "";
}

function edit(id) {
    var prompName;
    var prompAge;
    var prompEmail;
    var prompEducation;
    var prompGender;
    var prompDivision;
    prompName = prompt("Name",data[id].name);
    prompAge = prompt("Age",data[id].age);
    prompEmail = prompt("Email",data[id].email);
    prompEducation = prompt("Education",data[id].education);
    prompGender = prompt("Gender",data[id].gender);
    prompDivision = prompt("Divison",data[id].division);
    data[id].name = prompName;
    data[id].age = prompAge;
    data[id].email = prompEmail;
    data[id].education = prompEducation;
    data[id].gender = prompGender;
    data[id].division = prompDivision;
    show();
}

function discard(id) {
    var r = confirm("Are you sure?");
    if (r == true) {
        data.splice(id,1)
    }
    show();
}

show();
