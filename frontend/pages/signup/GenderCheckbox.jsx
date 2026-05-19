import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-6 mt-4">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Male</span>

          <input
            type="checkbox"
            className="checkbox border-2 border-white checkbox-sm"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label> 
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox border-2 border-white checkbox-sm"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//STARTER CODE FOR THIS FILE
// import React from "react";

// const GenderCheckbox = () => {
//   return (
//     <div className="flex gap-6 mt-4">
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-white">Male</span>

//           <input type="checkbox" className="checkbox border-2 border-white checkbox-sm" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text text-white">Female</span>
//           <input type="checkbox" className="checkbox border-2 border-white checkbox-sm" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;
