import './Home.css'
//component not function because it returns our html and exports our code
const Home = () => {
    return (
        <div>
            <header>
                <h1>Nepal Travel & Tourism</h1>
            </header>

            <nav>
                <a href="/">Home</a>
                <a href="#">Destinations</a>
                <a href="#">Activities</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>

            <section>
                <div className="featured-destination">
                    <h2>Featured Destination</h2>
                    <img src="nepal.jpg" alt="Nepal Image" />
                    <p>Explore the breathtaking beauty of Nepal's landscapes, rich culture, and adventurous activities.</p>
                    <a href="#">Learn More</a>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Nepal Travel & Tourism</p>
            </footer>
        </div>
    )
}

export default Home