import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { AiFillInfoCircle } from 'react-icons/ai';
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import "./collections.css";
import Toggle from 'react-bootstrap-toggle';

const Category = [
  { title: "Art", logo: "", url: "" },
  { title: "Collectibles", logo: "", url: "" },
  { title: "Music NTFs", logo: "", url: "" },
  { title: "Photography", logo: "", url: "" },
  { title: "Sports NFTs", logo: "", url: "" },
  { title: "Trending Card NFTs", logo: "", url: "" },
  { title: "Utility Nfts", logo: "", url: "" },
]
const Blockchain = [
  { title: "Ethereum", logo: "", url: "" },
  { title: "BNB Chain", logo: "", url: "" },
  { title: "Abritrum", logo: "", url: "" },
  { title: "Abritrum Nova", logo: "", url: "" },
  { title: "Klaytn", logo: "", url: "" },
  { title: "Polygon", logo: "", url: "" },
  { title: "Solona", logo: "", url: "" },
]
const CollectionProfile = (props) => {
  props.set(true);
  const init = Object.freeze({});
const [form, setForm] = useState(init)
  const [formLinks, setFormLinks] = useState(init)
  const [celinks, setCelinks] = useState([{}]);
  // const celinks = [];
  const [add, setAdd] = useState([{}]);
  const handleAdd = () => {
    setAdd([...add, {}])
  }
  const handleRemove = (index) => {
    // setAdd([...add, {}])
    const toggle = [...add]
    toggle.pop(index, 1)
    setAdd(toggle);
  }
  const handleChange =(e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log("data", form);
  }
  const handleChange1 =(e) =>{
    setFormLinks({
      ...formLinks,
      [e.target.name]: e.target.value,
    });
    setForm({
      ...form,
      links :formLinks
    })
    console.log("data", form);
  }
  const handleChange2 =(e, key) =>{
    // setCelinks({
    //   ...celinks,
    //   [e.target.name]: e.target.value,
    // });
    console.log(e.target.value, celinks, key);
    const newArray = add.map((item, i) => {
      console.log("test start :", key, i);
      if (key === i) {
        console.log("test 1 passed");
        return { ...item, [e.target.name]: e.target.value };
      } else {
        console.log("test 1 Failed");
        return item;
      }
    })
    setAdd(newArray)
    console.log(newArray, celinks);
    setForm({
      ...form,
      creatorEarning: newArray
    })
    console.log("data", form);
  }
  console.log(add);
  const register = async () => {
    console.log(form);
    const config = {
      method: "post",
      cors: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    };
    console.log("test 2 completed")
    await fetch(`https://faithful-garters-crab.cyclic.app/api/collection/createCollection`, config)
      .then((response) => response.json())
      .then(function (res) {
        console.log("response", res);
        return res;
      })
  };

  return (
    <div className="body createP-bg py-5 d-flex align-item-center justify-content-center">
      <div className='bg-white collectionProfile align-item-center justify-content-center py-5' style={{ borderRadius: '12px' }}>
        <h1 className="text-center my-3">
          Create a Collection
        </h1>
        <div className='mx-4'>
          <div>
            <span style={{ fontSize: '12px' }}>
              <span className="" style={{ color: "red" }}>*</span>
              Required fields
            </span>
          </div>

          <div>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Logo Image
              <span className="" style={{ color: "red" }}>*</span>
            </span>
          </div>
          <div>
            <div>
              This image will also be used for navigation. 350 x 350 recommended.
            </div>
            {/* <span className=""> */}
            <div className="rounded-circle my-4 logoImg upload_file"  >
              <div className="icon rounded-circle" style={{ border: "2px solid transparent" }}>
                <HiOutlinePhotograph size={92} className="ytyt" />
                <input type="file" />
              </div>
            </div>
            {/* </span> */}
          </div>
        </div>
        <div className='mx-4'>
          {/* <div>
            <span style={{ fontSize: '12px' }}>
              <span className="" style={{ color: "red" }}>*</span>
              Required fields
            </span>
          </div> */}

          <div>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Featured image
              {/* <span className="" style={{ color: "red" }}>*</span> */}
            </span>
          </div>
          <div>
            <div>
              This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.</div>
            {/* <span className=""> */}
            <div className="my-4 FeaturedImg upload_file" >
              <div className="icon" style={{ borderRadius: "7px", border: "2px solid transparent" }}>
                <HiOutlinePhotograph size={92} className="ytytq" />  
                              <input type="file" />

              </div>
            </div>
            {/* </span> */}
          </div>
        </div>
        <div className='mx-4'>
          <div>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Banner image
              {/* <span className="" style={{ color: "red" }}>*</span> */}
            </span>
          </div>
          <div>
            <div>
              This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 350 recommended.{/* <span className=""> */}
              <div className="my-4 upload_file" style={{ borderRadius: "7px", border: "3px dotted gray", width: "100%", heigth: "auto" }} >
                <div className="icon" style={{ borderRadius: "7px", border: "2px solid transparent" }}>
                  <HiOutlinePhotograph size={92} className="ytytqa" />
                  <input type="file" />


                </div>
              </div>
              {/* </span> */}
            </div>
          </div>
        </div>
        <div className="mx-4">
          {/* <div> */}
          <Form.Group className="col-md-12 form-group">
            <span>
              <h5>
                Name
                <span className="form-group" style={{ color: "red" }}>*</span>
              </h5>
            </span>
            <Form.Control
              type="text"
              id="number"
              placeholder="Example: Treasure of the Sea"
              name="name"
            onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-md-12 form-group">
            <span>
              <h5>

                URL
              </h5>
              <div>
                Customize your URL on OpenSea. Must only contain lowercase letters, numbers, and hyphens.
              </div>
            </span>
            <Form.Control
              className="my-3"
              type="text"
              id="number"
              placeholder="https://opensea.io/collection/treasures-of-the-sea"
              name="url"
            onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="col-md-12 form-group">
            <span>
              <h5>
                Description
              </h5>
              <div>
                Markdown syntax is supported. 0 of 1000 characters used.              </div>
            </span>
            {/* <Form.Control
                type="text"
                id="number"
                placeholder="https://opensea.io/collection/treasures-of-the-sea"
                name="totalAmount"
                // onChange={handleChange}
              /> */}
            <textarea
              type="text"
              name="description"
              id=""
              className="border my-3 color-black w-100 h-100  outline-none"
              placeholder=""
            onChange={handleChange}
            />
          </Form.Group>

          <span>
            <h5>
              Category
            </h5>
            <div>
              Adding a category will help make your item discoverable on DtoC.</div>
          </span>
          <Form.Group className="col-md-6 form-group">
            <select
              className="my-3"
              onChange={handleChange}
              name="category" placeholder='Add Category' id="">
              <option value="">
                Add Category
              </option>
              {Category.map((cat) => (
                <option name="category" value={cat.title}>{cat.title}</option>
              ))}
            </select>
            {/* <Form.Control
                type="text"
                id="number"
                placeholder="https://opensea.io/collection/treasures-of-the-sea"
                name="totalAmount"
              // onChange={handleChange}
              /> */}
          </Form.Group>
          <Form.Group className='col-md-12 form-group rounded my-3 p-3' style={{ background: "rgba(246, 251, 244, 0.14)" }}>
            <AiFillInfoCircle size={23} style={{ color: "#7787e0" }} />
            <span className='ms-2' style={{ fontWeight: "bold" }}>
              New categories and tags coming soon
            </span>
            <div className="ms-4">
              The category selection above will be going away soon. The category you choose below will appear on your collection and item pages. Categories and tags will also appear in other places throughout OpenSea soon. Select or confirm the category and tags for your collection.
              <span style={{ color: "blue" }}>
                Learn more
              </span>
              <div>
                <select
                  className="my-3"
                  onChange={handleChange}
                  name="subcategory" placeholder='Add Category' id="">
                  <option value="">
                    Add Category
                  </option>
                  {Category.map((cat) => (
                    <option name="subcategory" value={cat.title}>{cat.title}</option>
                  ))}
                </select>
              </div>
              <span>
                You can review and change your category and tags at any time. Don't see the right category?
                <span style={{ color: "blue" }}>
                  Send us feedback
                </span>
              </span>
            </div>
          </Form.Group>


          <Form.Group className="col-md-12 form-group">
            <span>
              <h5>
                Links
              </h5>
            </span>
            <Form.Control
              type="text"
              id="number"
              placeholder="Example: Treasure of the Sea"
              name="internet"
              className="border-top"
            onChange={handleChange1}
            />
            <Form.Control
              type="text"
              id="number"
              placeholder="Example: Treasure of the Sea"
              name="medium"
              style={{ borderRadius: "opx" }}
            onChange={handleChange1}
            />
            <Form.Control
              type="text"
              id="number"
              placeholder="Example: Treasure of the Sea"
              name="telegram"
            onChange={handleChange1}
            />
          </Form.Group>
          <div>
            <h5>
              Creator earnings
            </h5>
            Collection owners can collect creator earnings when a user re-sells an item they created. Contact the collection owner to change the collection earnings percentage or the payout address.
            <div>
              {add.map((add, i) => (
                <>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <Form.Group className="col-8 form-group">
                      {/* <span>span> */}
                      <Form.Control
                        type="text"
                        id="number"
                        placeholder="Please Enter a Address"
                        name="address"
                        className="border-top"
                      onChange={(e)=>handleChange2(e, i)}
                      />
                    </Form.Group>
                    <Form.Group className="col-3 ms-2 form-group">
                      {/* <span>span> */}
                      <Form.Control
                        type="number"
                        id="number"
                        placeholder="%"
                        name="per"
                        className="border-top" 
                        onChange={(e) => handleChange2(e, i)}

                      />
                    </Form.Group>
                    <Form.Group className="col-md-1 form-group">
                      <MdDeleteOutline style={{ cursor: "pointer" }}
                        onClick={() => handleRemove(i)}
                        size={28} />
                    </Form.Group>
                  </div>
                </>
              ))}
              <button className='my-3 btn-lg' onClick={handleAdd} style={{ background: "rgba(246, 251, 244, 0.14)" , borderRadius: "7px", fontWeight: "bold", border: "1px solid gray" }}>
                <span className="m-3">
                  Add Address
                </span>
              </button>
            </div>
          </div>
          <Form.Group className="col-md-12 my-2 form-group">
            <span>
              <h5>
                Blockchain
              </h5>
              <div>
                Select the blockchain where you'd like new items from this collection to be added by default.
              </div>
            </span>
            <select name="blockchain"
              className="my-3"
              onChange={handleChange}
              placeholder='Add Category' id="">
              <option value="">
                Ethereum
              </option>
              {Blockchain.map((cat) => (
                <option name="blockchain" value={cat.title}>{cat.title}</option>
              ))}
            </select>
            {/* <Form.Control
                type="text"
                id="number"
                placeholder="https://opensea.io/collection/treasures-of-the-sea"
                name="totalAmount"
              // onChange={handleChange}
              /> */}
          </Form.Group>
          <Form.Group className="col-md-12 form-group">
            <span>
              <h5>
                Payment tokens
              </h5>
              <div>
                These tokens can be used to buy and sell your items.
              </div>
            </span>
            <div className="my-4 d-flex gap-4">
              <div className="eth border d-flex align-item-center justify-content-evenly p-2">
                <div>
                  <FaEthereum className="mt-3" size={23} />
                </div>
                <div>
                  <h5>WETH</h5>
                  <span>Ethereum</span>
                </div>
              </div>
              <div className="eth border d-flex align-item-center justify-content-evenly p-2" >
                <div>
                  <FaEthereum className="mt-3" style={{ color: "pink" }} size={23} />
                </div>
                <div>
                  <h5>ETH</h5>
                  <span>Ethereum</span>
                </div>
              </div>
            </div>
            <select name="paymentTokens" 
              onChange={handleChange}
             placeholder='Add Category' id="">
              <option value="">
                Ethereum
              </option>
              {Blockchain.map((cat) => (
                <option name="paymentTokens" value={cat.title}>{cat.title}</option>
              ))}
            </select>
            {/* <Form.Control
                type="text"
                id="number"
                placeholder="https://opensea.io/collection/treasures-of-the-sea"
                name="totalAmount"
              // onChange={handleChange}
              /> */}
          </Form.Group>
          <Form.Group className="col-md-12 form-group d-flex align-items-center justify-content-between">
            <span>
              <h5>
                Explicit & sensitive content
              </h5>
              <div>
                Set this collection as explicit and sensitive content.
              </div>
            </span>
            <span>
              <span class="material-switch pull-right mb-2 mx-3">
                <input id="someSwitchOptionSecondary"
                  onChange={handleChange}
                 name="explicitSensitive" type="checkbox" />
                <label for="someSwitchOptionSecondary" className="label-Secondary"></label>
              </span>
            </span>
           </Form.Group>
          <Form.Group className="col-md-12 form-group d-flex align-items-center justify-content-between">
            <span>
              <h5>
                Show OpenRarity ranking
              </h5>
              <div>
                Turn on after all items revealed and attribute metadata is finalized.
              </div>
            </span>
            <span>
              <span class="material-switch pull-right mb-2 mx-3">
                <input id="someSwitchOption"
                  onChange={handleChange}
                 name="openRarity" type="checkbox" />
                <label for="someSwitchOption" className="label-Secondary"></label>
              </span>
            </span>
          </Form.Group>

          <button className="btn-lg" onClick={register} style={{ background: "rgba(246, 251, 244, 0.14)" , borderRadius: "12px", border: "1px solid gray" }}>
            Create
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile