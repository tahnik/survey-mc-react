import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render(){
        return(
            <div>
                <div className="container-fluid customTop">
                    <h1 className="text-xs-center">London Office Design for 
the Future</h1>
                </div>
                { this.props.children }
                <nav aria-label="Page navigation" style={{ textAlign: 'center' }}>
				  <ul className="pagination">
				    <li className="page-item"><Link className="page-link" to={'/page1'}>1</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page2'}>2</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page3'}>3</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page4'}>4</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page5'}>5</Link></li>
					<li className="page-item"><Link className="page-link" to={'/page6'}>6</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page7'}>7</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page8'}>8</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page9'}>9</Link></li>
					<li className="page-item"><Link className="page-link" to={'/page10'}>10</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page11'}>11</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page12'}>12</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page13'}>13</Link></li>
                    <li className="page-item"><Link className="page-link" to={'/page14'}>14</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page15'}>15</Link></li>
                    <li className="page-item"><Link className="page-link" to={'/page16'}>16</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page17'}>17</Link></li>
                    <li className="page-item"><Link className="page-link" to={'/page18'}>18</Link></li>
				    <li className="page-item"><Link className="page-link" to={'/page19'}>19</Link></li>
				  </ul>
				</nav>
            </div>
        )
    }
}

export default Header;
