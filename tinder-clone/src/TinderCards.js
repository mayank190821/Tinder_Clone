import React, { useEffect, useState } from 'react'
import './TinderCards.css';
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([{"_id":"5fbe84aa37c0876fd604245c","Name":"Mayank Bhugra","imgUrl":"https://1.bp.blogspot.com/-uQZ-wIK5sRE/XhConF1U05I/AAAAAAAAAVs/Orhvd1jplgA_zdVzkCEryGzwNhRfydUrQCLcBGAsYHQ/s1600/pic.png","__v":0},{"_id":"5fbe84aa37c0876fd604245d","Name":"Elon Musk","imgUrl":"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg","__v":0},{"_id":"5fbe84aa37c0876fd604245e","Name":"Satya Nadela","imgUrl":"https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg","__v":0},{"_id":"5fbe84aa37c0876fd604245f","Name":"Rupin Bhugra","imgUrl":"https://media-exp1.licdn.com/dms/image/C5103AQE8K0PvBezHnw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=8c3afhMh6dVdpz8loOh1fZHKZLYC65dKtwkQrWn_OwA","__v":0},{"_id":"5fbe852837c0876fd6042460","__v":0},{"_id":"5fbe853137c0876fd6042464","Name":"Rupin Bhugra","imgUrl":"https://media-exp1.licdn.com/dms/image/C5103AQE8K0PvBezHnw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=8c3afhMh6dVdpz8loOh1fZHKZLYC65dKtwkQrWn_OwA","__v":0},{"_id":"5fbe853137c0876fd6042463","Name":"Satya Nadela","imgUrl":"https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg","__v":0},{"_id":"5fbe853137c0876fd6042461","Name":"Mayank Bhugra","imgUrl":"https://1.bp.blogspot.com/-uQZ-wIK5sRE/XhConF1U05I/AAAAAAAAAVs/Orhvd1jplgA_zdVzkCEryGzwNhRfydUrQCLcBGAsYHQ/s1600/pic.png","__v":0},{"_id":"5fbe853137c0876fd6042462","Name":"Elon Musk","imgUrl":"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg","__v":0},{"_id":"5fbe853f37c0876fd6042465","__v":0},{"_id":"5fbe858c37c0876fd6042466","Name":"Mayank Bhugra","imgUrl":"https://1.bp.blogspot.com/-uQZ-wIK5sRE/XhConF1U05I/AAAAAAAAAVs/Orhvd1jplgA_zdVzkCEryGzwNhRfydUrQCLcBGAsYHQ/s1600/pic.png","__v":0},{"_id":"5fbe858c37c0876fd6042468","Name":"Satya Nadela","imgUrl":"https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg","__v":0},{"_id":"5fbe858c37c0876fd6042467","Name":"Elon Musk","imgUrl":"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg","__v":0},{"_id":"5fbe858c37c0876fd6042469","Name":"Rupin Bhugra","imgUrl":"https://media-exp1.licdn.com/dms/image/C5103AQE8K0PvBezHnw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=8c3afhMh6dVdpz8loOh1fZHKZLYC65dKtwkQrWn_OwA","__v":0},{"_id":"5fbe85aa4c624f70bc567b34","Name":"Mayank Bhugra","imgUrl":"https://1.bp.blogspot.com/-uQZ-wIK5sRE/XhConF1U05I/AAAAAAAAAVs/Orhvd1jplgA_zdVzkCEryGzwNhRfydUrQCLcBGAsYHQ/s1600/pic.png","__v":0},{"_id":"5fbe85aa4c624f70bc567b35","Name":"Elon Musk","imgUrl":"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg","__v":0},{"_id":"5fbe85aa4c624f70bc567b36","Name":"Satya Nadela","imgUrl":"https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg","__v":0},{"_id":"5fbe85aa4c624f70bc567b37","Name":"Rupin Bhugra","imgUrl":"https://media-exp1.licdn.com/dms/image/C5103AQE8K0PvBezHnw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=8c3afhMh6dVdpz8loOh1fZHKZLYC65dKtwkQrWn_OwA","__v":0}]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }

        fetchData();
    }, []);
    console.log(people);
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
