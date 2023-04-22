import React, {useState,useEffect} from 'react'

function Form(props) {
  return (
    <div>
      <div className="col-md-7">
      <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                <input type="text"  className="form-control" placeholder="Enter Post Title" />
                </div>
            </div>

            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                <textarea type="text"  className="form-control" placeholder="Enter Post Description" rows="3" />
                </div>
            </div>
            <br />
            
            <button  className="btn btn-success">Update</button>
            :
            <button className="btn btn-primary">Post</button>
            
            </div>
    </div>
    
  )
}

export default Form

