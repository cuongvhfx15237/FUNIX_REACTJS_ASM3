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
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
                <FormGroup>
                  <Label htmlFor="YourName">YourName</Label>
                  <Input
                    type="text"
                    id="YourName"
                    name="YourName"
                    innerRef={(input, YourName) => (YourName = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="Comments">Comments</Label>
                  <Input
                    type="textarea"
                    id="comment"
                    name="comment"
                    innerRef={(input, Comments) => (Comments= input)}
                  />
                </FormGroup>
                <Button
                  type="button"
                  style={{ color: "primary" }}
                  onClick={handleComment}>
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
