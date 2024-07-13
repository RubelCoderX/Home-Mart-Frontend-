import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      role: "CEO, Adventure Co.",
      content:
        "I absolutely love the hiking gear I purchased from your store. The backpack is sturdy and comfortable, perfect for my weekend adventures!",
      image:
        "https://images.unsplash.com/photo-1625513966414-cce34d7344be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "Marketing Director, Outdoor Explorers",
      content:
        "The camping tent we bought exceeded our expectations. It's easy to set up and provides excellent protection from the elements.",
      image:
        "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFkdmVudHVyZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D", // Direct image URL from Unsplash
    },
    {
      id: 3,
      author: "Michael Johnson",
      role: "Founder, Wilderness Adventures",
      content:
        "Your outdoor gear recommendations have transformed our family camping trips. Thank you for your expertise and excellent customer service!",
      image:
        "https://images.unsplash.com/photo-1665540932318-21c0e287d153?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFkdmVudHVyZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D", // Direct image URL from Unsplash
    },
  ];
  return (
    <div className="bg-[#f8f9fa] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="zoom-in"
            >
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
