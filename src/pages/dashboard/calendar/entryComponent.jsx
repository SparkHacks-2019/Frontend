import React from 'react'
import { Box, Text, Heading } from 'grommet';

function DashboardCalendarEntryComponent(props) {
    if(props.length == 0){
        return <Text>hello</Text>
    } else {
        return (
            <Box pad="small" margin={{top:"medium"}} border={{color:"text"}}>
                <Heading size="xsmall">Category: {props.item.category}</Heading>
                <Text size="small">Subcategory: {props.item.subheading}</Text>
                <Text>Subcategory: {props.item.footprint}</Text>
            </Box>
        )
    }
    
}

export default DashboardCalendarEntryComponent
