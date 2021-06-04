import React, { useEffect, useState } from "react";
import ShoutOut from "../model/ShoutOut";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApi";
import ShoutOutCard from "./ShoutCard";
import ShoutOutForm from "./ShoutOutForm";


function ShoutOutList() {
  // array of shoutouts from the API
  const [ shoutouts, setShoutOuts ] = useState<ShoutOut[]>([]);
  const [ shoutOutsLoaded, setShoutOutsLoaded ] = useState(false);

  useEffect(() => {
    loadShoutOuts();
  }, []);

  function loadShoutOuts() {
    readAllShoutOuts().then(shoutOutApi => {
      setShoutOuts(shoutOutApi);
      setShoutOutsLoaded(true);
    });
  }

  function handleAddShoutOut(shoutOut: ShoutOut): void {
    createShoutOut(shoutOut).then(loadShoutOuts);
  }

    return (
        <div className="ShoutOutList">
                {!shoutOutsLoaded ? (
                    <p>Loading...</p>
                ) : shoutouts.length === 0 ? (
                    <p>No Shout Outs</p>
                ) : (
                    shoutouts.map((eachShout => 
                        <ShoutOutCard key={eachShout._id} shoutOut={eachShout} />))
                )}
                <h3>Leave a Shout out!</h3>
            <ShoutOutForm onSubmit = {handleAddShoutOut}/>
        </div>
    );
}

export default ShoutOutList;
