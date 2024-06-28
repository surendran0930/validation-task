// // let val;

document.addEventListener("DOMContentLoaded", function () {
  async function fetchapi(url) {
    let data = await fetch(url);
    let response = await data.json();
    datas(response);
    console.log(response);
  }

  fetchapi("https://6530d94e6c756603295f269f.mockapi.io/jobs");
  // fetchapi('https://6530d94e6c756603295f269f.mockapi.io/')
});

let output = document.getElementById("datas");

const datas = (data) => {
  data.map((data) => {
    output.innerHTML += `<div class="main_card">
    <div  class=" ">
        <img src="./img/Rectangle 1965.png" alt="net-flix">
    </div>
    
    <div class="content_cards flex">
    
        <div>
            <p>${data.applyType}</p>
            <p>${data.companyName}</p>
            <p class="third_data">${data.industry},${data.location}</p>
        </div>
        <div class="content_sec_divs flex">
            <div>
                <p>${data.remoteType} (9.00 am - 5.00 pm IST)</p>
            </div>
            <div>
                <p>Experience (${data.minimumExperience} - ${data.maximumExperience} years)</p>
            </div>
            <div>
                <p>INR (₹) ${data.minimumSalary} - ${data.maximumSalary}/ Month</p>
            </div>
            <div>
                <p>${data.totalEmployee} employees</p>
            </div>
       
        </div>
        <div>
            <button class="card_btn">Apply Now</button>
        </div>
    
    </div>
    </div>`;
  });
};

function popup() {
  document.getElementById("addForm").classList.remove("hide");
  document.getElementById("addForm").classList.add("show");
  document.querySelector(".header_datas").style.opacity = 0.5
  // addForm

  // document.getElementById("datas").style.display = "none"
  // document.getElementById("addForm").style.display = "block"
}

//  close_button = document.getElementById("close_btn")
document.getElementById("close_btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("addForm").classList.remove("show");
  document.getElementById("addForm").classList.add("hide");
  document.querySelector(".header_datas").style.opacity = 1
  // document.getElementById("addForm").classList.remove("hide");
  // document.getElementById("addForm").classList.add("show");
  // popup()
  console.log("hi");
});

getInuptValue = document.getElementById("forms");

getInuptValue.addEventListener("submit", (event) => {
  // debugger
  event.preventDefault();
  // document.getElementById("name_btnn").style.display = "none";

  let jobTitle = document.getElementById("jobTitle").value;
  let companyName = document.getElementById("companyName").value;
  let industry = document.getElementById("industry").value;
  let locations = document.getElementById("locations").value;
  let remoteType = document.getElementById("remoteType").value;
  let minimunm = document.getElementById("minimunm").value;
  let maximum = document.getElementById("maximum").value;
  let sal_min = document.getElementById("sal_min").value;
  let sal_max = document.getElementById("sal_max").value;
  let totalEmployee = document.getElementById("totalEmployee").value;
  let contact = document.querySelector("input[name='contact']");
  // let contactChoice2 = document.getElementById("contactChoice2").value;
  let checkValues = errThrough();

  if (checkValues == true) {
    console.log("something wromg");
  } else {
    // validateString()

    const postDatas = {
      applyType: jobTitle,

      companyName: companyName,
      industry: industry,
      location: locations,

      maximumExperience: maximum,
      maximumSalary: sal_max,

      minimumExperience: minimunm,

      minimumSalary: sal_min,

      remoteType: remoteType,

      totalEmployee: totalEmployee,
    };
    console.log(postDatas);

    async function postData(
      url = "https://6530d94e6c756603295f269f.mockapi.io/jobs"
    ) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postDatas),
      });

      return await response.json();
    }
    postData();
    document.getElementById("datas").style.display = "grid";
    document.getElementById("addForm").classList.remove("show");
    document.getElementById("addForm").classList.add("hide");
  document.querySelector(".header_datas").style.opacity = 1

  }
  // console.log("hi");
  console.log(
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    minimunm,
    maximum,
    sal_min,
    sal_max,
    totalEmployee
  );

  // document.getElementById("addForm").style.display = "none"

  // document.getElementById("datas").value=""
  // valueEmpty()
});

// // function postData(){
// //     const response = fetch()
// // }

