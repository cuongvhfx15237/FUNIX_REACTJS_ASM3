import React, { useState } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
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
          <AddStaff Departments={props.Departments} Staffs={props.Staffs} />
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
