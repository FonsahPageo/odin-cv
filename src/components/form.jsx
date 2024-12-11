// import { useState } from "react";
import "../styles/form.css";

export function CreateCv() {
  return (
    <div className="formContent">
      <div className="personalDetails">
        <h1>Personal Details:</h1>
        <form action="">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" name="fullName" id="fullName" placeholder="Johnny White"/>

          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" id="jobTitle" placeholder="Accountant"/>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johnwhite23@gmail.com"
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="(+237) 671-23-45-67"
          />

          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" placeholder="Sreet name, town"/>

          <div>
            <button>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>
      <div className="profile">
        <h1>Profile</h1>
        <form action="">
          <textarea placeholder="Summary" />
          <div>
            <button>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>
      <div className="education">
        <h1>Education</h1>
        <form action="">
          <label htmlFor="school">School:</label>
          <input type="text" name="school" id="school" />
          <label htmlFor="program">Program of Study:</label>
          <input type="text" name="program" id="program" />
          <label htmlFor="degree">Degree conferred</label>
          <select name="degree" id="degree">
            <option value="hnd">HND</option>
            <option value="bachelor">Bachelor</option>
          </select>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" name="startDate" id="startDate" />
          <label htmlFor="endDate">End Date:</label>
          <input type="date" name="endDate" id="endDate" />
          <div>
            <button>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>
      <div className="experience">
        <h1>Profesional Experience</h1>
        <form action="">
          <label htmlFor="fname">Job Title:</label>
          <input type="text" name="job" id="fname" />
          <label htmlFor="lname">Company name:</label>
          <input type="text" name="lname" id="fname" />
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" name="startDate" id="startDate" />
          <label htmlFor="endDate">End Date:</label>
          <input type="date" name="endDate" id="endDate" />
          <div>
            <button>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
