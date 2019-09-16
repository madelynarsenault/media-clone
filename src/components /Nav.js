import React from 'react';
import "../styles/Nav.css";


class Nav extends React.Component {
    constructor(){
        super();
        this.state ={
            menuOpenStatus: "drop-menu"
        }
    }
    toggle = () => {
        console.log("toggle");
        if (this.state.menuOpenStatus === 'drop-menu-close' || this.state.menuOpenStatus === 'drop-menu'){
            this.setState({menuOpenStatus: 'drop-menu-open'})
        } else if (this.state.menuOpenStatus === 'drop-menu-open'){
            this.setState({menuOpenStatus: 'drop-menu-close'})
        }
    }
    render(){
    return(
    <>
        
            <nav>
                <div>
                    <h1 className='bootstrap'>Start Bootstrap</h1>
                </div>
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Contact</li>
                        <li className="hamburger hidden-by-default">
                        <img 
                            onClick={this.toggle}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" 
                            alt="hamburger_button" />
                        </li>

                    </ul>
                </div>
            </nav>
            <section className="menu-design">
                    <div className={`${this.state.menuOpenStatus} hidden-by-default`}>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Services</h1>
                    <h1>Contact</h1>
                </div>
            </section>
                <div className="text">
                    <h2 className='welcome'>Welcome to our studio!</h2>
                    <h1 className='studio'>IT'S NICE TO MEET YOU</h1>
                </div>
                
    </>
    )
   }
}

export default Nav;