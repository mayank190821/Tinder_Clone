import React, { useEffect, useState } from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-cards";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }

        fetchData();
    }, []);
    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (Name) => {
        console.log(Name + "left the screen");
    };

    return (
        <div className="TinderCards">
            <div className="TinderCards_cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.Name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.Name)}
                        onCardLeftScreen={() => outOfFrame(person.Name)}>

                        <div
                            style={{
                                backgroundImage: `url(${person.imgUrl})`
                            }}
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

export default TinderCards;
