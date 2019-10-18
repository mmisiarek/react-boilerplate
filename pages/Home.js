import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

function Home() {
    return (
        <Wrapper>
            <Typography variant="h2" gutterBottom>
                Home screen
            </Typography>
        </Wrapper>
    );
}

export default Home;
