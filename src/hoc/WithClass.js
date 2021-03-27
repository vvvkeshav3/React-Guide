import React from 'react';

const withClass = (WrappedComponent, classes) =>{

    return props=>(
        <div className = {classes}>
            <WrappedComponent {...props} />
        </div>
    );

}
export default withClass;