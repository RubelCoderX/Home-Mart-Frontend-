import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import gargi from "../../assets/gargi.png";
import aakarsh from "../../assets/aakarsh.png";
import jaymin from "../../assets/jaymin.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-40">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">Phone : +919510304564</p>
        <p className="mb-2">Email : homemart.support@gmail.com</p>
        <p>Address : 489 5th Avenue, New York, NY 10014</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="h-64">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4382471586436!2d-74.00601528459438!3d40.71277597933053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31648f9d11%3A0x7e77d49e825dbc0e!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1596340199821!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            aria-hidden="false"
          ></iframe>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide high-quality outdoor gear and accessories to
          help you explore and enjoy the great outdoors. We are committed to
          offering products that are not only functional but also sustainable
          and environmentally friendly. Join us in our journey to make outdoor
          adventures accessible and enjoyable for everyone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src={gargi}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Gargi</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="text-center">
            <img
              src={aakarsh}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Aakarsh</h3>
            <p>Backend Developer</p>
          </div>
          <div className="text-center">
            <img
              src={jaymin}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jaymin</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Chirag</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
