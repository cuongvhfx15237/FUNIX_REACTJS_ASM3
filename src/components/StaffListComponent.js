import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  FormGroup,
  ModalBody,
  ModalHeader,
  Form,
  Label,
  Input,
} from "reactstrap";
import useForm from "./Validator";
import "../index.css";
import validate from "./validateinfo";
import { Link } from "react-router-dom";
import { Button, Modal } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import StaffModified from "./AddStaff";

function StaffList(props, iStaffs, submitForm) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const toggleModal = () => {
    setisModalOpen(!isModalOpen);
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



  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
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
        >
          <div
            key={departmentItem.id}
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
        <h2 style={{ width: 20 + "%" }}>Nhân Viên</h2>

        {/*search*/}
        <div className="input-group" style={{ width: 80 + "%" }}>
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
            style={{
              backgroundColor: "none",
              width: "20%",
              minWidth: "50px",
              padding: "0px",
            }}
            onClick={mySearch}
          >
            search
          </button>
        </div>
      </div>
      <hr />

      {/*add Staff*/}
   
      <FormGroup className="row" style={{ margin: "0px", width: "100%" }}>
        <div style={{ width: "20%", margin: "0px", padding: "0px" }}>
          <Button
            className="btn btn-outline-primary"
            type="button"
            style={{
              maxWidth: "100%",
              minWidth: "50px",
              height: "100%",
              backgroundColor: "none",
            }}
            onClick={toggleModal}
          >
            ADD
          </Button>
          <Modal
            className="modal-body"
            style={{ width: "100%", maxWidth:"60%", margin: "auto", padding: "0px" }}
            isOpen={isModalOpen}
            toggle={toggleModal}
          >   <StaffModified/>
              </Modal>
          </div>
        {/*Sort*/}
        <div
          className="row"
          style={{
            width: "80%",
            margin: "0px",
            padding: "0px",
            justifyContent: "end",
          }}
        >
          <select
            className="form-select rounded col-sm-9 col-md-10 col-xl-10"
            id="Defragment-select"
            style={{ width: "80%" }}
          >
            <option value="Default">None Defragment</option>
            <option value="Defragment">Defragment with Deparment</option>
          </select>
          <Button
            type="button"
            className="btn btn-outline-primary col-sm-3 col-md-2 col-xl-2"
            style={{
              width: "20%",
              minWidth: "50px",
              background: "none",
              padding: "0px",
            }}
            onClick={myDefragment}
          >
            {" "}
            Submit
          </Button>
        </div>
      </FormGroup>

      {/*body*/}
      <div className="row">{DepartmentContainer}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );
}

export default StaffList;
