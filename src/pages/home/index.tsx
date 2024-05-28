import { Container } from "./styles";
import NavBar from "../../components/nav-bar";
import UserData from "../../components/user-data";
import DataForm from "../../components/data-form";
import DataHistory from "../../components/data-history";
import DataGraph from "../../components/data-graph";

function Home() {



    return(
        <Container>
            <NavBar />
            <UserData />
            <DataForm />
            <DataHistory />
            <DataGraph />
        </Container>
    );
}

export default Home;