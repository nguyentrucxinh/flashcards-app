import React from 'react';
import './CardList.scss';

function CardList() {
  return (
    <div className="container crud-table">
      <div className="clearfix">
        <div className="form-inline pull-left">
          <button type="button" className="btn btn-success">
            <span className="glyphicon glyphicon-plus"> </span>Add
          </button>
        </div>
        <div className="form-inline pull-right">
          Search by name:
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Type name to search"
            />
          </div>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Front</th>
            <th>Back</th>
            <th>x</th>
            <th>x</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>id</td>
            <td>type</td>
            <td>front</td>
            <td>back</td>
            <td>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-left">
            <td colSpan="2">
              <b>Total </b>
            </td>
            <td className="text-center">100</td>
          </tr>
        </tbody>
      </table>
      <div className="crude-form__wrapper">
        <h3>Edit</h3>
        <h3>Add</h3>
        <form name="userForm">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Text
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Markdown
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="name">Front</label>
            <input
              className="form-control"
              id="editName"
              type="text"
              name="name"
              placeholder="Edit name"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Back</label>
            <input
              className="form-control"
              id="editCounty"
              type="text"
              name="country"
              placeholder="Edit country"
              required="required"
            />
          </div>
          <button type="button" className="btn btn-primary">
            <i className="glyphicon glyphicon-pencil"> </i>Save change
          </button>
          <button type="button" className="btn btn-primary">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardList;
