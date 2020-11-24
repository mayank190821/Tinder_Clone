import React, { useState } from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            Name: "Mayank Bhugra",
            url: "https://1.bp.blogspot.com/-uQZ-wIK5sRE/XhConF1U05I/AAAAAAAAAVs/Orhvd1jplgA_zdVzkCEryGzwNhRfydUrQCLcBGAsYHQ/s1600/pic.png",
        },
        {
            Name: "Elon Musk",
            url: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        },

        {
            Name: "Satya Nadela",
            url: "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
        },
        {
            Name: "Rupin Bhugra",
            url: "https://media-exp1.licdn.com/dms/image/C5103AQE8K0PvBezHnw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=8c3afhMh6dVdpz8loOh1fZHKZLYC65dKtwkQrWn_OwA",
        }
    ]);

    const swiped= (direction, nameToDelete)=>{
        console.log("removing" + nameToDelete);
    }

    const outOfFrame = (Name)=>{
        console.log(Name + "left the screen");
    };

    return (
        <div className="TinderCards">
            <div className="TinderCards_cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key = {person.Name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir,person.Name)}
                        onCardLeftScreen={()=>outOfFrame(person.Name)}>

                        <div
                            style={{
                                backgroundImage: `url(${person.url})`}}
                            className="card"
                            >
                                <h3 className="personName">{person.Name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards
