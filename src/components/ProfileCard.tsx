import React from "react";

type ProfileProps = {
  name: string;
  age: number;
  imageUrl: string;
};

const ProfileCard: React.FC<ProfileProps> = 
	({ name, age, imageUrl }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "5px",
			borderRadius: "8px", textAlign: "center", margin: "8px" }}>
      <img src={imageUrl} alt={name} 
	       style={{ width: "100px", borderRadius: "50%" }}
	   />
      <h2>{name}</h2>
      <p>Idade: {age}</p>
    </div>
  );
};

export default ProfileCard;