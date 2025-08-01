import React from 'react'
let pro=[1,2,3,4,5,6,7,8,9,10,11,12]
function Shimmer() {
  return (
    <>
         <div className="container mt-5">
                <div className="row">
                    {
                        pro.map((ele)=>{
                            
                            return(
                                <>
                                    <div className="col-md-3">
                                        <div className="card mb-3">
                                            <div className="card-header">
                                                <img src=''className="img-fluid" />
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default Shimmer