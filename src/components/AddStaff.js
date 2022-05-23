import React, {useEffect, useState } from 'react';
import { FormGroup, Label, FormText } from 'reactstrap';
var DatePicker = require("reactstrap-date-picker");

function StaffModified() {
    const[value, setValue]= useState( new Date().toISOString());

    function handleChange(value, formattedValue) {
        setValue({
          value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
          formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        })
      };

      useEffect(() => {
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
      })


    return (
        <div>
       <div>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js"></script>
        
           <style>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css"/>
           </style>
        </div>
        <div>
           <form className="form-1 row" style={{ maxWidth:"100%", magin:"auto", padding:"10px"}}>
        <h5>Thông tin nhân viên</h5>
        <hr/>
        <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="fullname" className="col-sm-12 col-md-3 col-xl-3">Họ và tên</label>
            <input type="text" name="fullname" className="fullname col-sm-12 col-md-9 col-xl-9" id="fullname"
            placeholder="Họ và tên"/>
            <span className="form-message"></span>
            <br/>
            </div>
        <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="birthday"  className="col-sm-12 col-md-3 col-xl-3">Ngày sinh</label>
            <input type="text" name="birthday" className="birthday  col-sm-12 col-md-9 col-xl-9" id="birthday"
            placeholder="dd/mm/yyyy" 
           />
                <FormGroup>
                <Label>My Date Picker</Label>
                <DatePicker id      = "example-datepicker" 
                            value   = {value}
                            onChange= {(v,f) => handleChange(v, f)} />
                <FormText>Help</FormText>
            </FormGroup>
            <span className="form-message"></span>
            <br/>
        </div>
        {/* <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="startday"  className="col-sm-12 col-md-3 col-xl-3">Ngày vào công ty</label>
            <input type="text" name="startday" className="startday  col-sm-12 col-md-9 col-xl-9" id="startday"
            placeholder="dd/mm/yyyy" data-bs-toggle="modal" data-bs-target="#Calendar-2"/>
              <div className="modal fade" id="Calendar-2" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title">Calendar</h3>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" id="picker-2" className="form-control"/>
                        <i className="fa fa-calendar fa-5x"></i>
                    </div>
                    <div className="modal-footer">
                        <button type="button"  data-bs-dismiss="modal" >Submit</button>
                    </div>
                  </div>
                </div>
              </div>

            <span className="form-message"></span>
            <br/>
        </div> */}
        <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="department"  className="col-sm-12 col-md-3 col-xl-3">Phòng ban</label>
            <select type="select" name="department" className="department  col-sm-12 col-md-9 col-xl-9" id="department">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <span className="form-message"></span>
            <br/>
        </div>
        <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="onLeave"  className="col-sm-12 col-md-3 col-xl-3">Số ngày phép còn lại</label>
            <input type="text" name="onLeave" className="onLeave  col-sm-12 col-md-9 col-xl-9" id="onLeave"
            defaultValue= "0"/>
            <span className="form-message"></span>
            <br/>
        </div>
        <div className="form-group row" style={{margin: "10px", padding:"10px"}}>
            <label htmlFor="overtime"  className="col-sm-12 col-md-3 col-xl-3">Số ngày làm thêm</label>
            <input type="text" name="overtime" className="overtime  col-sm-12 col-md-9 col-xl-9" id="overtime"
            defaultValue= "0"/>
            <span className="form-message"></span>
            <br/>
        </div>

    </form >
    </div >
    </div >
    )
}




export default StaffModified;