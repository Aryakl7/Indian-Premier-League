import React from 'react';
import { Link } from 'react-router-dom';

// A default placeholder image if team.logo_url is missing
const DEFAULT_LOGO_URL = 'https://via.placeholder.com/150/CCCCCC/FFFFFF?Text=No+Logo';


function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`} className="block border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="bg-gray-100 p-4 h-40 flex items-center justify-center">
         <img
            src={team.logo_url || DEFAULT_LOGO_URL}
            alt={`${team.name} logo`}
            className="max-h-full max-w-full object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src=DEFAULT_LOGO_URL; }} // Fallback if image fails to load
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 truncate" title={team.name}>{team.name}</h3>
        <p className="text-sm text-gray-600">{team.city || 'N/A'}</p>
      </div>
    </Link>
  );
}

export default TeamCard;