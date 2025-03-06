import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get
          back to you soon.
        </p>

        <form className="grid grid-cols-1 gap-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <Textarea placeholder="Your Message" rows={4} required />
          <Button className="w-full text-lg mt-2 cursor-pointer">
            Send Message
          </Button>
        </form>

        <div className="mt-8 text-center ">
          <h3 className="text-xl font-semibold m-2">Our Contact Info</h3>
          <p className="text-gray-600">📍 Damascus, Syria</p>
          <p className="text-gray-600">📞 +963 9418*****</p>
          <a href="mailto:example@test.com" className="text-gray-600">
            ✉️ example@test.com
          </a>
          <p className="text-gray-600 mt-2">
            Business Hours: Mon - Fri: 9 AM - 6 PM
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
