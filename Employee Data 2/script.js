function changePageTo(pageName,elmnt,color) { //ganti page
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

var dataList = localStorage.dataList ? JSON.parse(localStorage.dataList) : []
var dataList = []
const el = (el) => {
    return document.querySelector(el)
}
const saveLS = (obj,cb) => {
    dataList.push(obj)
    console.log(dataList);
    localStorage.setItem("dataList",JSON.stringify(dataList))
    cb()
}
const saveData = () => {
    const nik = el("input[name=nik]").value
    const name = el("input[name=name]").value
    const placebirth = el("input[name=placebirth]").value
    const birthday = el("input[name=birthday]").value
    const gender = el("input[name=gender]").value
    const bloodtype = el("input[name=bloodtype]").value
    const address = el("input[name=address]").value
    const rt = el("input[name=rt]").value
    const rw = el("input[name=rw]").value
    const urbanvillage = el("input[name=urbanvillage]").value
    const subdistrict = el("input[name=subdistrict]").value
    const religion = el("input[name=religion]").value
    const maritalstatus = el("input[name=maritalstatus]").value
    const profession = el("input[name=profession]").value
    const nationality = el("input[name=nationality]").value
    const division = el("select#input-division").value
    saveLS({nik, name, placebirth, birthday, gender, 
        bloodtype, address, rt, rw, urbanvillage, 
        subdistrict, religion, maritalstatus, profession,
        nationality, division}, () => {
        listUser()
        listUserdivision()   
    })
}

const listUser = () => {
    //let rows ="";
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
    for (let i = 0; i < dataList.length; i++) {
        const user = dataList[i];
        /*rows += `
            <tr>
                <td>${i+1}</td>
                <td>${user.nik}</td>
                <td>${user.name}</td>
            </tr>
        `*/
        j = i + 1;
        table.innerHTML += "<tr><td>"+j+"</td>"+
        "<td>"+dataList[i].nik+"</td>"+
        "<td>"+dataList[i].name+"</td>"+
        "<td>"+dataList[i].placebirth+"</td>"+
        "<td>"+dataList[i].birthday+"</td>"+
        "<td>"+dataList[i].gender+"</td>"+
        "<td>"+dataList[i].bloodtype+"</td>"+
        "<td>"+dataList[i].address+"</td>"+
        "<td>"+dataList[i].rt+"</td>"+
        "<td>"+dataList[i].rw+"</td>"+
        "<td>"+dataList[i].urbanvillage+"</td>"+
        "<td>"+dataList[i].subdistrict+"</td>"+
        "<td>"+dataList[i].religion+"</td>"+
        "<td>"+dataList[i].maritalstatus+"</td>"+
        "<td>"+dataList[i].profession+"</td>"+
        "<td>"+dataList[i].nationality+"</td>"+
        "<td>"+dataList[i].division+"</td></tr>";
    }
}

const listUserdivision = () => {
    var tabledivision = document.getElementById("tabledivision");
    tabledivision.innerHTML = "<tr><th>No</th>"+
    "<th>NIK</th>"+
    "<th>Name</th>"+
    "<th>Division</th>"+
    "<th>Action</th></tr>";
    for (let i = 0; i < dataList.length; i++) {
        var btnchange = "<button class='btn-change' href='#' onclick='change(" + i + ")'>Change</button>";
        var btndiscard = "<button class='btn-discard' href='#' onclick='discard(" + i + ")'>Discard</button>";
        const user = dataList[i];
        j = i + 1;
        tabledivision.innerHTML += "<tr><td>"+j+"</td>"+
        "<td>"+dataList[i].nik+"</td>"+
        "<td>"+dataList[i].name+"</td>"+
        "<td>"+dataList[i].division+"</td>"+
        "<td>"+btnchange+ " "+ btndiscard +"</td></tr>";
        
    }
}

/*function change(id) {
    var prompDivision;
    prompDivision = prompt("Division",dataList[id].division);
    dataList[id].division = prompDivision;
}*/

function discard() {
    var r = confirm("Are you sure?");
    if (r == true) {
        localStorage.removeItem("dataList");
    }
}

var division_array = [{
    Production : 'Production',
    Marketing : 'Marketing',
    PPIC : 'PPIC',
    Accounting : 'Accounting',
    Purchasing : 'Purchasing',
    Maintenance : 'Maintenance',
    HRGA : 'HRGA',
    EDP : 'EDP'
}];

function preadddivision() {
    var select = document.getElementById("input-division");
    select.innerHTML="";
        for(index in division_array) {
    select.options[select.options.length] = new Option(division_array[index], index);
    }
}

preadddivision();
function adddivision() {
    var x = document.getElementById("selectdivisionlist");
    var option = document.createElement("option");
    option.text = el("input[name=newdivision]").value;
    x.add(option); 

    newdivision = document.getElementById('input-newdivision').value;
    //division_array.push(newdivision);
    division_array [newdivision] = newdivision
    preadddivision();
}

//document.querySelectorAll("input[name='input-gender']")[0].checked
//document.querySelector("select#input-division").value