import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/getUsers';

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
            {users.map(({id, name, email, phone, company}) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <p>Email: {email}</p>
                    <p>Teléfono: {phone}</p>
                    <p>Empresa: {company}</p>
                </div>
            ))}
        </div>
    );
};