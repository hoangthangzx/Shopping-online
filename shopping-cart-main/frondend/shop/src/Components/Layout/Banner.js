import React from "react";

function Banner() {
    return (
        <div className="banner container-fluid">
            <div className="row border-0">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="container ">
                        <h5 className="display-3 fw-bolder mb-0">Itsuna</h5>
                        <p className="lead fs-2">
                        Success isn't always about greatness. It's about consistency. Consistent hard work gains success.
                            Greatness will come.
                        </p>
                    </div>
                </div>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenshin.ch%2Fvi-aiart-052&psig=AOvVaw1nGGsqiwyc6rK7elFysv_n&ust=1709550925975000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCjvtD714QDFQAAAAAdAAAAABAD"
                    className="col-md-6"
                    alt="..."
                    height={"550px"}
                />
            </div>
        </div>
    );
}

export default Banner;
