// import React from "react";
// import SMButton from "./Components/SMButton";
// import SMCard from "./Components/SMCard";
// import SMSelect from "./Components/SMSelect";
// import SMTable from "./Components/SMTable";
// import SMInput  from "./Components/SMInput";


// BUTTON COMPONENT
// let add = ()=>{
//       console.log('Task Added');
//     }
//     let del = ()=>{
//           console.log('Task Deleted');
//         }
//         function App(){
//  return (
//       <>
//         <div>
//      <h1>HEllO WORLD</h1>
//       <SMButton buttonClick = {add} val = "Add Task"/>
//       <SMButton buttonClick = {del} val = "Del Task"/>
// </div>
// </>
// )}

// INPUT COMPONENT
// function App(){
  
// let func = ()=>{
//   console.log("Hello World");
// }
//     return <>
//         <SMInput inpType = "text" inpChange = {func} inpPlaceholder = "Enter Anything"/>
//         <SMInput inpType = "password"/>
//         <SMInput inpType = "file" />
   
    
//     </>
// }


// CARD COMPONENT
// function App(){
  
//   let studentData = [{
//     id:1,
//     name: 'Muneim',
//     fatherName: 'Asif',
//     education: 'Inter',
//     isApproved: true,
//   },
//     {id:2,
//     name: 'Danyal',
//     fatherName: 'Kareem',
//     education: 'Graduate',
//     isApproved: true,
//   },  
//     {id:3,
//     name: 'Fahad',
//     fatherName: 'Jamil',
//     education: 'Inter',
//     isApproved: false,
//   },
//   ]


  
// return (
//   studentData.map((x,i)=>
//    <SMCard studentId = {x.id} studentName = {x.name} studentFname = {x.fatherName} studentEdu = {x.education} studentIsApproved = {x.isApproved}/>)
// )
// }


// SELECT COMPONENT
// function App() {
//     let mobile = [
//     {
//         RAM: '3GB',
//         ROM: '32GB'

//     },

//     {

//         RAM: '6GB',
//         ROM: '128GB'

//     },

//     {
//         RAM: '4GB',
//         ROM: '64GB'
//     }
//     ,

// ]
// let changeSelect = ()=>{
//     alert ('Model Changed')
// }
//     return (
//         mobile.map((x, i) =>  <SMSelect key={i} selectChange = {changeSelect} val1={x.RAM} val2={x.ROM} />
         
//         )
//     )
// }


// TABLE COMPONENT
// function App (){

//   let tableData = [
//     {
//       id:1,
//       name : 'Hussain',
//       fName: 'Aftab',
//       class:10,
//       idCard:true
//     },

//     {
//       id:2,
//       name : 'Hassan',
//       fName: 'Aftab',
//       class:10,
//       idCard:true
//     },

//     {
//       id:3,
//       name : 'Hasnain',
//       fName: 'Aftab',
//       class:10,
//       idCard:false
//     },

//   ]


//   return (
//     tableData.map((x,i)=> <SMTable key={i} name = {x.name} class = {x.class} fName = {x.fName} id = {x.id} idCard = {x.idCard}/>
//     )
//   )
// }
export default App;
