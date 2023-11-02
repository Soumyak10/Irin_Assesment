import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList";

function App() {
    const [current, setCurrent] = useState({ Name: "", Email: "" });
    const [usersData, setUsersData] = useState([]);

    function setStorage(data) {
        localStorage.setItem("users", JSON.stringify(data));
    }

    function addUser(user) {
        const newdata = [...usersData, user];
        setUsersData(newdata);
        setStorage(newdata);
    }

    function handleEdit(user) {
        setCurrent({ ...user });
    }

    function updateUser(obj) {
        const data = usersData.map((user) => {
            if (user.id === obj.id) {
                user = obj;
            }
            return user;
        });

        setUsersData(data);
        setStorage(data);
        alert("User updated successfully.");
    }

    function handleDelete(id) {
        let data;
        if (confirm("The data will get deleted."))
            data = usersData.filter((user) => user.id !== id);
        setUsersData(data);
        setStorage(data);
    }

    useEffect(() => {
        let data = localStorage.getItem("users");
        data = JSON.parse(data);
        if (data === null) data = [];
        setUsersData(data);
    }, []);
    return (
        <div className="flex flex-col h-screen items-center">
            <Navbar />
            <div className="flex w-full h-full justify-evenly items-center">
                <UserInput
                    addUser={addUser}
                    updateUser={updateUser}
                    current={current}
                    setCurrent={setCurrent}
                />
                <UserList
                    usersData={usersData}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
}

export default App;
