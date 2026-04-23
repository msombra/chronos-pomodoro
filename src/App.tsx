import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import './styles/global.css';
import './styles/theme.css';

export const App = () => {
    return (
        <>
            <Container>
                <Logo />
            </Container>
        </>
    );
};