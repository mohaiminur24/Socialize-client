import React from 'react';

const ContanerLayout = ({children}) => {
    return (
        <div className='my-10 w-11/12 mx-auto'>
            {children}
        </div>
    );
};

export default ContanerLayout;