import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";

function AddStaff(props) {

    const [modalAdd, setModalAdd] = useState(false);
    const toggle1 = () => setModalAdd(!modalAdd);


  const initialValues={fullname:'', doB:'', startDay:''}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e)=>{
    const {name, value}= e.target;
    setFormValues({...formValues, [name]:value, image:'/assets/images/alberto.png'});

    }
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues)
  }
  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit){
    }
  },[formErrors])
  const validate = (values) => {
      const errors={}
      if(!values.fullnname){
        errors.fullname="!Vui lòng nhập thông tin"
      }
      if(!values.doB){
        errors.doB="!Vui lòng nhập thông tin"
      }
      if(!values.startDay){
        errors.startDay="!Vui lòng nhập thông tin"
      }
      return errors
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <ModalHeader >Thông tin nhân viên</ModalHeader>
        <ModalBody>
          <FormGroup >
          <FormGroup  className="row" >
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label >Họ Và Tên</Label>
                </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="text" 
              id="fullname" 
              name="fullname" 
              placeholder="Họ và tên" 
              // value={formValues.fullname}
              onBlur={handleChange} />
              <p className="text-danger">{formErrors.fullname}</p>
              </div>
              
          </FormGroup>
          <FormGroup  className="row">
            <div className="col-sm-12 col-md-4 col-xl-3">
              <Label>Ngày Sinh</Label>
              </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="date" 
              id="doB" 
              name="doB" 
              // value={formValues.doB}
              onBlur={handleChange}/>
              <p  className="text-danger">{formErrors.doB}</p>
              </div>
              
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Ngày vào công ty</Label>
            </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="date" 
              id="startDay" 
              name="startDay" 
              // value={formValues.startDay}
              onBlur={handleChange} />
               <p  className="text-danger">{formErrors.startDay}</p>
              </div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Phòng ban</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="select"  onBlur={handleChange} name="Department">
              {props.Departments.map((department)=>{
                  return( <option key={props.Departments.indexOf(department)}>
                    {department.name}
                  </option>)
              })}
            </Input>
            </div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Hệ số lương</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="text" defaultValue={1}  onBlur={handleChange} name="salaryScale"/>
            </div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Số ngày nghỉ còn lại</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9"><Input type="text" defaultValue={0}  onBlur={handleChange} name="annualLeave"/></div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Số ngày làm thêm</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="text" defaultValue={0}  onBlur={handleChange} name="overTime"/>
            </div>
          </FormGroup>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" >
            Thêm
          </Button>
        </ModalFooter>
        </Form>
    </div>
  );
}

export default AddStaff;
