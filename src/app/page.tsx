import Grid from './grid';
import Hero from './hero';
import Navbar from './navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Grid />
        </div>
    );
}
