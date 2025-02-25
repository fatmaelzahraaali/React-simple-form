
import './App.css';

function App() {

  return (
    <>
   
      <div className="d-flex justify-content-center align-items-center  p-5">
        <form className="border rounded-4 w-50 p-4 ">
          <h2 className="text-center mb-3">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name" className="mb-2">Enter your Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
        
          <div className="form-group">
            <label htmlFor="email" className="mb-2">Enter your Email</label>
            <input type="text" id="email" className="form-control" />
          </div>

          <div className="form-group mt-3">
          <label htmlFor="password" className="mb-2">Enter your Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
        
          <div className="form-check mt-3">
            <p>Gender:</p>
          <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              required
            />
            <label className="form-check-label" htmlFor="Male">Male</label> 
            <br/>

            <input
              className="form-check-input "
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              required
            />
            <label className="form-check-label" htmlFor="Female">Female</label>
          </div>
          
          <div className="form-check mt-3">
            <input type="checkbox" className="form-check-input" />
            <label>Remember Me</label>
          </div>

    


          <div className="d-flex justify-content-center">
            <button className="btn btn-success text-text-uppercase mt-3 px-3 fs-5">Sign Up</button>
          </div>



        </form>
        

      </div>
    </>
  )
}

export default App;
