function UserInput({ addUser, updateUser, current, setCurrent }) {
    function handleSubmit() {
        if (current.id === undefined)
            addUser({ ...current, id: new Date().getTime() });
        else updateUser({ ...current });
        handleClear();
    }

    function handleClear() {
        setCurrent({ Name: "", Email: "" });
    }

    return (
        <div className="w-2/5 h-3/5 p-8 bg-white rounded-xl shadow-lg flex flex-col justify-between">
            <h2 className="text-4xl font-black">Enter User Details</h2>
            <div className="flex flex-col">
                <label className="flex items-center justify-between text-lg">
                    Name
                    <input
                        type="text"
                        className="my-4 w-3/4 border-2 px-2 py-1 border-black rounded-md"
                        value={current.Name}
                        onChange={(e) =>
                            setCurrent({ ...current, Name: e.target.value })
                        }
                    />
                </label>
                <label className="flex items-center justify-between text-lg">
                    Email
                    <input
                        type="email"
                        className="my-4 w-3/4 border-2 px-2 py-1 border-black rounded-md"
                        value={current.Email}
                        onChange={(e) =>
                            setCurrent({ ...current, Email: e.target.value })
                        }
                    />
                </label>
            </div>
            <div className="flex">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-black text-white px-6 py-2 rounded-3xl mr-4"
                >
                    Submit
                </button>
                <button
                    onClick={handleClear}
                    className="bg-black text-white px-6 py-2 rounded-3xl"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default UserInput;
