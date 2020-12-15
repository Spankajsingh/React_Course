import React, { useEffect } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(()=>{
        document.title="Home || LearnCodeWith Pankaj"
    }, [])
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>LearnCodeWith Pankaj</h1>
                <p>This course is developed by Pankaj Singh</p>
                <Container>
                    <Button color="primary" outline>Start using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;