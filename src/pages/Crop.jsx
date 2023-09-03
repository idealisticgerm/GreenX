import React from "react";
// import { List } from "../helper/data";
import CropItem from "../components/CropItem";
import "../styles/Crop.css";

function Crop({ crops, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const cropsToDisplay = crops.slice(startIndex, endIndex);

  return (
    <div className="crop">
      <h1 className="cropTitle">Our Crops</h1>
      <div className="cropList">
        {cropsToDisplay.map((cropItem, key) => {
          return (
            <CropItem
              key={key}
              image={cropItem.image}
              Crop={cropItem.Crop}
              ClimaticSeason={cropItem.ClimaticSeason}
              SuitableRegions={cropItem.SuitableRegions}
              PreferredSoilType={cropItem.PreferredSoilType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Crop;
