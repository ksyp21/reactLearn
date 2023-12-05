import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <Button title="Register" />

            <section>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>Welcome to Nepal Travel & Tourism, your ultimate guide to exploring the wonders of Nepal. Our mission
                        is to provide you with unforgettable travel experiences, showcasing the beauty, culture, and
                        adventure that Nepal has to offer.</p>

                    <p>With a team of passionate travelers and local experts, we curate the best destinations and activities,
                        ensuring you have a memorable journey. Whether you seek the tranquility of the Himalayas, the
                        excitement of trekking, or the rich cultural heritage of Nepalese towns, we have it all.</p>

                    <p>Join us on an incredible journey through Nepal's landscapes, discover hidden gems, and immerse yourself
                        in the warmth of Nepalese hospitality. Let Nepal Travel & Tourism be your companion in creating
                        moments that last a lifetime.</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Nepal Travel & Tourism</p>
            </footer>
        </div>
    )
}

export default About