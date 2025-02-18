import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Subsubcategory = ({ subvalue }) => {
  const [categories, setCategories] = useState([]);
  const nvg = useNavigate();
  const transfer = (id, title) => {
    // console.log("123456789098765", value);
    // let urlParts = value.split("/");
    // let id = urlParts[urlParts.length - 2];
    nvg(`/category/${id}/${title}/none`);
    window.location.reload();
  };

  useEffect(() => {
    async function fetchcategory() {
      const response = await axios.get(subvalue);
      setCategories(response.data);
    }

    fetchcategory();
  }, []);
  return (
    <div className="menu-content">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => {
              transfer(item._id,item.name);
              console.log("li tag of childrem", item);
            }}
          >
            <button
              type="button"
              onClick={() => {
                transfer(item._id,item.name);
                console.log("button inside of button");
              }}
              style={{ fontSize: "13px" }}
              className="btn"
            >
              <span
                onClick={() => {
                  transfer(item._id,item.name);
                  console.log("button inside of text");
                }}
              >
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subsubcategory;
