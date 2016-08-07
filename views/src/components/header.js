import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render(){
        return(
            <div style={{ marginTop: 20 }}>
                <h1 className="text-xs-center">Welcome to the Survey</h1>
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
				  </ul>
				</nav>
            </div>
        )
    }
}

export default Header;
