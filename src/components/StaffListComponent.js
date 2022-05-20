import React, { useState } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import "../index.css";
import { Link } from "react-router-dom";

function RenderStaffList( {Staff} ) {
  //render  list staff with image and name;
  return (
    <Card>
      <Link to={`${Staff.id}`}>
        <CardImg src={Staff.image} alt={Staff.image} />
        <CardTitle style={{ textAlign: "center" }}>{Staff.name}</CardTitle>
      </Link>
    </Card>
  );
}

const StaffList = (props, iStaffs) => {
  // getvalue search Name
  //params : iStaff
  const [searchName, setSearchName] = useState("");
  const mySearch = () => {
    setSearchName(document.getElementById("SearchName").value);
  };
  if (searchName === "") {
    iStaffs = props.Staffs;
  } else {
    iStaffs = props.Staffs.filter((iStaff) => iStaff.name === searchName);
  }

  //Defragment
  const [Defragment, setDefragment] = useState(""); 
  const myDefragment = () => {

    setDefragment(document.getElementById("Defragment-select").value);
  
  };

const DepartmentContainer = props.Departments.map((departmentItem) => {
  
  const Staffs = iStaffs.filter(iStaff => iStaff.department.name == departmentItem.name)
      if (Defragment === "Defragment") {



        return(

          <div className="row"  style={{border: "1px solid black" }}>
            <div
              key={departmentItem.id}
              className="col-sm-12 col-md-3 col-xl-2"
              style={{ padding: 1 + "em", 
                      backgroundColor: "#1e90ff", 
                      border: "1px solid black", 
                      fontSize: 1 + "em", 
                      textAlign:"center",
                      width: "100%"}}>
              {departmentItem.name}
            </div>
              <div className="row">
              {Staffs.map((Staff) => {
                  return(
                  <div 
                  key={Staff.id}
                  className="col-sm-12 col-md-3 col-xl-2"
                  style={{ padding: 1 + "em", border: "1px solid black" }} >
                  <RenderStaffList Staff={Staff} />
                </div>)})}
                </div>
          </div>
          )
      }

      else {
    return (
      Staffs.map(Staff => {
        return(
            <div
              key={Staff.id}
              className="col-sm-6 col-md-4 col-xl-2"
              style={{ padding: 1 + "em" }}>
              <RenderStaffList Staff={Staff} />
            </div>
        )

          
        }))}})

      

  
  //can xu ly o day

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 style={{ width: 50 + "%" }}>Nhân Viên</h2>
        <div className="input-group" style={{ width: 50 + "%" }}>
          <input
            id="SearchName"
            type="text"
            className="form-control rounded col-sm-9 col-md-10 col-xl-10"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            className="btn btn-outline-primary col-sm-3 col-md-2 col-xl-2"
            style={{ backgroundColor: "none" }}
            onClick={mySearch}
          >
            search
          </button>
        </div>
      </div>
      <hr />
      <div  className="row">
      <select className="form-select" id="Defragment-select" style={{margin: '0px', width: '80%'}} >
        <option value="Default">None Defragment</option>
        <option value="Defragment">Defragment with Deparment</option>
      </select>
      <button
        type="button"
        className="btn btn-primary"
        style={{margin: '0px', width: '20%'}}
        onClick={myDefragment}
      >        Submit
      </button>
      </div>
      <div className="row">{DepartmentContainer}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );
};

export default StaffList;
