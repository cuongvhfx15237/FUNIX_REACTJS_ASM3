import React, { useState, useEffect } from "react";
import { Card, CardImg, CardTitle, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter, FormFeedback } from "reactstrap";
import "../index.css";
import { Link } from "react-router-dom";
import { Button, Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StaffList(props, iStaffs, submitForm) {
  const [modalAdd, setModalAdd] = useState(false);
  const toggle1 = () => setModalAdd(!modalAdd);

  const [name, setName]= useState("");
  const [doB, setDoB]= useState("");
  const [startDate, setStartDate]= useState("");
  const [department, setDepartment]= useState("Sale");
  const [salaryScale, setSalaryScale]= useState("1");
  const [annualLeave, setAnnualLeave]= useState("0");
  const [overTime, setOverTime]= useState("0");
  const [image, setImage] = useState("/assets/images/alberto.png");
  const [touched, setTouched] = useState({
              name: false,
              doB: false,
              startDate: false,
              salaryScale: false,
              department: false,
              annualLeave: false,
              overTime: false,
  })
  function handleBlur(field){
  
      setStartDate({
        touched: {...touched, [field]: true}
      })

  }
  function handleInputChange(event){
    const target=event.target;
    const value=target.value;
    const name=target.name;
    setStartDate({
      [name]: value
    })

  }
  function handleSubmit(){
    const newStaff = {
      name: name,
      doB: doB,
      startDate: startDate,
      department: department,
      salaryScale: salaryScale,
      annualLeave: annualLeave,
      overTime: overTime,
      image: image
    }
    // onAdd
  }
 function validate(name, doB, startDate, department, salaryScale, annualLeave, overTime){
   const errors = {
     name:"",
     doB:"",
     startDate:"",
     department:"",
     salaryScale:"",
     annualLeave:"",
     overTime:"",
   };
   if (touched.name && name.length <3){
   errors.name = "name should be >=3 chars";}
  else if ( touched.name && name.length>50){
  errors.name = " name should be <= 50 chars";}
  if (touched.department && department.length <1){
  errors.department = "Vui lòng nhập thông tin"}
  if (touched.salaryScale && salaryScale.length <1){
  errors.salaryScale = "Vui lòng nhập thông tin"}
  if (touched.annualLeave && annualLeave.length <1){
  errors.annualLeave = "Vui lòng nhập thông tin"}
  if (touched.overTime && overTime.length <1){
  errors.overTime = "Vui lòng nhập thông tin"}
  if (touched.startDate && startDate.length <1){
  errors.startDate = "Vui lòng nhập thông tin"}
  if (touched.doB && doB.length <1){
  errors.doB = "Vui lòng nhập thông tin";}
  return errors;
  }

  function RenderStaffList({ Staff }) {
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

  // getvalue search Name
  //params : iStaff
  const [searchName, setSearchName] = useState("");
  const mySearch = () => {
    setSearchName(document.getElementById("SearchName").value);
  };
  if (searchName === "") {
    iStaffs = props.Staffs;
  } else {
    iStaffs = props.Staffs.filter(
      (iStaff) => iStaff.name.match(eval("/" + searchName + "/gi")) != null
    );
  }

  //Defragment
  const [Defragment, setDefragment] = useState("");
  const myDefragment = () => {
    setDefragment(document.getElementById("Defragment-select").value);
  };
  const DepartmentContainer = props.Departments.map((departmentItem) => {
    const Staffs = iStaffs.filter(
      (iStaff) => iStaff.department.name == departmentItem.name
    );
    if (Defragment === "Defragment") {
      return (
        <div
          className="row"
          style={{
            margin: "inherit",
            padding: "0px",
            border: "1px solid black",
          }}
          key={departmentItem.id}
        >
          <div
            
            className="col-sm-12 col-md-3 col-xl-2"
            style={{
              padding: 1 + "em",
              backgroundColor: "#1e90ff",
              border: "1px solid black",
              fontSize: 1 + "em",
              textAlign: "center",
              width: "100%",
            }}
          >
            {departmentItem.name}
          </div>
          <div className="row">
            {Staffs.map((Staff) => {
              return (
                <div
                  key={Staff.id}
                  className="col-sm-12 col-md-3 col-xl-2"
                  style={{ padding: 1 + "em" }}
                >
                  <RenderStaffList Staff={Staff} />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return Staffs.map((Staff) => {
        return (
          <div
            key={Staff.id}
            className="col-sm-6 col-md-4 col-xl-2"
            style={{ padding: 1 + "em" }}
          >
            <RenderStaffList Staff={Staff} />
          </div>
        );
      });
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="col-sm-2 col-md-2 col-xl-2">Nhân Viên</h2>

        {/*search*/}
        <div className="col-sm-7 col-md-8 col-xl-8">
          <input
            id="SearchName"
            type="text"
            className="form-control "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <div className="col-sm-3 col-md-2 col-xl-2">
          <button
            type="button"
            style={{ width: "100%" }}
            className="btn btn-outline-primary "
            onClick={mySearch}
          >
            search
          </button>
        </div>
      </div>
      <hr />

      {/*add Staff*/}
      <div className="row">
        <div className="col-sm-2 col-md-2 col-xl-2">
          <Button color="primary" onClick={toggle1}>
            ADD
          </Button>
        

        <Modal
          style={{ width: "900px", maxWidth: "100%" }}
          isOpen={modalAdd}
          toggle={toggle1}
        >
           <div>
      <Form className="form-container" id="form-container" >
        <ModalHeader>Thông tin nhân viên</ModalHeader>
        <ModalBody >
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3" for="name">Họ Và Tên</Label>
                <Input
                className="col-sm-12 col-md-8 col-xl-9"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                  value={name}
                  valid={errors.name===""}
                  invalid ={errors.name !==""}
                  onBlur={handleBlur("name")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3" for="doB">Ngày Sinh</Label>
                <Input
                  className="col-sm-12 col-md-8 col-xl-9"
                  type="date"
                  id="doB"
                  name="doB"
                  value={doB}
                  valid={errors.doB===""}
                  invalid ={errors.doB !==""}
                  onBlur={handleBlur("doB")}
                  onChange={handleInputChange}
                />
               <FormFeedback>{errors.doB}</FormFeedback>
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3" for="startDate">Ngày vào công ty</Label>
                <Input
                  className="col-sm-12 col-md-8 col-xl-9"
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={startDate}
                  valid={errors.startDate===""}
                  invalid ={errors.startDate !==""}
                  onBlur={handleBlur("startDate")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.startDate}</FormFeedback>
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3" for="department">Phòng ban</Label>
                <Input className="col-sm-12 col-md-8 col-xl-9" type="select" name="department">
                  {props.Departments.map((department) => {
                    return (
                      <option
                        key={props.Departments.indexOf(department)}
                        value={props.Departments.indexOf(department)}
                      >
                        {department.name}
                      </option>
                    );
                  })}
                </Input>
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3" for="salaryScale">Hệ số lương</Label>
                <Input
                  className="col-sm-12 col-md-8 col-xl-9"
                  type="number"
                  defaultValue={1}
                  name="salaryScale"
                />
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3">Số ngày nghỉ còn lại</Label>
                <Input
                  className="col-sm-12 col-md-8 col-xl-9"
                  type="number"
                  defaultValue={0}
                  name="annualLeave"
                />
            </FormGroup>
            <FormGroup className="row" id="form-group">
                <Label className="col-sm-12 col-md-4 col-xl-3">Số ngày làm thêm</Label>
                <Input
                  className="col-sm-12 col-md-8 col-xl-9"
                  type="number"
                  defaultValue={0}
                  name="overTime"
                />
            </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={toggle1}>
            Thêm
          </Button>
        </ModalFooter>
      </Form>
    </div>
        </Modal>
      </div>

      {/*Sort*/}
      <div className="col-sm-7 col-md-8 col-xl-8">
        <select className="form-select rounded " id="Defragment-select">
          <option value="Default">None Defragment</option>
          <option value="Defragment">Defragment with Deparment</option>
        </select>
      </div>
      <div className="col-sm-3 col-md-2 col-xl-2">
        <Button
          type="button"
          className="btn btn-outline-primary"
          style={{
            width: "100%",
            background: "none",
          }}
          onClick={myDefragment}
        >
          {" "}
          Submit
        </Button>
      </div>

      {/*body*/}
      <div className="row">{DepartmentContainer}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
    </div>
  );
}

export default StaffList;
