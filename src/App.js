import './App.css';
import UserCard from './components/personCard'

function App() {
    return (
        <div className="App">
            <UserCard firstName='Jane' lastName='Doe' age={45} hairColor='Black' />
            <UserCard firstName='John' lastName='Smith' age={88} hairColor='Brown' />
            <UserCard firstName='Millard' lastName='Fillmore' age={50} hairColor='Brown' />
            <UserCard firstName='Maria' lastName='Smith' age={62} hairColor='Brown' />
        </div>
    );
}

export default App;
