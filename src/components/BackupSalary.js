// import React from "react";
// import { Card } from "reactstrap";
// import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import { Link } from "react-router-dom";


// //Search Bar in page
// function SearchBar(){
//   return(
//   <div className="input-group" style={{width: 50 + '%'}}>
// <input id="SearchName" type="text" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
// <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"none"}} onClick= {mySearch}>search</button>
// </div>)
// }

// //add comman to Money
// function formatMoney(n) {

//   return   (Math.round(n * 100) / 100).toLocaleString()+ "VND ";
// }

//   function Salary(props){

//     const staf = props.Staffs.map((Staff) => {
//       return (
//           <div key={Staff.id}  className="col-sm-12 col-md-6 col-xl-4" style={{padding: 1 + "rem"}}>
//               <Card  style={{padding: 0.4 + "rem",  backgroundImage: "linear-gradient(#0dcaf0 20%, #f8f9fa 20%"}}>
//               <Link to={`/Nhanvien/${Staff.id}`} style={{ textDecoration: "none", color:"black"}}>
//                   <h4 style={{ textAlign: "center"}}>{Staff.name}</h4>
//                   </Link>
//                   <p> Mã Nhân Viên : {Staff.id}</p>
//                   <p> Hệ số lương: {Staff.salaryScale}</p>
//                   <p> Số ngày làm thêm: {Staff.overTime} </p>
//                   <label style={{backgroundColor:'#e3e3e3', border:'1px solid black', borderRadius:10+"px", textAlign: 'center', fontSize:22+"px"}}> 
//                     Lương: ({formatMoney(parseInt(Staff.salaryScale)*3000000+parseInt(Staff.overTime)*200000)})
//                     </label>
                  
//               </Card>
//             </div>
//           );
//           }); 
          
//     return (
//       <div className="container-fluid">
          
//       <div className="row">
//         <Breadcrumb style={{width: 50 + "%"}}>
//           <BreadcrumbItem>
//             <Link to='Nhanvien'>Nhân Viên</Link>
//           </BreadcrumbItem>
//           <BreadcrumbItem active> Bảng Lương</BreadcrumbItem>
//         </Breadcrumb>
//         <SearchBar/>
//       </div>

//       <hr/>
//           <div className="row" >
//             {staf}
//           </div>

//       </div>
//     );
  
// }


// function mySearch(x){
//   x = document.getElementById("SearchName").value;
//   if (x===""){
//       console.log("null")
//   }
//   else{
//       console.log(x)
//   }
//   return x;
// }



// export default Salary;
