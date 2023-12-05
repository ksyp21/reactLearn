import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>Have questions or suggestions? Feel free to reach out to us!</p>

                    <form action="#" method="post">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required /><br></br>

                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required /><br></br>
                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" name="message" rows="4" required ></textarea>

                        <Button title="Submit" />
                    </form>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Nepal Travel & Tourism</p>
            </footer>
        </div>
    )
}

export default Contact