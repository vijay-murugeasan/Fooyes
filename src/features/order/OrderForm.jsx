import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    alert("form Submitted Successfully");
  }

  function onError(errors) {
    console.log("Failed Validation!", errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="box_order_form">
        <div className="head">
          <div className="title">
            <h3>Personal Details</h3>
          </div>
        </div>
        <div className="main">
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  isInvalid={errors.firstName}
                  {...register("firstName", {
                    required: "This First name Field Is Required",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  isInvalid={errors.lastName}
                  {...register("lastName", {
                    required: "This Last Name Field Is Required",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Email Address </label>
                <input className="form-control" placeholder="Email Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone </label>
                <input className="form-control" placeholder="Phone" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Full Address </label>
            <input className="form-control" placeholder="Full Address" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>City </label>
                <input className="form-control" placeholder="City" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Postal Code </label>
                <input className="form-control" placeholder="0123" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box_order_form">
        <div className="head">
          <div className="title">
            <h3>Payment Method</h3>
          </div>
        </div>
        <div className="main">
          <div className="payment_select">
            <label className="container_radio">
              Pay with Cash
              <input
                type="radio"
                value=""
                defaultChecked
                name="payment_method"
              />
              <span className="checkmark"></span>
            </label>
            <i className="icon_wallet"></i>
          </div>
          <button className="btn_1 gradient full-width mb_5">submit</button>
        </div>
      </div>
    </Form>
  );
}

export default OrderForm;
