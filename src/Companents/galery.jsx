import React from 'react'

function Galery() {
    return (
        <div className="row galery">
            <div className="col-lg-6"><div><img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png" alt="" /></div></div>
            <div className="col-lg-3"><div><img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png" alt="" /></div></div>

            <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-12 mb-4"><div><img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png" alt="" /></div></div>
                </div>
                <div className="row">
                    <div className="col-lg-12"><div><img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png" alt="" /></div></div>
                </div>
            </div>
        </div>
    )
}

export default Galery