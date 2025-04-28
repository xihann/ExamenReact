import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/getUsers';

export const UserGrid = ({ searchUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (err) {
                setError("Error al cargar los usuarios");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchUser.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map(user => (
                <div key={user.id} className="user-card bg-blue-300 shadow rounded p-4">
                    <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Teléfono:</span> {user.phone}</p>
                    <p><span className="font-semibold">Empresa:</span> {user.company}</p>
                </div>
            ))}
        </div>
    );
};
