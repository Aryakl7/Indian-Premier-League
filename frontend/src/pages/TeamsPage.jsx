import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../api';
import TeamCard from '../components/teams/TeamCard'; // Create this component
import Loader from '../components/Common/Loader'; // Create a simple loader

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTeams = async () => {
      try {
        setLoading(true);
        const response = await fetchTeams();
        setTeams(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching teams:", err);
        setError(err.message || 'Failed to fetch teams');
        setTeams([]); // Clear teams on error
      } finally {
        setLoading(false);
      }
    };
    getTeams();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;
  if (!teams.length) return <div className="text-center">No teams found.</div>;


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">IPL Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamsPage;