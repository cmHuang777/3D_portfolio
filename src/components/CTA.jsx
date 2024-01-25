import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta flex-row'>
      <section className='flex-col'>
      <p className='cta-text'>
        Get in touch <br className='sm:block hidden' />
      </p>
      <p>I’m currently looking for Software Engineering internships full-time during summer and part-time otherwise. If you think I'll be a good fit for your team, feel free to contact me!</p>
      </section>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
