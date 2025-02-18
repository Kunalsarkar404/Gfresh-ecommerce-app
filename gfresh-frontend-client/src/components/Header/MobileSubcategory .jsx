import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subsubcategory from "./Subsubcategory.jsx";

const MobileSubcategory = ({ value, issubcategory }) => {
  const [showfullmenu, setshowfullmenu] = useState(false);
  const nvg = useNavigate();

  const transfer = (id,title) => {
    nvg(`/category/${id}/${title}/none`);
  };
  return (
    
    <li className={issubcategory == 0 ? "" : "mega"}>
      {issubcategory == 0 ? (
        <button
          className="btn dark-menu-item desgin1"
          style={{ padding: "6px 18px 0px 18px" }}
          onClick={() => {
            transfer(value._id,value.name);
          }}
        >
          {" "}
          <img
            src={value.image}
            style={{ width: "25px" }}
            alt={404}
            className="hideonlaptop"
          />{" "}
          &nbsp; <span className="largefont"> {value.name} </span>
        </button>
      ) : (
        <>
          <button
            type="button"
            className="btn dark-menu-item desgin1 justshow"
            style={{ padding: "6px 18px 0px 18px" }}
            onClick={() => {
              setshowfullmenu(!showfullmenu);
            }}
          >
            <img
              src={value.image}
              style={{ width: "25px" }}
              alt={404}
              className="hideonlaptop"
            />{" "}
            &nbsp; <span className="largefont"> {value.name}</span>
          </button>
          <ul className="mega-menu full-mega-menu resultappear newwith ">
            <div>
              <div className="container">
                <div className="row">
                  {value.subcategories.map((item, index) => (
                    <div className="col mega-box" key={index}>
                      <div className="link-section">
                        <div className="menu-title">
                          <h5
                            onClick={() => {
                              transfer(value._id,value.name);
                            }}
                          >
                            {item.name}
                          </h5>
                        </div>
                        {/* <Subsubcategory subvalue={item.children} /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </>
      )}
    </li>
  );
};

export default MobileSubcategory;