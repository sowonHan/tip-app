import React from "react";
import Header from "./components/Header";
import TipList from "./components/TipList";
import MyTip from "./components/MyTip";
import Footer from "./components/Footer";
import StateProvider from "./contexts/StateProvider";
import "./App.css";

function App() {
  return (
    <StateProvider>
      <Header />
      <div className="container">
        <TipList />
        <MyTip />
      </div>
      <Footer />
    </StateProvider>
  );
}

export default App;
