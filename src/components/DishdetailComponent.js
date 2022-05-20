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
  Col,
  Row,
} from "reactstrap";
import { Control, Errors, combineForms, LocalForm } from "react-redux-form";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const handleSubmit = (values) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    toggleModal();
  };
  // const initialNameState = {};
  // const store = createStore(combineReducers({
  //   deep: combineForms({
  //     yourname: initialNameState,
  //   }, 'deep'),
  // }));
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

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

          {/*button*/}
          <Row className="form-group">
            <Button
              type="button"
              style={{ color: "gray", backgroundColor: "transparent" }}
              onClick={toggleModal}
            >
              <i className="fa fa-bookmark"></i> Submit Comment
            </Button>
          </Row>

          <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Comments</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="Ratting">Ratting</Label>
                  <Input type="select" id="Ratting" name="Ratting">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="yourname">
                    Your Name
                  </Label>
                    <Input
                      type="text"
                      model=".yourname"
                      id="yourname"
                      name="yourname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLeng: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".yourname"
                      show="touched"
                      messages={{
                        required: "required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="Comments">Comments</Label>
                  <Input
                    type="textarea"
                    id="comment"
                    className="comment"
                    name="comment"
                  />
                </Row>
                <Row className="form-group">
                  <Button type="submit" style={{ color: "primary" }}>
                    Submit
                  </Button>
                </Row>
              </LocalForm>
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
