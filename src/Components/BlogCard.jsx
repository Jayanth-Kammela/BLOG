import React from 'react'
import { Container } from '@mui/material'

const BlogCard = () => {
  return (
    <React.Fragment>
      {/* <div className="container-fluid"> */}

      <Container maxWidth='xl' className='my-5' >
        <div className="row justify-content-center">

          <div className="col-lg-3 col-md-5 col-sm-8 m-4">
            <div className="card-main">
              <div className="card-header">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHN0YWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="card-body">
                <span className="tag">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                  tenetur distinctio neque?
                </p>
                <div className="user">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                  <div className="user-info">
                    <h5>Jerome Walton</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-8 m-4">
            <div className="card-main">
              <div className="card-header">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHN0YWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="card-body">
                <span className="tag">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                  tenetur distinctio neque?
                </p>
                <div className="user">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                  <div className="user-info">
                    <h5>Jerome Walton</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-8 m-4">
            <div className="card-main">
              <div className="card-header">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHN0YWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="card-body">
                <span className="tag">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                  tenetur distinctio neque?
                </p>
                <div className="user">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                  <div className="user-info">
                    <h5>Jerome Walton</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* </div> */}

    </React.Fragment>
  )
}

export default BlogCard