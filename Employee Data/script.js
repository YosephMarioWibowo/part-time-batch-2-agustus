function changePageTo(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();

/*var data = [
    {
        nik : 1234567890,
        name : "Yoseph",
        placebirth : "Malang",
        birthday : "1992-11-21",
        gender : "Male",
        bloodtype : "O",
        address : "Jl. Raden Intan no.54",
        rt : 1,
        rw : 4,
        urbanvillage : "Arjosari",
        subdistrict : "Blimbing",
        religion : "Catholic",
        maritalstatus : "Married",
        profession : "Employee",
        nationality : "Indonesian",
        division : "Maintenance"
    }
]*/


 
function show() {
    var table = document.getElementById("table");
    table.innerHTML = "<tr><th>No</th>"+
    "<th>NIK</th>"+
    "<th>Name</th>"+
    "<th>Place birth</th>"+
    "<th>Birthday</th>"+
    "<th>Gender</th>"+
    "<th>Blood type</th>"+
    "<th>Address</th>"+
    "<th>RT</th>"+
    "<th>RW</th>"+
    "<th>Urban village</th>"+
    "<th>Subdistrict</th>"+
    "<th>Religion</th>"+
    "<th>Marital status</th>"+
    "<th>Profession</th>"+
    "<th>Nationality</th>"+
    "<th>Division</th></tr>";
    for (let i = 0; i < data.length; i++) {
        //var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        //var btnDiscard = "<button class='btn-discard' href='#' onclick='discard(" + i + ")'>Discard</button>";
        j = i + 1;
        table.innerHTML += "<tr><td>"+j+"</td>"+
        "<td>"+data[i].nik+"</td>"+
        "<td>"+data[i].name+"</td>"+
        "<td>"+data[i].placebirth+"</td>"+
        "<td>"+data[i].birthday+"</td>"+
        "<td>"+data[i].gender+"</td>"+
        "<td>"+data[i].bloodtype+"</td>"+
        "<td>"+data[i].address+"</td>"+
        "<td>"+data[i].rt+"</td>"+
        "<td>"+data[i].rw+"</td>"+
        "<td>"+data[i].urbanvillage+"</td>"+
        "<td>"+data[i].subdistrict+"</td>"+
        "<td>"+data[i].religion+"</td>"+
        "<td>"+data[i].maritalstatus+"</td>"+
        "<td>"+data[i].profession+"</td>"+
        "<td>"+data[i].nationality+"</td>"+
        "<td>"+data[i].division+"</td></tr>";
    }
}

function add() {
    var inputNik = document.getElementById("input-nik");
    var inputName = document.getElementById("input-name");
    var inputPlacebirth = document.getElementById("input-placebirth");
    var inputBirthday = document.getElementById("input-birthday");
    var inputGender = document.getElementById("input-gender");
    var inputBloodtype = document.getElementById("input-bloodtype");
    var inputAddress = document.getElementById("input-address");
    var inputRt = document.getElementById("input-rt");
    var inputRw = document.getElementById("input-rw");
    var inputUrbanvillage = document.getElementById("input-urbanvillage");
    var inputSubdistrict = document.getElementById("input-subdistrict");
    var inputReligion = document.getElementById("input-religion");
    var inputMaritalstatus = document.getElementById("input-maritalstatus");
    var inputProfession = document.getElementById("input-profession");
    var inputNationality = document.getElementById("input-nationality");
    var inputDivision = document.getElementById("input-division");
 
    localStorage.setItem("input-nik", inputNik.value);
    localStorage.setItem("input-name", inputName.value);
    localStorage.setItem("input-placebirth", inputPlacebirth.value);
    localStorage.setItem("input-birthday", inputBirthday.value);
    localStorage.setItem("input-gender", inputGender.value);
    localStorage.setItem("input-bloodtype", inputBloodtype.value);
    localStorage.setItem("input-address", inputAddress.value);
    localStorage.setItem("input-rt", inputRt.value);
    localStorage.setItem("input-rw", inputRw.value);
    localStorage.setItem("input-urbanvillage", inputUrbanvillage.value);
    localStorage.setItem("input-subdistrict", inputSubdistrict.value);
    localStorage.setItem("input-religion", inputReligion.value);
    localStorage.setItem("input-maritalstatus", inputMaritalstatus.value);
    localStorage.setItem("input-profession", inputProfession.value);
    localStorage.setItem("input-nationality", inputNationality.value);
    localStorage.setItem("input-division", inputDivision.value);
    
    data.push({
        nik : inputNik.value,
        name : inputName.value,
        placebirth : inputPlacebirth.value,
        birthday : inputBirthday.value,
        gender : inputGender.value,
        bloodtype : inputBloodtype.value,
        address : inputAddress.value,
        rt : inputRt.value,
        rw : inputRw.value,
        urbanvillage : inputUrbanvillage.value,
        subdistrict : inputSubdistrict.value,
        religion : inputReligion.value,
        maritalstatus : inputMaritalstatus.value,
        profession : inputProfession.value,
        nationality : inputNationality.value,
        division : inputDivision.value})

    show();
    inputNik.value = "";
    inputName.value = "";
    inputPlacebirth.value = "";
    inputBirthday.value = "";
    inputGender.value = "";
    inputBloodtype.value = "";
    inputAddress.value = "";
    inputRt.value = "";
    inputRw.value = "";
    inputUrbanvillage.value = "";
    inputSubdistrict.value = "";
    inputReligion.value = "";
    inputMaritalstatus.value = "";
    inputProfession.value = "";
    inputNationality.value = "";
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