import React from 'react';

export const PropsChild = ({firstname, old,frndName}) => {
    return (
        <div>
            <h2>My name is {firstname}.</h2>
            <h3> i am {old} year old.</h3>
            <h3>My friends name is {frndName }.</h3>
        </div>
    );
};
