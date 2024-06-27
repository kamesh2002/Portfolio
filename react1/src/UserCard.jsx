const userData =[
    {
      name : "Abdul",
      city : "India",
      description:"President",
      skills:["UI/UX","Front End Development", "HTML", "CSS"], 
      online:false,
      profile: "Image/ABJ.jpeg",
    },
    {
        name : "Nehru",
        city : "India",
        description:"Prime Minister",
        skills:["UI/UX","Front End Development", "HTML", "CSS"], 
        online:false,
        profile: "Image/PJN.jpg",

    },
    {
        name : "Ambedkar",
        city : "India",
        description:"Lawyer",
        skills:["UI/UX","Front End Development", "HTML", "CSS"], 
        online:false,
        profile: "Image/Ambedkar.jpg",
    },
];


function User(props) {
    return (
        <div className = "card-container">
            <span className={props.online ? "pro online" : "pro offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className="img" alt = "user"/>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>{props.skills.map((skill,index) => (
                <li key={index}>{skill}</li>
                ))}
                </ul>
            </div>

        </div>

    );

}
 export const UserCard = () => {
  return ( 
  <>
  {
    userData.map((user,index) => (
        <User key ={index} 
        name = {user.name}
        city= {user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills= {user.skills}
     />
    ))
   }
  </>
 );
};

// ( 
  
//     <User name = "Abdul" city = "India" description="President" skills={[
//       "UI / UX", "Front-end developer","HTML", "CSS", "JavaScript","React","Node"]} online={true} profile ="Image/Ambedkar.jpg"/>
  
   
//   );

