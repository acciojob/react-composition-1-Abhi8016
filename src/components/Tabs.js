import React, { useState } from "react";

const Tabs = ({ tabs }) => {
    let [tabClicked, setTabClicked] = useState("");

    function handleClicked(contents){
        setTabClicked(contents)
    }

    return (
        <div>
            <ul>{
                tabs.map((value) =>
                    <li onClick={() => handleClicked(value.contents)}>{value.titles}</li>)
                }
            </ul>

            {
                tabClicked && <p>This is the content for {tabClicked}.</p>
            }
        </div>
    )

}

export default Tabs