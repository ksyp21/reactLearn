import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
//component not function because it returns our html and exports our code
const Home = () => {
    return (
        <div>
            <Navbar />
            <Button title="Login" color="green" />
            <Button title="Register" color="red" />

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