import React from "react";
import { switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

fuction ReadableStreamDefaultController() {
    return (
        <switch>
            <Route path="/" exact component={Feed} />
            <Route path="new" component={New} />
        </switch>
    );
}

export default Router;
