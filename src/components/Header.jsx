import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ getnotes }) => {
  let addTaskcon = document.getElementById("addTaskcon");
  let [newTasks, setnewTasks] = useState({
    list: "",
  });

  let postData = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/lists/", newTasks);
      getnotes();
      setnewTasks("");
      addTaskcon.value = "";
    } catch (e) {
      console.log(e);
    }
  };




  let handleOnchange = (e) => {
    setnewTasks((prev) => ({
      ...prev,
      list: e.target.value,
    }));
  };

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid">
          <div class="input-group">
            <input
              type="text"
              id="addTaskcon"
              class="form-control"
              placeholder="Enter Your tasks here..."
              onChange={handleOnchange}
            />
            <input
              type="button"
              value="Add"
              onClick={postData}
              className="btn btn-dark"
            />
          </div>
        </form>
      </nav>
    </>
  );
};

export default Header;
