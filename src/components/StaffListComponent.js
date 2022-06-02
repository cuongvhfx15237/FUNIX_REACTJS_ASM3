import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback,
} from "reactstrap";
import "../index.css";
import { Link } from "react-router-dom";
import { Button, Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StaffList(props, iStaffs, submitForm) {

  const [itemStaff, setItemstaff] = useState({
    modalAdd: false,
    id:"",
    name:"",
    doB: "",
    startDate:"",
    department:"Sale",
    salaryScale:1,
    annualLeave:0,
    overTime:0,
    imate:"/assets/images/alberto.png",
    touched: {
      name: false,
      doB: false,
      startDate: false,
      salaryScale: false,
      department: false,
      annualLeave: false,
      overTime: false,
    }
  })

  function toggleModal(){
    setItemstaff({
      modalAdd: !itemStaff.modalAdd,
      id:"",
      name:"",
      doB: "",
      startDate:"",
      department:"Sale",
      salaryScale:1,
      annualLeave:0,
      overTime:0,
      imate:"/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
        salaryScale: false,
        department: false,
        annualLeave: false,
        overTime: false,
      }
    })
  }

  const handleBlur = (field) =>  (e) => {
    setItemstaff({
        ...itemStaff,
        touched: { ...itemStaff.touched, [field]: true}
    })
  };


  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setItemstaff({...itemStaff,
      [name]: value,
    });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
   const target = document.querySelectorAll("form input, form select")
   console.log (target)
   for (let i = 0; i<target.length; i++){
 
     if (target[i].name ==="name"){
        setItemstaff({...itemStaff,
        name: target[i].value})
        console.log(target[i].value)
     }
  //    else if (target[i].name ==="doB"){
  //      console.log(target[i].value)
  //      const day = (new Date(target[i].value)).toISOString()
  //     setItemstaff({...itemStaff,
  //     doB: day})
  //     console.log(day)
  //  }}
  //  else if (target[i].name ==="startDate"){
  //   const day = target[i].value.toISOString();
  //  setItemstaff({...itemStaff,
  //  startDate: day})
  //  console.log(day)
  // }
  // else if (target[i].name ==="department"){
  //   let Index = target[i].value.toISOString()
  //  setItemstaff({...itemStaff,
  //  doB: day})
  //  console.log(day)
   }}
    // onAdd
  

 function validate(){
    const errors = {
      name:"",
      department:"",
      doB:"",
      startDate:"",
      salaryScale:"",
      annualLeave:"",
      overTime:"",
    };

    if (itemStaff.touched.name && itemStaff.name.length < 3){
      errors.name = "Tên phải có hơn 3 ký tự"
    }
    else if (itemStaff.touched.name && itemStaff.name.length > 50){
      errors.name = "Tên phải có it hơn 50 ký tự"
    }
    if (itemStaff.touched.doB && itemStaff.doB===""){
      errors.doB = "Yêu cầu nhập thông tin ngày tháng"
    }
    if (itemStaff.touched.startDate && itemStaff.startDate===""){
      errors.startDate = "Yêu cầu nhập thông tin ngày tháng"
    }
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
const errors = validate(itemStaff.name, itemStaff.doB, itemStaff.startDate, itemStaff.department, itemStaff.salaryScale, itemStaff.annualLeave, itemStaff.overTime);
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
          <Button color="primary" onClick={toggleModal}>
            ADD
          </Button>

          <Modal
            style={{ width: "900px", maxWidth: "100%" }}
            isOpen={itemStaff.modalAdd}
            toggle={toggleModal}
          >
            <div>
              <Form className="form-container" id="form-container" onSubmit={handleSubmit}>
                <ModalHeader>Thông tin nhân viên</ModalHeader>
                <ModalBody>
                  <FormGroup className="row" id="form-group">
                    <Label className="col-sm-12 col-md-4 col-xl-3" for="name">
                      Họ Và Tên
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ và tên"
                      value={itemStaff.name}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onBlur={handleBlur("name")}
                      onChange={handleInputChange}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup className="row" id="form-group">
                    <Label className="col-sm-12 col-md-4 col-xl-3" for="doB">
                      Ngày Sinh
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="date"
                      id="doB"
                      name="doB"
                      value={itemStaff.doB}
                      valid={errors.doB === ""}
                      invalid={errors.doB !== ""}
                      onBlur={handleBlur("doB")}
                      onChange={handleInputChange}
                    />
                    <FormFeedback>{errors.doB}</FormFeedback>
                  </FormGroup>
                  <FormGroup className="row" id="form-group">
                    <Label
                      className="col-sm-12 col-md-4 col-xl-3"
                      for="startDate"
                    >
                      Ngày vào công ty
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={itemStaff.startDate}
                      valid={errors.startDate === ""}
                      invalid={errors.startDate !== ""}
                      onBlur={handleBlur("startDate")}
                      onChange={handleInputChange}
                    />
                    <FormFeedback>{errors.startDate}</FormFeedback>
                  </FormGroup>
                  <FormGroup className="row" id="form-group">
                    <Label
                      className="col-sm-12 col-md-4 col-xl-3"
                      for="department"
                    >
                      Phòng ban
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="select"
                      name="department"
                    >
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
                    <Label
                      className="col-sm-12 col-md-4 col-xl-3"
                      for="salaryScale"
                    >
                      Hệ số lương
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="number"
                      defaultValue={1}
                      name="salaryScale"
                    />
                  </FormGroup>
                  <FormGroup className="row" id="form-group">
                    <Label className="col-sm-12 col-md-4 col-xl-3">
                      Số ngày nghỉ còn lại
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="number"
                      defaultValue={0}
                      name="annualLeave"
                    />
                  </FormGroup>
                  <FormGroup className="row" id="form-group">
                    <Label className="col-sm-12 col-md-4 col-xl-3">
                      Số ngày làm thêm
                    </Label>
                    <Input
                      className="col-sm-12 col-md-8 col-xl-9"
                      type="number"
                      defaultValue={0}
                      name="overTime"
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary" onClick={toggleModal}>
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
        <div className="row">
          Bấm vào tên Nhân Viên để xem thông tin cụ thể.
        </div>
      </div>
    </div>
  );
}

export default StaffList;
