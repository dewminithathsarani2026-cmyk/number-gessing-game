// console.log("hello js");

// ----------- DOM (document object model) -----------

// let title = document.getElementById("title");
// console.log(title);

// title.innerText = "Pawara ";


// const userDetails=[];
// function btnSubmitOnAction(){
    
//     let txtEmail= document.getElementById("txtEmail").value;
//     let txtPassword= document.getElementById("txtPassword").value;

//     // console.log(txtEmail);
//     // console.log(txtPassword);

//     let User = {
//         email: txtEmail,
//         password: txtPassword
//     }

//     userDetails.push(User);
//     console.log(userDetails);      
// }


let customerList = [];
function addCustoemrOnAction(){
   let txtName = document.getElementById("txtName").value;
   let txtAddress = document.getElementById("txtAddress").value;
   let txtAge = document.getElementById("txtAge").value;
   let txtEmail = document.getElementById("txtEmail").value;
   let txtSalary = document.getElementById("txtSalary").value;

   let customer ={
         name: txtName,
         address: txtAddress,
         age: txtAge,
         email: txtEmail,
         salary: txtSalary
   }
   customerList.push(customer);
   console.log(customerList);
   loadTableOnAction()
}

// function loadTableOnAction(){
//    let tblCustomer = document.getElementById("tblCustomer");

//    tblCustomer.innerHTML += `
//           <tr>
//             <td>kamal</td>
//             <td>Galle</td>
//             <td>25</td>
//             <td>saman@gmail.com</td>
//             <td>50000</td>
//         </tr>`

//         console.log(customerList);
        
// }

// function loadTableOnAction(){
//    let tblCustomer = document.getElementById("tblCustomer");
//    let body = "";
//    for(let i=0; i<customerList.length; i++){
//     body += `
//           <tr>
//             <td>${customerList[i].name}</td>
//             <td>${customerList[i].address}</td>
//             <td>${customerList[i].age}</td>
//             <td>${customerList[i].email}</td>
//             <td>${customerList[i].salary}</td>
//         </tr>`
//    }
//         tblCustomer.innerHTML = body;
// }



let randomNumber = Math.floor(Math.random() *10 +1);
console.log(randomNumber);