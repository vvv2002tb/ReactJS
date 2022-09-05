import * as utils from "../utils/index";

const HomePage = () => {
  const phoneNumber = "0961907512";
  const isValidPhoneNumber = utils.validatePhoneNumber(phoneNumber);
  const arr = [
    {
      name: "John",
    },
    {
      name: "Hall",
    },
    {
      name: "Mary",
    },
    {
      name: "Barry",
    },
    {
      name: "Parents",
    },
  ];

  const renderName = () => {
    return arr.map((name, index) => {
      return <div key={index}>Name {index + 1}: {name.name}</div>;
    });
  };

  return (
    <>
      <div className="" style={{ backgroundColor: "#008080" }}>
        Home Page. Your phoneNumber: {phoneNumber},{" "}
        {isValidPhoneNumber ? "isValidPhoneNumber" : "not validatePhoneNumber"}
      </div>
      <div>{renderName()}</div>
    </>
  );
};

export default HomePage;
