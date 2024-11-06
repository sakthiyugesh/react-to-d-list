import React from "react";
import { useState, useEffect } from "react";
import Lists from "../components/Lists";
import axios from "axios";
import Header from "../components/Header";

const Homelist = () => {
  let [lists, setLists] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await axios.get("https://django-react-to-do-list-3.onrender.com/api/lists/");
    setLists(response.data);
  };

  
  return (
    <>
      <Header getnotes={getNotes} />
      <div className="container text-center">
        <div className="row">
          <div className="col">Check Box</div>
          <div className="col">Tasks</div>
          <div className="col">Status</div>
          <div className="col">Date Created</div>
          <div className="col">Actions</div>
        </div>
        <hr />
        {lists.map(
          (list, index) => (
            <Lists list={list} key={index} getNote={getNotes} />
          )

          // console.log(list.list)
        )}
      </div>
    </>
  );
};

export default Homelist;