function errThrough(minMax) {
  // debugger
  let contact = document.querySelector("input[name='contact']:checked");
  let check = false;
  let letters = /^[A-Za-z]+$/;

  console.log(jobTitle.value, "just check ");

  //empty string error values
  if (jobTitle.value == null || jobTitle.value == "") {
    document.getElementById("jobTittleErr").innerHTML = "Enter Job Tittle ";
    check = true;
  }
  // } else if (jobTitle.value != letters) {
  //   console.log("hai hello");
  //   document.getElementById("jobTittleErr").innerHTML = "Enter String only ";
  //   check = true

  // }
  else {
    document.getElementById("jobTittleErr").innerHTML = " ";
    // check = true
  }
  // if(jobTitle.value ===regex){
  //   console.log("this is working")
  // }

  if (companyName.value == null || companyName.value == "") {
    document.getElementById("companyErr").innerHTML = "Enter Job CompanyName ";
    check = true;
  } else {
    document.getElementById("companyErr").innerHTML = "";
  }

  if (industry.value == null || industry.value == "") {
    document.getElementById("industryErr").innerHTML = "Enter  industry Name ";
    check = true;
  } else {
    document.getElementById("industryErr").innerHTML = "";
  }

  if (locations.value == null || locations.value == "") {
    document.getElementById("locationErr").innerHTML = "Enter Location ";
    check = true;
  } else {
    document.getElementById("locationErr").innerHTML = "";
  }

  if (remoteType.value == null || remoteType.value == "") {
    document.getElementById("remoteTypeErr").innerHTML = "Enter Remote Type ";
    check = true;
  } else {
    document.getElementById("remoteTypeErr").innerHTML = "";
  }

  if (minimunm.value == null || minimunm.value == "") {
    document.getElementById("minimunmErr").innerHTML = "Enter Min Experience ";
    check = true;
  } else {
    document.getElementById("minimunmErr").innerHTML = "";
  }

  if (maximum.value == null || maximum.value == "") {
    document.getElementById("maximumErr").innerHTML = "Enter Max Experience ";
    check = true;
  } else if (minimunm.value > maximum.value) {
    document.getElementById("maximumErr").innerHTML =
      "Enter valuable Experience ";
    check = true;
  } else {
    document.getElementById("maximumErr").innerHTML = " ";
  }

  if (sal_min.value == null || sal_min.value == "") {
    document.getElementById("salaryMinErr").innerHTML = "Enter Min Salary ";
    check = true;
  } else {
    document.getElementById("salaryMinErr").innerHTML = "";
  }
  // debugger

  if (sal_max.value == null || sal_max.value == "") {
    document.getElementById("salaryMaxErr").innerHTML = "Enter Max Salary ";
    check = true;
  } else if (sal_min.value > sal_max.value) {
    console.log("condtion worked");
    document.getElementById("salaryMaxErr").innerHTML =
      "Enter Greater than min value  ";
    check = true;
  }
  // }else if(sal_max.value < sal_min.value){
  //   document.getElementById("salaryMinErr").innerHTML = "Enter less than max value  "
  //   check = true
  // }
  else {
    document.getElementById("salaryMaxErr").innerHTML = " ";
    // check = true
  }

  if (totalEmployee.value == null || totalEmployee.value == "") {
    document.getElementById("totalEmployeeErr").innerHTML =
      "Enter Total Employee ";
    check = true;
  } else {
    document.getElementById("totalEmployeeErr").innerHTML = "";
  }

  if (contact === null) {
    document.getElementById("contactChoice1Err").innerHTML =
      "Enter Apply Type ";
    check = true;
  } else {
    document.getElementById("contactChoice1Err").innerHTML = "";
  }

  return check;
}

// job tittle input box

let jobTitle = document.getElementById("jobTitle");

function inputVal1(e) {
  // console.log("hello",e.target.value);
  result = e.target.value;

  const val = result.replace(/[^A-Za-z]/g, "");
  // var letters = /^[A-Za-z]+$/;
  console.log(val, "val");
  jobTitle.value = val;
}
jobTitle.addEventListener("input", inputVal1);

// companyName input box
let companyName = document.getElementById("companyName");

function inputVal2(e) {
  // console.log("hello",e.target.value);
  result = e.target.value;

  const val = result.replace(/[^A-Za-z]/g, "");
  // var letters = /^[A-Za-z]+$/;
  console.log(val, "val");
  companyName.value = val;
}
companyName.addEventListener("input", inputVal2);

// industry input box
let industry = document.getElementById("industry");

function inputVal3(e) {
  // console.log("hello",e.target.value);
  result = e.target.value;

  const val = result.replace(/[^A-Za-z]/g, "");
  // var letters = /^[A-Za-z]+$/;
  console.log(val, "val");
  industry.value = val;

  //   if(!letters.test(result)){
  // console.log("entervalue values")
  //   }
}
industry.addEventListener("input", inputVal3);

// locations input box
let locations = document.getElementById("locations");
locations.addEventListener("input", (e) => {
  result = e.target.value;

  const val = result.replace(/[^A-Za-z]/g, "");
  // var letters = /^[A-Za-z]+$/;
  console.log(val, "val");
  locations.value = val;
});

// remoteType input box
let remoteType = document.getElementById("remoteType");
remoteType.addEventListener("input", (e) => {
  result = e.target.value;

  const val = result.replace(/[^A-Za-z]/g, "");
  // var letters = /^[A-Za-z]+$/;
  console.log(val, "val");
  remoteType.value = val;
});
