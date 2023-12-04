import './Contact.css'

const Contact = () => {
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
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>Have questions or suggestions? Feel free to reach out to us!</p>

                    <form action="#" method="post">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" name="message" rows="4" required ></textarea>

                        <button type="submit">Submit</button>
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