import React from "react";
import img1 from "../../assets/Ellipse 27.png";
import img2 from "../../assets/Ellipse 28.png";
import img3 from "../../assets/Ellipse 29.png";
import Breadcupdash from "../../components/Breadcupdash";
// import { useCountinfoQuery } from "../../store/api/webinfoapi";

const Dashboard = () => {
  // const { data, isLoading, error } = useCountinfoQuery();

  // Mock Data for Testing
  const data = {
    user: 120,
    category: 25,
    order: 45,
    latestUsers: [
      { first_name: "John", last_name: "Doe", mobile: "1234567890", email: "john.doe@example.com" },
      { first_name: "Jane", last_name: "Smith", mobile: "9876543210", email: "jane.smith@example.com" },
    ],
    latestOrders: [
      { orderid: "ORD123", order_status: "Delivered", grand_total_amount: 1500 },
      { orderid: "ORD124", order_status: "Pending", grand_total_amount: 2000 },
    ],
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <div className="dashboardcontent">
        <Breadcupdash name={"Dashboard"} />
        <div className="container-fuild py-4" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <div className="row">
            <div className="col-lg-4 mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img1} alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">{data.user}</p>
                  <p className="pbold">Total Customer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img2} width="63px" alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">{data.category}</p>
                  <p className="pbold">Total Categories</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-2 col-md-6 col-12 dbox">
              <div className="row bg-white py-3 d-flex align-items-center rounded py-2">
                <div className="col-3">
                  <img src={img3} width="63px" alt="" />
                </div>
                <div className="col-9">
                  <p className="dbold">{data.order}</p>
                  <p className="pbold">Total Orders</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-1">
            <div className="col-lg-6 col-12 dbox rounded my-lg-0 my-2 bg-white specailshow">
              <div className="row">
                <div className="col-12 dtext py-2">10 Latest Customers</div>
                <div className="col-12 px-2">
                  <div className="underline"></div>
                </div>
              </div>
              <div className="headtb special">
                <div className="sno" style={{ position: 'relative', left: '8px' }}>Full Name</div>
                <div className="companylogo">Mobile</div>
                <div className="amount">Email</div>
              </div>
              {data.latestUsers.map((item, index) => (
                <div className="headtb" key={index}>
                  <div className="sno px-3">{`${item.first_name} ${item.last_name}`}</div>
                  <div>{item.mobile}</div>
                  <div className="amount">{item.email}</div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-12 dbox">
              <div className="row rounded bg-white">
                <div className="col-12 d-flex justify-content-between">
                  <div className="dtext py-2">10 Latest Orders</div>
                </div>
                <div className="col-12 px-2">
                  <div className="underline"></div>
                </div>
                <div className="headtb special">
                  <div className="sno" style={{ position: 'relative', left: '20px' }}>Order ID</div>
                  <div className="companylogo" style={{ position: 'relative', left: '50px' }}>Order Status</div>
                  <div className="amount">Amount</div>
                </div>
                {data.latestOrders.map((item, index) => (
                  <div className="headtb" key={index}>
                    <div className="sno px-3">{item.orderid}</div>
                    <div className="companylogo">{item.order_status}</div>
                    <div className="amount">₹{item.grand_total_amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
