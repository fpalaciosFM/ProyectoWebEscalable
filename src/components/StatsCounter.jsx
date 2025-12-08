import React from 'react';

/**
 * StatsCounter
 * Small presentational component to show a stat number and label
 */
const StatsCounter = ({ value, label }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-3xl font-extrabold text-indigo-600">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    );
};

export default StatsCounter;
