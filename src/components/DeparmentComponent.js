import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";



function Department (props){
  
  
    const Dept = props.Department.map((Dept) => {
      return (
          <div key={Dept.id}  className="col-sm-12 col-md-6 col-xl-4" style={{padding: "1em"}}>
              <Card style={{padding: "10px",  backgroundImage: "linear-gradient(#0dcaf0 50%, #f8f9fa 50%"}}>
                  <h3>{Dept.name}</h3>
                  <p>Số Lượng Nhân Viên : {Dept.numberOfStaff}</p>
              </Card>
            </div>
          );
          });

          const staffOfDepart = props.staffs.filter((staff) => staff.departmentId === props.Department.id).map((staff) =>{
             return(
                <div key={staff.id} className="col-md-2 col-sm-4 col-6 my-2">
                   <Card className="shadow-lg">
                      <Link to={`/nhanvien/${staff.id}`}>
                         <CardImg src={staff.image} width="100%" alt={staff.name} />
                         <CardBody className="bg-dark">
                            <CardTitle>{staff.name}</CardTitle>
                         </CardBody>
                      </Link>
                   </Card>
                </div>
             )
          })
          
    return (
      <div className="container-fluid">
        <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='Nhanvien'>Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active> Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <hr/>
          <div className="row">
            {Dept}
          </div>

      </div>
    );
  
}
export default Department;
