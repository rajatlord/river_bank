// Review.jsx
import { testimonials } from "./ReviewData";
import TestimonialCard from "./TestimonialCard";

function Review({id}) {
  return (
    <section id={id} className="py-12 px-6 bg-gray-50  ">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-400">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden relative group">
        <div
          className="flex "
          
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
