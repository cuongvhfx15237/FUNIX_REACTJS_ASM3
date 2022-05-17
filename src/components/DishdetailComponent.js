import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Form, ModalBody, FormGroup, Modal, Input } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react/cjs/react.production.min';


  function RenderDish({dish}) {
      return (
        <Card key={dish.id}>
          <CardImg top width ="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
  }

  function RenderComments({comments}) {
      return (
        <div className="container" style={{padding: 0 + 'em'}}>
        <Card >
          <CardBody >
            <h2>COMMENTS</h2>
            {comments.map((comment)=> {
              return (
                <div key={comment.id}>
                  <CardText>
                    {comment.comment}
                  </CardText>
                  <CardText>
                    {comment.author}, 
                    {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', month: 'short', day: '2-digit'}).format(
                      new Date(Date.parse(comment.date)))}
                    </CardText>

                  <br></br>
                </div>
              );
            })}
            <Form>

              {/*button*/}
            
                <Button type="button" style={{color:'gray', backgroundColor:'transparent'}} onClick={toggleModal}><i className="fa fa-bookmark"></i>  Submit Comment  
                </Button>
            </Form>
          </CardBody>
                    
        </Card>
        </div>
      );
  }
    const DishDetail = (props) => {
      if (props.dish != null){
        return (
          <div className="container">
              <div className="row">
                  <Breadcrumb>

                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>{props.dish.name}</h3>
                      <hr />
                  </div>                
              </div>
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                      <RenderDish dish={props.dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      <RenderComments comments={props.comments} />
                  </div>
                    
              </div>
              <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalBody>
                  <Form onSubmit={handleComment}>
                    <FormGroup>
                      <Label htmlFor="username">username</Label>
                      <Input type="text" id="username" name="username"
                      innerRef={(input)=> this.username = input}/>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
          </div>
      );
  }
  else { return <div></div>}
}

export default DishDetail;

const [isModalOpen, setisModalOpen]=useState(false);
  function toggleModal() {
    
    setisModalOpen(!isModalOpen);

  }
function handleComment(event){
  toggleModal();
    alert('it run')
  
}