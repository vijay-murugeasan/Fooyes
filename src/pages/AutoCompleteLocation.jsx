import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePosition } from "../services/userSlice";
import { place_ID, search_API_URL } from "../services/constant";
import { fetchAddress } from "../services/userSlice";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function AutocompleteLocation() {
  const IsMobile = window.screen.width < 800;

  const [myOptions, setMyOptions] = useState([]);
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const {
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const [placeHolder, setPlaceHolder] = useState(
    "Enter Your Delivery Location"
  );

  const [error, setError] = useState({});
  const [fieldValue, setFieldValue] = useState({});

  async function getPlaceRes(addressVal) {
    const strLen = addressVal.length;
    if (strLen > 2) {
      const controller = new AbortController();
      const data = await fetch(search_API_URL + addressVal, {
        signal: controller.signal,
      });
      const res = await data.json();
      myOptions.length = 0;
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push({
          label: res.data[i].description,
          id: res.data[i].place_id,
        });
      }
      // console.log(res?.data);
      setMyOptions(myOptions);
    }
  }
  async function getGeoCode(id) {
    const data = await fetch(place_ID + id);
    const res = await data.json();
    // console.log(res);
    select.length = 0;
    for (var i = 0; i < res.data.length; i++) {
      select.push({
        label: res.data[i].geometry.location,
        id: res.data[i].place_id,
        address: res.data[i].formatted_address,
      });
    }
    // console.log(res?.data);
    setSelect(select);
    console.log(select[0]);
    if (select.length > 0) return dispatch(updatePosition(select[0]));
  }

  function handleFetchAddress(e) {
    e.preventDefault();
    setError({});
    dispatch(fetchAddress());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!position || !address) {
      const errorVal =
        fieldValue.length > 2
          ? "Enter Valid Location"
          : "Enter Your Delivery Location";
      setError({ addressError: errorVal });
    } else {
      window.sessionStorage.setItem("position", position);
    }
  }
  // console.log(error);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <Autocomplete
          name="search"
          style={{ width: "75%" }}
          freeSolo
          autoComplete
          autoHighlight
          options={myOptions}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === "reset") {
              setFieldValue("");
              return;
            } else {
              setFieldValue(newInputValue);
            }
          }}
          onChange={(e, value) => {
            // console.log(value);
            getGeoCode(value?.id);
          }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.label
          }
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(e) => {
                getPlaceRes(e.target.value);
              }}
              variant="outlined"
              placeholder={placeHolder}
            />
          )}
          size="small"
        />
        <div className="input-group-append">
          <Link
            disabled={isLoadingAddress}
            onClick={handleFetchAddress}
            className={`btn_1 small`}
            type="button"
            style={{ height: "-webkit-fill-available", paddingTop: "12px" }}
          >
            <i className="icon_pin"></i>
          </Link>
        </div>
      </div>
      <div id="pass-info" className="clearfix"></div>
      <button disabled={isLoadingAddress} className="btn_1 gradient full-width">
        Find Food
      </button>
      {!fieldValue.length && addressStatus === "error" && (
        <p className="mt-2 alert alert-danger">{errorAddress}</p>
      )}
      {error && error.addressError && (
        <p className="mt-2 alert alert-danger">{error.addressError}</p>
      )}
    </form>
  );
}

export default AutocompleteLocation;
