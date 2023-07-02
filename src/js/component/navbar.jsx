import React from "react";

const NavBar = () => {
    return (
        <div className="divNavBar">

            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5 d-flex">
                <div className="container-fluid">
                
                        <a className="navbar-brand fs-3" href="#">Start Bootstrap</a>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contanct</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;