import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { collection } from "../../img";
import PageTitle from "../../components/PageTitle";

const Ranking = (props) => {
  props.set(true);
  const list_one = [
    { link: "#", label: "Games", icon: "ri-gamepad-line" },
    { link: "#", label: "Art", icon: "ri-brush-line" },
    { link: "#", label: "Trading Cards", icon: "ri-stock-line" },
    { link: "#", label: "Music", icon: "ri-music-line" },
    { link: "#", label: "Domain Names", icon: "ri-global-line" },
    { link: "#", label: "Memes", icon: "ri-emotion-laugh-line" },
    { link: "#", label: "Collectibles", icon: "ri-layout-4-line" },
  ];
  const table_content = [
    {
      image: collection,
      number: 1,
      title: "Creative Art collection",
      vol: "12,4353",
      green: "+3456%",
      red: "-564%",
      fl_pr: "12,4354 ETH",
      owner: "3.3k",
      assest: "23k",
    },
    {
      image: collection,
      number: 1,
      title: "Creative Art collection",
      vol: "12,4353",
      green: "+3456%",
      red: "-564%",
      fl_pr: "12,4354 ETH",
      owner: "3.3k",
      assest: "23k",
    },
    {
      image: collection,
      number: 1,
      title: "Creative Art collection",
      vol: "12,4353",
      green: "+3456%",
      red: "-564%",
      fl_pr: "12,4354 ETH",
      owner: "3.3k",
      assest: "23k",
    },
    {
      image: collection,
      number: 1,
      title: "Creative Art collection",
      vol: "12,4353",
      green: "+3456%",
      red: "-564%",
      fl_pr: "12,4354 ETH",
      owner: "3.3k",
      assest: "23k",
    },
    {
      image: collection,
      number: 1,
      title: "Creative Art collection",
      vol: "12,4353",
      green: "+3456%",
      red: "-564%",
      fl_pr: "12,4354 ETH",
      owner: "3.3k",
      assest: "23k",
    },
  ];
  return (
    <>
      <div className="sp-bottom2x">
        <PageTitle title="Ranking NFT" />
        <div className="bg_white border-b py-20">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center">
                  <ul className="menu_categories space-x-20">
                    <li>
                      <Link to="#" className="color_brand">
                        <span> All </span>
                      </Link>
                    </li>
                    {list_one.map((list) => (
                      <li>
                        <Link to={list.link}>
                          <i class={list.icon}></i>
                          <span> {list.label} </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center sm:mt-20">
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle
                      className="btn btn-dark btn-sm dropdown-toggle"
                      variant="success"
                    >
                      All Chains
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#/action-1"
                      >
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#/action-2"
                      >
                        {" "}
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#/action-3"
                      >
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="dropdown">
                    <Dropdown.Toggle
                      className="btn btn-dark btn-sm dropdown-toggle"
                      variant="success"
                    >
                      All Chains
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item className="dropdown-item" to="#/action-1">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section ranking mt-100">
          <div className="container">
            <div className="box d-flex table-responsive">
              <table className="table ranking">
                <thead>
                  <tr>
                    <th scope="col">
                      <span>Collection</span>
                    </th>
                    <th scope="col">
                      <span>Volume</span>
                    </th>
                    <th scope="col">
                      <span>24h %</span>
                    </th>
                    <th scope="col">
                      <span>7d %</span>
                    </th>
                    <th scope="col">
                      <span>Floor Price</span>
                    </th>
                    <th scope="col">
                      <span>Owners</span>
                    </th>
                    <th scope="col">
                      <span>Assets</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {table_content.map((tc) => (
                    <tr>
                      <td>
                        <div className="collection space-x-10">
                          <div className="media">
                            <div className="has_number">{tc.number}</div>
                            <img
                              src={tc.image}
                              className="collection__img"
                              alt="pic"
                            />
                          </div>
                          <div>
                            <h6 className="title color_black">{tc.title}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{tc.vol}</span>
                      </td>
                      <td>
                        <span className="color_green">{tc.green}</span>
                      </td>
                      <td>
                        <span className="color_red">{tc.red}</span>
                      </td>
                      <td>
                        <span>{tc.fl_pr}</span>
                      </td>
                      <td>
                        <span>{tc.owner}</span>
                      </td>
                      <td>
                        <span>{tc.assest}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Ranking;
