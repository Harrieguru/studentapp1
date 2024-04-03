import React from 'react'
import '../Form.css'

const StudentForm = () => {
  return (
    <div>
      <form>
        <div className="row">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" placeholder='Harriet'/>
        </div>
        <div className="row">
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder='xyz@gmail.com'/>
        </div>
        <div className="row">
            <label htmlFor="">Phone Number</label>
            <br />
            <input type="text" placeholder='12345678'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
