import React from 'react';

const Header = ()=>{
    const creater =  'by Murtaza'
    return(
        // <h1>Expense Tracker App By Murtaza</h1>
        <h2 className='Header' ><u>Expense Tracker App<br/>{creater}</u></h2>
    );
}

export default Header;