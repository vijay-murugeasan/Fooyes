import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../services/redux/CartSlice";
import { useDispatch } from "react-redux";

function OrderForm({ isSubmitted, setIsSubmitted }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const totalErrCount = Object.keys(errors).length;
  function onSubmit(data) {
    console.log("form success");
    dispatch(clearCart());
    navigate("/thank-you");
  }

  function onError(errors) {
    console.log("Failed Validation!", errors);
  }

  useEffect(() => {
    totalErrCount > 0 && setIsSubmitted(false);
    isSubmitted && ref.current.click();
  }, [isSubmitted, totalErrCount]);

  const isValidPhone = (str) => /^\+?[1-9][0-9]{7,12}$/.test(str);

  const validateEmailRegex = (str) => /^\S+@\S+\.\S+$/.test(str);

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
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  isInvalid={errors.name}
                  {...register("name", {
                    required: "This Name Field Is Required",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.name?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  isInvalid={errors.email}
                  {...register("email", {
                    required: "This Email Field Is Required",
                    validate: (value) =>
                      validateEmailRegex(value) ||
                      "Please give us your correct email",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  isInvalid={errors.phone}
                  {...register("phone", {
                    required: "This Phone Field Is Required",
                    validate: (value) =>
                      isValidPhone(value) ||
                      "Please give us your correct phone number.",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formLocality">
                <Form.Label>Locality</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Locality"
                  isInvalid={errors.locality}
                  {...register("locality", {
                    required: "This Locality Field Is Required",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.locality?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row mb-1">
            <Form.Group controlId="formAreaStreet">
              <Form.Label>Area and Street</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Area and Street"
                isInvalid={errors.areaStreet}
                {...register("areaStreet", {
                  required: "This Area and Street Field Is Required",
                })}
                style={{ height: "75px" }}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.areaStreet?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formLandMark">
                <Form.Label>LandMark</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="LandMark"
                  isInvalid={errors.landMark}
                  {...register("landMark")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.landMark?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  isInvalid={errors.state}
                  {...register("state", {
                    required: "This State Field Is Required",
                  })}
                  value="TamilNadu"
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.state?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  isInvalid={errors.city}
                  {...register("city", {
                    required: "This City Field Is Required",
                  })}
                  value="Trichy"
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.city?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formPostalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Postal Code"
                  isInvalid={errors.postalCode}
                  {...register("postalCode", {
                    required: "This Postal Code Field Is Required",
                  })}
                  onBlur={handleSubmit(onError)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.postalCode?.message}
                </Form.Control.Feedback>
              </Form.Group>
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
          <button className="btn_1 gradient full-width mb_5" ref={ref}>
            submit
          </button>
        </div>
      </div>
    </Form>
  );
}

export default OrderForm;
