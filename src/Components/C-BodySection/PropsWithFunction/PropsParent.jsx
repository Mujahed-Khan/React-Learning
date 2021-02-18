import React from 'react';
import { PropsChild } from './PropsChild';

export const PropsParent = () => {
    const age = "25";
    const frndName = "idris";
    return (
        <div>
            <PropsChild firstname="Mujahed" old={age} frndName={frndName} />
        </div>
    );
};
