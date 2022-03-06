import React, { useState } from "react";
import api from "../api";

const UploadModal = ({ idModal, title }) => {
  const [state, setState] = useState([
    { previewFile: "", isLoading: false, documents: [] },
  ]);

  const handleFile = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setState({ ...state, previewFile: file });
  };

  const resetFile = () => {
    setState({ ...state, previewFile: "" });
  };

  return (
    <div>
      <div
        className="modal fade"
        id={idModal}
        tabIndex="-1"
        aria-labelledby={idModal}
        aria-hidden="true"
        data-mdb-backdrop="static"
        data-mdb-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="my-1">
                <label className="form-label" htmlFor="customFile">
                  Default file input example
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="customFile"
                  accept=".csv"
                />
                <button type="button" className="btn btn-primary">
                  Charger le fichier
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
