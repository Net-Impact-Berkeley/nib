import React from 'react';
import Value from './value';
import valuesData from './data/values';

const Values = () => {
    return (
        <div>
            {valuesData.map((valueData) => {
                return <Value {...valueData} key={valueData.description} />;
            })}
        </div>
    );
};

export default Values;