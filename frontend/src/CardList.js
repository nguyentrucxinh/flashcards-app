import React from 'react';
import './CardList.scss';

function CardList() {
  return (
    <div className="container crud-table">
      <div className="clearfix">
        <div className="form-inline pull-left">
          <button type="button" className="btn btn-success">
            <span className="glyphicon glyphicon-plus"> </span>Add more user
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
            <th>Name</th>
            <th>Country</th>
            <th>Salary</th>
            <th>Email</th>
            <th>x</th>
            <th>x</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>user.name</td>
            <td>user.country</td>
            <td>user.salary</td>
            <td>user.email</td>
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
            <td className="text-center">resultUser | totalSalary:salary</td>
            <td colSpan="3">x</td>
          </tr>
        </tbody>
      </table>
      <div className="crude-form__wrapper">
        <h3>Edit user</h3>
        <h3>Add user</h3>
        <form name="userForm">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="editName"
              type="text"
              name="name"
              placeholder="Edit name"
              required="required"
            />
            <div className="form-alert alert alert-danger">
              Please input name
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              className="form-control"
              id="editCounty"
              type="text"
              name="country"
              placeholder="Edit country"
              required="required"
            />
            <div className="form-alert alert alert-danger">
              Please input user country
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              className="form-control"
              id="editSalary"
              type="number"
              name="salary"
              placeholder="Edit salary"
              min="1"
              required="required"
            />
            <div className="form-alert alert alert-danger">
              <span>Please input valid number</span>
              <span>Please input salary greater than 1</span>
              <span>Please input salary</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="editEmail"
              type="email"
              name="email"
              placeholder="Edit email"
              required="required"
              min="1"
            />
          </div>
          <div className="form-alert alert alert-danger">
            <span>Please input valid email</span>
            <span>Please input email</span>
          </div>
          <div className="form-alert alert alert-danger">
            This email has been registerd by other user
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
