import React from "react";
import { Link } from "react-router-dom";

function CropItem({
  image,
  Crop,
  ClimaticSeason,
  SuitableRegions,
  PreferredSoilType,
}) {
  return (
    <div className="cropItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p> {Crop} </p>
      <p> {ClimaticSeason} </p>
      <p> {SuitableRegions} </p>
      <p> {PreferredSoilType} </p>
      <Link to="#">Read More...</Link>
    </div>
  );
}

export default CropItem;
