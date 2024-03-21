import React from "react";
import QuestAPI from "../QuestItemPull";

function QuestItems() {

    return (
        <>
            <div className="questitems-header">
                <h1>Quest Items</h1>
            </div>
            <QuestAPI/> 
        </>
    )
}

export default QuestItems;