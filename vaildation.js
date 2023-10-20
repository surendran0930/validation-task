// // let val;
let output = document.getElementById("datas")

const datas=(data)=>{
    data.map((data)=>{

    //     output.innerHTML +=`<div>

    //     <img src="./img/Rectangle 1965.png" alt="net-flix">
    //           <h4>${data.applyType}</h4>
    //           <p>${data.companyName}</p>
    //          <p>${data.industry},${data.location}</p>
    //          <p>Part-Time (9.00 am - 5.00 pm IST)</p>
    //          <p>Experience (${data.minimumExperience} - ${data.maximumExperience} years)</p>
    //          <p>INR (₹) ${data.minimumSalary} - ${data.maximumSalary}/ Month</p>
    //          <p>${data.totalEmployee} employees</p>

    //          <p id="helo"></p>

    //       <button>Apply Now</button>
    //   </div>`

    output.innerHTML +=`<div class="main_card">
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


document.addEventListener("DOMContentLoaded",function(){

 async function fetchapi(url){
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
}

function allow() {
  document.getElementById("addForm").classList.remove("show");
  document.getElementById("addForm").classList.add("hide");
}

getInuptValue = document.getElementById("forms");

getInuptValue.addEventListener("submit", (event) => {
  event.preventDefault();
  let jobTitle = document.getElementById("jobTitle").value;
  let companyName = document.getElementById("companyName").value;
  let industry = document.getElementById("industry").value;
  let location = document.getElementById("location").value;
  let remoteType = document.getElementById("remoteType").value;
  let minimunm = document.getElementById("minimunm").value;
  let maximum = document.getElementById("maximum").value;
  let sal_min = document.getElementById("sal_min").value;
  let sal_max = document.getElementById("sal_max").value;
  let totalEmployee = document.getElementById("totalEmployee").value;
  let contactChoice1 = document.getElementById("contactChoice1").value;
  let contactChoice2 = document.getElementById("contactChoice2").value;

  console.log("hi");
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
    totalEmployee,
    contactChoice1,
    contactChoice2
  );

  const postDatas = {
    applyType: jobTitle,

    companyName: companyName,
    industry: industry,
    location: location,

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

  document.getElementById("addForm").classList.remove("show");
  document.getElementById("addForm").classList.add("hide");
});

// // function postData(){
// //     const response = fetch()
// // }
