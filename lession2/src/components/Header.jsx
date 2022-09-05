import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState({
    name: "Tu Anh",
    age: 50,
  });

  const [students, setStudent] = useState([
    {
      name: "A",
    },
    {
      name: "B",
    },
    {
      name: "C",
    },
  ]);

  const handleClick = () => {
    console.log("Click change user");
    setUser({
      name: "Trong Vinh",
      age: 20,
    });

    // add students to the list
    setStudent([...students, {name: "D"}])
    alert("Add successful")
  };
  return (
    <div>
      <button
        style={{ width: "10vw", height: "30px", border: "1px solid green" }}
        onClick={handleClick}
      >
        Change
      </button>
      <div>{user.name}</div>
      <div>{user.age}</div>

      <div>
        {students.map((student, index) => {
          return <div key={index}>{student.name}</div>;
          
        })}
      </div>
    </div>
  );
};

export default Header;
