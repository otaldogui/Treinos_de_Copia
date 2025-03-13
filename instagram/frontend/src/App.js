import React from "react";
import { BrowserRouter } from "./routes";

import Routes from "./routes";
import Header from "./componentsHeader";

function App() {
    return (
        <BrowserRouter>
        <Header />
        <Routes />
        </BrowserRouter>
    );
}

export default App;
