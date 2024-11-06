import React, { useEffect } from "react";
import axios from "axios";

const Lists = ({ list, index, getNote }) => {
  const editBtn = document.getElementById("editBtn");

  let deleteData = async (id) => {
    try {
      await axios.delete(`https://django-react-to-do-list-3.onrender.com/api/lists/${id}`);
      getNote();
    } catch (e) {
      console.log(e);
    }
  };

  let editData = async (id) => {
    try {
      await axios.patch(`https://django-react-to-do-list-3.onrender.com/api/lists/${id}`, newTasks);
      console.log(newTasks);
    } catch (e) {
      console.log(e);
    }
  };

  editData(list.id);

  let handleEdit = () => {
    console.log(list.list);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">Check Box</div>
        <div className="col">{list.list}</div>
        <div className="col">{list.id}</div>
        <div className="col">Date Created</div>
        <div className="col  display-flex">
          <button
            type="button"
            onClick={() => deleteData(list.id)}
            class="btn btn-primary"
          >
            Delete
          </button>
          <button
            type="button"
            id="editBtn"
            class="btn btn-secondary"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Lists;
