import { Link } from "react-router-dom";
import "./shop.css";
import Chart from "../../components/chart/Chart";
import { shopData } from "dummyData";
import { Publish } from "@material-ui/icons";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitleContainer">
        <h1 className="shopTitle">Shop</h1>
        <Link to="/new-shop">
          <button className="shopAddButton">Create</button>
        </Link>
      </div>
      <div className="shopTop">
        <div className="shopTopLeft">
          <Chart data={shopData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="shopTopRight">
          <div className="shopInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="shopInfoImg"
            />
            <span className="shopName">Apple Airpods</span>
          </div>
          <div className="shopInfoBottom">
            <div className="shopInfoItem">
              <span className="shopInfoKey">id:</span>
              <span className="shopInfoValue">123</span>
            </div>
            <div className="shopInfoItem">
              <span className="shopInfoKey">sales:</span>
              <span className="shopInfoValue">5123</span>
            </div>
            <div className="shopInfoItem">
              <span className="shopInfoKey">active:</span>
              <span className="shopInfoValue">yes</span>
            </div>
            <div className="shopInfoItem">
              <span className="shopInfoKey">in stock:</span>
              <span className="shopInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shopBottom">
        <form className="shopForm">
          <div className="shopFormLeft">
            <label>Shop Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="shopFormRight">
            <div className="shopUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="shopUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="shopButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
