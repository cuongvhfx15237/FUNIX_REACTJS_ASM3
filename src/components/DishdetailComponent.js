import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Form,
  ModalBody,
  FormGroup,
  Modal,
  Input,
  ModalHeader,
  Col, Row
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
// import { useState } from 'react/cjs/react.production.min';

function RenderDish({ dish }) {
  return (
    <Card key={dish.id}>
      <CardImg top width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const toggleModal = () => {
    setisModalOpen(!isModalOpen);
  };
  const handleComment = (event, Ratting, YourName, Comments) => {
    
    alert("Ratting: " + Ratting.value + " YourName: " + YourName.value
    + " Comments: " + Comments.value);
    debugger
    toggleModal();
  };
const yourname = '';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length<=len);
const minLength = (len) => (val) => val && (val.length>=len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


  return (
    <div className="container" style={{ padding: 0 + "em" }}>
      <Card>
        <CardBody>
          <h2>COMMENTS</h2>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CardText>{comment.comment}</CardText>
                <CardText>
                  {comment.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </CardText>

                <br></br>
              </div>
            );
          })}
          <Form>
            {/*button*/}

            <Button
              type="button"
              style={{ color: "gray", backgroundColor: "transparent" }}
              onClick={toggleModal}
            >
              <i className="fa fa-bookmark"></i> Submit Comment
            </Button>
          </Form>
          <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Comments</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleComment}>
                <FormGroup>
                  <Label htmlFor="Ratting">Ratting</Label>
                  <Input
                    type="select"
                    id="Ratting"
                    name="Ratting"     >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </FormGroup>
                <Row className="form=group">
                  <Label htmlFor="yourname">YourName</Label>
                  <Col md={10}>
                  <Control.text
                    model=".yourname"
                    type="text"
                    id="yourName"
                    className="yourname"
                    name="YourName"
                    validators={{required, minLength: minLength(2), maxLength: maxLength(15)}}
                  />
                    <Errors className="text-danger" 
                      model=".yourname" 
                      show="touched"
                      messages={{
                      required: 'required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less',
                    }}/>
                    </Col>
                </Row>
                <FormGroup>
                  <Label htmlFor="Comments">Comments</Label>
                  <Input
                    type="textarea"
                    id="comment"
                    className="comment"
                    name="comment"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  style={{ color: "primary" }}>
                  Submit
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
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
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
