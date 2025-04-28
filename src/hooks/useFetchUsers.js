import React, { useEffect, useState } from 'react';
import { getUsers } from './path/to/your/api'; // Asegúrate de que la ruta sea correcta

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Teléfono: {user.phone}</p>
                    <p>Empresa: {user.company}</p>
                </div>
            ))}
        </div>
    );
};