
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const tabs = [
  { titles: "Tab 1", contents: "Tab 1" },
  { titles: "Tab 2", contents: "Tab 2" },
  { titles: "Tab 3", contents: "Tab 3" },]

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tabs tabs={tabs} />
    </div>
  )
}

export default App
