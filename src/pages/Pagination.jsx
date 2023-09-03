import React, { useState } from "react";
import Crop from "./Crop"; // Import your Crop component
import "../styles/pagination.css"; // Create a CSS file for styling pagination
import { List } from "../helper/data";

function CropPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // Adjust this value as per your preference

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Crop
        crops={List}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <div className="pagination">
        <span className="page-number">Page {currentPage}</span>
        <div className="but">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= List.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropPagination;
