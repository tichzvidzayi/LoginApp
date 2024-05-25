// src/components/Home.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [favoritePokemon, setFavoritePokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setFavoritePokemon(response.data.favorite_pokemon);
      } catch (err) {
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Home</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Your favorite Pokémon: <span className="font-bold text-blue-500">{favoritePokemon}</span>
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
