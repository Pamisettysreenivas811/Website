import React from 'react'

import img11 from './images/img11.jpeg'

function WhyUs() {
  return (
    <section>
    <div className="container-fluid padding mt-5">
      <div className="row welcome text-center">
       <div className="col-12 col-lg-6">
        <div className="col-12 mb-4">
          <h1 className="display-4">Why Aryavart Staffing Solutions</h1>
        </div>
        <hr />
        <div className="col-12">
          <p className="lead mt-5">
            Aryavart Expo staffing solutions  business philosophy is to assure the highest quality product, total client satisfaction, delivery in time and the best quality/price ratio found in the industry. Our core strength is our commitment to solving complex problems and de- livering high quality solutions within committed time frames and budgets. Our software development consultants include tech-savvy engineers, business analysts, architects and project managers.
          </p>
        </div>
       </div>

       <img src={img11} className="col-12 col-lg-6" alt=""/>
      </div>
    </div>
  </section>
  )
}

export default WhyUs
