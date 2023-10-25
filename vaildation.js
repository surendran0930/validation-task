// // let val;
let output = document.getElementById("datas")

const datas = (data) => {
  data.map((data) => {
    output.innerHTML += `<div class="main_card">
    <div>
        <img src="./img/Rectangle 1965.png" alt="net-flix">
    </div>
    
    <div class="content_cards flex">
    
        <div>
            <p>${data.applyType}</p>
            <p>${data.companyName}</p>
            <p>${data.industry},${data.location}</p>
        </div>
        <div class="content_sec_divs flex">
            <div>
                <p>Part-Time (9.00 am - 5.00 pm IST)</p>
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
    </div>`


  })

}


document.addEventListener("DOMContentLoaded", function () {

  async function fetchapi(url) {
    let data = await fetch(url)
    let response = await data.json()
    datas(response)
    console.log(response);
  }

  fetchapi('https://6530d94e6c756603295f269f.mockapi.io/jobs')
  // fetchapi('https://6530d94e6c756603295f269f.mockapi.io/')

})

function popup() {
  document.getElementById("addForm").classList.remove("hide");
  document.getElementById("addForm").classList.add("show");
  // addForm

  document.getElementById("datas").style.display = "none"
  // document.getElementById("addForm").style.display = "block"

}

// function allow() {
//   document.getElementById("addForm").classList.remove("show");
//   document.getElementById("addForm").classList.add("hide");
// }

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
  let checkValues =errThrough();

  if(checkValues==true){
console.log("something wromg")
  }else{
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

    async function postData(url = "https://6530d94e6c756603295f269f.mockapi.io/jobs") {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postDatas)
      });
  
      return await response.json();
    }
      postData()
      document.getElementById("datas").style.display = "grid";
      document.getElementById("addForm").classList.remove("show");
      document.getElementById("addForm").classList.add("hide");
  
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

function errThrough() {
  // debugger
  let contact = document.querySelector("input[name='contact']:checked");
  let check = false;
  if (jobTitle.value == null || jobTitle.value == "") {
    document.getElementById("jobTittleErr").innerHTML = "Enter Job Tittle ";
    check = true
  }
  if (companyName.value == null || companyName.value == "") {
    document.getElementById("companyErr").innerHTML = "Enter Job CompanyName ";
    check = true
  }
  if (industry.value == null || industry.value == "") {
    document.getElementById("industryErr").innerHTML = "Enter  industry Name ";
    check = true
  }
  if (locations.value == null || locations.value == "") {
    document.getElementById("locationErr").innerHTML = "Enter Location ";
    check = true
  }
  if (remoteType.value == null || remoteType.value == "") {
    document.getElementById("remoteTypeErr").innerHTML = "Enter Remote Type ";
    check = true
  }
  if (minimunm.value == null || minimunm.value == "") {
    document.getElementById("minimunmErr").innerHTML = "Enter Min Experience ";
    check = true
  }
  if (maximum.value == null || maximum.value == "") {
    document.getElementById("maximumErr").innerHTML = "Enter Max Experience ";
    check = true
  }
  if (sal_min.value == null || sal_min.value == "") {
    document.getElementById("salaryMinErr").innerHTML = "Enter Min Salary ";
    check = true
  }
  if (sal_max.value == null || sal_max.value == "") {
    document.getElementById("salaryMaxErr").innerHTML = "Enter Max Salary ";
    check = true
  }
  if (totalEmployee.value == null || totalEmployee.value == "") {
    document.getElementById("totalEmployeeErr").innerHTML = "Enter Total Employee ";
    check = true
  }
  if (contact === null) {
    document.getElementById("contactChoice1Err").innerHTML = "Enter Apply Type ";
    check = true
  }
  return check
}


