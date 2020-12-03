import './App.css';
import { Button, Col, Container, Row } from "reactstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
//import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header'
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {

  // const btnHandle = () => {
  //   toast.error("Done.", {
  //     position: "top-center"
  //   });
  // };

  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>

          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourses} exact />

            </Col>
          </Row>
        </Container>

        {/* <Home />
  <AllCourses />

  <AddCourse /> */}

        {/* <h1>This is bootstarp Components.</h1>
  <Button color="warning" outline onClick={btnHandle}>First React Button.</Button> */}
      </Router>
    </div>
  );
}

export default App;
