import Directory from './components/directory/directory.component';
import './App.css';
const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: '/hats.png',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: '/jackets.png',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: '/sneakers.png',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: '/womens.png',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: '/men.png',
        },
    ];

    return <Directory categories={categories} />;
};
function App() {
    return (
        <div className='App'>
            <Home />
        </div>
    );
}

export default App;
