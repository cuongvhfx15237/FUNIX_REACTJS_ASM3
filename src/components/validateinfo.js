// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Button,
//   ModalFooter,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   Label,
//   Input,
//   Form,
// } from "reactstrap";

// function AddStaff(props) {
//   const [modalAdd, setModalAdd] = useState(false);
//   const toggle1 = () => setModalAdd(!modalAdd);

//   const initialValues = { name: "", doB: "", startDate: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [Staffs, setStaffs] = useState(props.Staffs);
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     let IdArr = Staffs.map((Staff) => Staff.id);
//     let id = Math.max(...IdArr) + 1;
//     if ([name] == "department") {
//       setFormValues({
//         id,
//         ...formValues,
//         ["department"]: props.Departments[e.target.value],
//         image: "/assets/images/alberto.png",
//       });
//     } else if ([name] == "doB") {
//       const day = new Date(value).toISOString();
//       setFormValues({
//         id,
//         ...formValues,
//         ["doB"]: day,
//         image: "/assets/images/alberto.png",
//       });
//     } else if ([name] == "startDate") {
//       const day = new Date(value).toISOString();
//       setFormValues({
//         id,
//         ...formValues,
//         ["startDate"]: day,
//         image: "/assets/images/alberto.png",
//       });
//     } else if ([name] != "name") {
//       setFormValues({
//         id,
//         ...formValues,
//         [name]: parseInt(value),
//         image: "/assets/images/alberto.png",
//       });
//     } else {
//       setFormValues({
//         id,
//         ...formValues,
//         [name]: value,
//         image: "/assets/images/alberto.png",
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//     setStaffs(Staffs.push(formValues));
//     console.log(Staffs);
//   };
//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     if (!values.fullnname) {
//       errors.name = "!Vui lòng nhập thông tin";
//     }
//     if (!values.doB) {
//       errors.doB = "!Vui lòng nhập thông tin";
//     }
//     if (!values.startDate) {
//       errors.startDate = "!Vui lòng nhập thông tin";
//     }
//     return errors;
//   };
//   return (
//     <div>
//       <Form className="form-container" onSubmit={handleSubmit}>
//         <ModalHeader>Thông tin nhân viên</ModalHeader>
//         <ModalBody>
//           <FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Họ Và Tên</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Họ và tên"
//                   onBlur={handleChange}
//                 />
//                 <p className="text-danger">{formErrors.name}</p>
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Ngày Sinh</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="date"
//                   id="doB"
//                   name="doB"
//                   onBlur={handleChange}
//                 />
//                 <p className="text-danger">{formErrors.doB}</p>
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Ngày vào công ty</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="date"
//                   id="startDate"
//                   name="startDate"
//                   onBlur={handleChange}
//                 />
//                 <p className="text-danger">{formErrors.startDate}</p>
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Phòng ban</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input type="select" onBlur={handleChange} name="department">
//                   {props.Departments.map((department) => {
//                     return (
//                       <option
//                         key={props.Departments.indexOf(department)}
//                         value={props.Departments.indexOf(department)}
//                       >
//                         {department.name}
//                       </option>
//                     );
//                   })}
//                 </Input>
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Hệ số lương</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="text"
//                   defaultValue={1}
//                   onBlur={handleChange}
//                   name="salaryScale"
//                 />
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Số ngày nghỉ còn lại</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="text"
//                   defaultValue={0}
//                   onBlur={handleChange}
//                   name="annualLeave"
//                 />
//               </div>
//             </FormGroup>
//             <FormGroup className="row">
//               <div className="col-sm-12 col-md-4 col-xl-3">
//                 <Label>Số ngày làm thêm</Label>
//               </div>
//               <div className="col-sm-12 col-md-8 col-xl-9">
//                 <Input
//                   type="text"
//                   defaultValue={0}
//                   onBlur={handleChange}
//                   name="overTime"
//                 />
//               </div>
//             </FormGroup>
//           </FormGroup>
//         </ModalBody>
//         <ModalFooter>
//           <Button type="submit" color="primary" onClick={toggle1}>
//             Thêm
//           </Button>
//         </ModalFooter>
//       </Form>
//     </div>
//   );
// }

// export default AddStaff;
