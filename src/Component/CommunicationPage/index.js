import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../DashboardPage';

const CommunicationsPage = () => {
    const token = localStorage.getItem('token');
    const [communications, setCommunications] = useState([]);

    useEffect(() => {
        const fetchCommunications = async () => {
            try {
                const response = await axios.get('http://localhost:3003/communications', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Make sure to include the authorization header
                    }
                });
                setCommunications(response.data);
            } catch (error) {
                console.error('Error fetching communications:', error);
            }
        };

        fetchCommunications();
    }, []);

    return (
        <div className="flex">
            <Dashboard />
            <div className="container">
                <h1 className="text-3xl font-bold mb-4">Communications</h1>
                {communications.length ? (
                    <ul className="divide-y divide-gray-200">
                        {communications.map((comm) => (
                            <li key={comm._id} className="py-4">
                                <div className="bg-gray-100 rounded-md p-4 shadow-md">
                                    <p className="text-gray-800 font-semibold mb-2">{new Date(comm.createdAt).toLocaleDateString()}</p>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li className="leading-relaxed">{comm.suggestion}</li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700">No communications found.</p>
                )}
            </div>
        </div>
    );
};

export default CommunicationsPage;
