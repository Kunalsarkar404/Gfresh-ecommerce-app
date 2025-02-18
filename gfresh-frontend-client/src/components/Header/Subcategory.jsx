import React from "react";
import { useNavigate } from "react-router-dom";

const Subcategory = ({ value, issubcategory }) => {
  const nvg = useNavigate();
  const transfer2 = (id, title) => {
    nvg(`/category/${id}/${title}/none`);
  };
  return (
    <li className={issubcategory === 0 ? "" : "mega"}>
      {issubcategory === 0 ? (
        <button
          type="button"
          onClick={() => {
            transfer2(value._id, value.name);
          }}
          className="btn dark-menu-item desgin1 ulappear"
          style={{ padding: "6px 18px 0px 18px" }}
        >
          &nbsp; <span className="largefont"> {value.name} </span>
        </button>
      ) : (
        <>
          {" "}
          <button
            type="button"
            className="btn dark-menu-item desgin1 ulappear"
            style={{ padding: "6px 18px 0px 18px" }}
          >
            &nbsp; <span className="largefont"> {value.name}</span>
          </button>
          <ul className="mega-menu full-mega-menu resultappear newwith">
            <div>
              <div className="container">
                <div className="row">
                  {value.subcategories.map((item, index) => (
                    <div className="col-12 mega-box">
                      <div className="link-section">
                        <div className="menu-title">
                          <h5
                            onClick={() => {
                              transfer2(item._id, item.name);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {item.name}{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ul>{" "}
        </>
      )}
    </li>
  );
};

export default Subcategory;