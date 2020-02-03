import React from 'react';
import {Link} from 'react-router-dom';


const Header = ({children}) => {

    const style = {
        display: 'inline-block',
        margin: 10
      };

    return (
        <div>
            <div>
                <h3 style = {style} > <Link to = '/'>Home</Link></h3>
                <h3 style = {style}> <Link to = '/personCard'>Get Person</Link></h3>
                <h3 style = {style}> <Link to = '/findPerson'>Find Person</Link></h3>
                <h3 style = {style}> <Link to = '/deletePerson'>Delete Person</Link></h3>
                <h3 style = {style}> <Link to = '/addPerson'>Add Person</Link></h3>
                <h3 style = {style}> <Link to = '/editPerson'>Edit Person</Link></h3>

            </div>
            {children}
        </div>
    )



}

export default Header;