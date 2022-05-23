import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";

function Example() {
  const [date, setDate] = useState();
  // Modal open state
  const [modalAdd, setModalAdd] = useState(false);
  const toggle1 = () => setModalAdd(!modalAdd);

  const [modalCal1, setModalCal1] = useState(false);
  const toggle2 = () => setModalCal1(!modalCal1);
  
  const [modalCal2, setModalCal2] = useState(false);
  const toggle3 = () => setModalCal2(!modalCal2);

  const initialValues={fullname:'', birthday:'', startday:''}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e)=>{
    const {name, value}= e.target;
    setFormValues({...formValues, [name]:value});
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  }
  useEffect(()=>{
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors])
  const validate = (values) => {
      const errors={}
      if(!values.fullnname){
        errors.fullname="Vui lòng nhập thông tin"
      }
      if(!values.birthday){
        errors.birthday="Vui lòng nhập thông tin"
      }
      if(!values.startday){
        errors.startday="Vui lòng nhập thông tin"
      }
      return errors
  }
  return (
    <div  style={{display: "block", width: "1000px", maxWidth:"90%", padding: 30}}>
      <Button color="primary" onClick={toggle1}>
        ADD
      </Button>
      <Modal style={{width:"900px", maxWidth:"100%"}} isOpen={modalAdd} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Thông tin nhân viên</ModalHeader>
        <ModalBody>
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          <Form onSubmit={handleSubmit}>
          <FormGroup  className="row" >
              <div className="col-sm-12 col-md-4 col-xl-3">
                <Label >Họ Và Tên</Label>
                </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="text" id="fullname" name="fullname" placeholder="Họ và tên" onBlur={handleChange}/>
              </div>
              <p>{formErrors.fullname}</p>
          </FormGroup>
          <FormGroup  className="row">
            <div className="col-sm-12 col-md-4 col-xl-3">
              <Label>Ngày Sinh</Label>
              </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="date" id="birthday" name="birthday" onClick={toggle2} onChange={(e) => setDate(e.target.value)} onBlur={handleChange}/>
              </div>
              <p>{formErrors.birthday}</p>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Ngày vào công ty</Label>
            </div>
            <div className="col-sm-12 col-md-8 col-xl-9">
              <Input type="date" id="startday" name="startday" onClick={toggle3} onChange={(e) => setDate(e.target.value)} onBlur={handleChange}/>
              </div>
              <p>{formErrors.startday}</p>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Phòng ban</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
            </div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Hệ số lương</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="text" defaultValue={1}/>
            </div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Số ngày nghỉ còn lại</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9"><Input type="text" defaultValue={0}/></div>
          </FormGroup>
          <FormGroup  className="row">
          <div className="col-sm-12 col-md-4 col-xl-3">
            <Label>Số ngày làm thêm</Label>
            </div>
          <div className="col-sm-12 col-md-8 col-xl-9">
            <Input type="text" defaultValue={0}/>
            </div>
          </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle1}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
