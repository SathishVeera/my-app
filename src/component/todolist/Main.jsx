import { configureStore } from "@reduxjs/toolkit";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import App from "../../App";
import UserReducer from "./UserReducer";

const store = configureStore({
    reducer: {
        users: UserReducer
    }
})

ReactDom.createRoot(document.getElementById('root')).reducer(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)