import React from 'react';

/**
 * TeamCard
 * Simple card for team member (illustrated style placeholder image)
 */
const TeamCard = ({ name, role, bio }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                {/* simple SVG avatar */}
                <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-indigo-600 mb-2">{role}</p>
            <p className="text-sm text-gray-600">{bio}</p>
        </div>
    );
};

export default TeamCard;
