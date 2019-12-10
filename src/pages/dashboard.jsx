import { Button, Heading } from "grommet"
import React from "react";

const DashboardPage = (props) => {
    return (
        <>
        <Heading margin="none">{props.user.displayName}</Heading>
        <Button onClick={props.signOut} label="Sign out"/>
        </>
    )
}

export default DashboardPage;