import React from "react";

const Filter = ({ filterNames, handleFilterNames }) => {
  return (
    <div>
      Filter shown with
      <input value={filterNames} onChange={handleFilterNames} />
    </div>
  );
};

export default Filter;
