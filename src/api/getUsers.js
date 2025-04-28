export const getUsers = async() => {

    const url = "https://jsonplaceholder.typicode.com/users";

    const resp = await fetch(url);
    const data = await resp.json();
    const users = data.map(({ id, name, email, phone, company }) => ({
        id,
        name,
        email,
        phone,
        company: company.name 
    }));


    console.log(users)
    return users; 
};

