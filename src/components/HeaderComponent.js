import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import "../App.css";
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isNavOpen: false
  //   }
  //   // we can also used arrow function in the jsx
  //   this.togglerNav = this.togglerNav.bind(this);
  // }
  // togglerNav() {
  //   this.setState({
  //     isNavOpen: ! this.state.isNavOpen
  //   });
  // }
  // render() {
  //   return (
  //     // i can also write react fragement as <></>
  //     <React.Fragment>
  //       <Navbar dark expand="md">
  //         <div className="container">
  //           {/* <div className='col-md-4'> */}
  //           <NavbarToggler onClick={this.toggleNav} />
  //           {/* <NavbarBrand href="\">
  //             <img src='assets/images/logo.png' height="20" width="41" alt="Mahajan Restaurant" />
  //           </NavbarBrand> */}

  //           {/* </div> */}
  //           {/* collapse reactstrap component */}
  //           {/* isopen is a boolean attribute if isopen false all things inside hidden and is true then all things visible */}
  //           {/* <div className='col-md-8'> */}
  //           <Collapse isOpen={this.state.isNavOpen} navbar>
  //             <Nav navbar>
  //               <NavItem>
  //                 <NavLink className="nav-link" to="/home">
  //                   <span className="fa fa-home "></span>Home
  //                 </NavLink>
  //               </NavItem>
  //               <NavItem>
  //                 <NavLink className="nav-link" to="/aboutus">
  //                   <span className="fa  fa-info"></span>About
  //                 </NavLink>
  //               </NavItem>
  //               <NavItem>
  //                 <NavLink className="nav-link" to="/menu">
  //                   <span className="fa  fa-list "></span>Menu
  //                 </NavLink>
  //               </NavItem>
  //               <NavItem>
  //                 <NavLink className="nav-link" to="/contactus">
  //                   <span className="fa  fa-address-card"></span>Contact
  //                 </NavLink>
  //               </NavItem>
  //             </Nav>
  //           </Collapse>
  //         </div>
  //         {/* </div> */}
  //       </Navbar>
        // {/* <Jumbotron> */}
        constructor(props) {
          super(props);
      
          this.toggleNav = this.toggleNav.bind(this);
          this.state = {
            isNavOpen: false
          };
        }
  
        toggleNav() {
          this.setState({
            isNavOpen: !this.state.isNavOpen
          });
        }
  
      render() {
          return(
              <div>
                  <Navbar dark expand="md">
                      <div className="container">
                        <div className='row'>
                          <div className="col-md-1">
                          <NavbarToggler onClick={this.toggleNav} />
                          <NavbarBrand className="mr-0" href="/"> 
                             <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                          </NavbarBrand>
                          </div>
                          <div className="col-md-7 ml-0">
                          <Collapse isOpen={this.state.isNavOpen} navbar>
                              <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                              </NavItem>
                              </Nav>
                          </Collapse>
                          </div>
                      </div>
                      </div>
                  </Navbar>
                  

        <div id='jumbotron' >
          <div className="container ">

            <div className="row row-header ">

              <div className="col-12 col-md-6 ">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

              </div>
            </div>
          </div>
        </div>



        {/* </Jumbotron> */}
      </div>
    );
  }
}

export default Header;
