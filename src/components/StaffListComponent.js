import React, { useState, useEffect } from "react";
import { Card, CardImg, CardTitle, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import useForm from "./Validator";
import "../index.css";
import validate from "./validateinfo";
import { Link } from "react-router-dom";
import { Button, Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStaff from "./validateinfo";

function StaffList(props, iStaffs, submitForm) {
  const [modalAdd, setModalAdd] = useState(false);
  const toggle1 = () => setModalAdd(!modalAdd);

  const initialValues = { name: "", doB: "", startDate: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Staffs, setStaffs] = useState(props.Staffs);
  const handleChange = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (event) => {
    const HTMLCollection = document.querySelectorAll("form input");
    console.log(HTMLCollection)
    let i=0;
    for (i; i<HTMLCollection.length; i++){
      const { name, value } = document.getElementsByTagName("input")[i];
      console.log(document.getElementsByTagName("input")[i])
      let IdArr = Staffs.map((Staff) => Staff.id);
      let id = Math.max(...IdArr) + 1;
      if ([name] == "department") {
        setFormValues({
          id,
          ...formValues,
          ["department"]: props.Departments[event.target.value],
          image: "/assets/images/alberto.png",
        });
      } else if ([name] == "doB") {
        const day = new Date(value).toISOString();
        setFormValues({
          id,
          ...formValues,
          ["doB"]: day,
          image: "/assets/images/alberto.png",
        });
      } else if ([name] == "startDate") {
        const day = new Date(value).toISOString();
        setFormValues({
          id,
          ...formValues,
          ["startDate"]: day,
          image: "/assets/images/alberto.png",
        });
      } else if ([name] != "name") {
        setFormValues({
          id,
          ...formValues,
          [name]: parseInt(value),
          image: "/assets/images/alberto.png",
        });
      } else {
        setFormValues({
          id,
          ...formValues,
          [name]: value,
          image: "/assets/images/alberto.png",
        });
      }
    }
    setIsSubmit(true);
    setStaffs(Staffs.push(formValues));
    console.log(formValues)
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.name = "!Vui lòng nhập thông tin";
    }
    if (!values.doB) {
      errors.doB = "!Vui lòng nhập thông tin";
    }
    if (!values.startDate) {
      errors.startDate = "!Vui lòng nhập thông tin";
    }
    return errors;
  };






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
      <Form className="form-container" onSubmit={handleSubmit}>
        <ModalHeader>Thông tin nhân viên</ModalHeader>
        <ModalBody>
          <FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Họ Và Tên</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                  // onBlur={handleChange}
                />
                <p className="text-danger">{formErrors.name}</p>
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Ngày Sinh</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="date"
                  id="doB"
                  name="doB"
                  // onBlur={handleChange}
                />
                <p className="text-danger">{formErrors.doB}</p>
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Ngày vào công ty</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  // onBlur={handleChange}
                />
                <p className="text-danger">{formErrors.startDate}</p>
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Phòng ban</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input type="select" name="department">
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
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Hệ số lương</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="number"
                  defaultValue={1} 
                  name="salaryScale"
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Số ngày nghỉ còn lại</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="number"
                  defaultValue={0}
                  name="annualLeave"
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label>Số ngày làm thêm</Label>
              </div>
              <div className="col-sm-12 col-md-8 col-xl-9">
                <Input
                  type="number"
                  defaultValue={0}
                  name="overTime"
                />
              </div>
            </FormGroup>
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
