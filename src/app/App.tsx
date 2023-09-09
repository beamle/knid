import React from 'react';
import './App.css';
import ShipmentsTable from "../components/ShipmentsTable/ShipmentsTable";
import {Route, Routes} from 'react-router-dom';
import {OrderProfile} from "../components/Order/OrderProfile/OrderProfile";
import {createTheme, LinearProgress, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {AppStatusTypes} from "./reducers/app-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

function App() {
    const appStatus = useSelector<AppRootStateType, AppStatusTypes>(state => state.app.status)

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <ErrorSnackbar/>
                <div className="header"></div>
                {appStatus === "loading" && <LinearProgress/>}
                <Routes>
                    <Route>
                        <Route path="/orderProfile/:orderNo" element={<OrderProfile/>}/>
                        <Route path="/" element={<ShipmentsTable/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
