import React from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modall from "./Modall";
// import { List } from "../helper/data";

function CropItem({
  image,
  Crop,
  ClimaticSeason,
  SuitableRegions,
  PreferredSoilType,
}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="cropItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p> {Crop} </p>
      <p> {ClimaticSeason} </p>
      <p> {SuitableRegions} </p>
      <p> {PreferredSoilType} </p>
      {/* <Link to="/readmore">Read More...</Link> */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Read More..
      </Button>
      <Modall show={modalShow} onHide={() => setModalShow(false)} cp={Crop}/>
    </div>
  );
}

export default CropItem;
