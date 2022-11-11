import React, { useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            itaque veniam laudantium, quam quas dolor tempora eligendi officia
            sequi. Iusto.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
