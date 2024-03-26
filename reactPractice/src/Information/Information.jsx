// Import of the file with styles
import s from "./Information.module.css";

// Component creation
const Information = () => (
  <section className={s.section}>
    <img
      className={s.image}
      src="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/styling/image+for+example.png"
      alt="newspaper vs blog vs magazine"
    />
    <p className={s.text}>
      Newspaper blogs and magazines are powerful mediums that provide valuable
      information, analysis, and entertainment to readers worldwide. Newspapers,
      with their long-standing tradition, offer in-depth coverage of current
      events, politics, business, sports, and more. They serve as a primary
      source of news, keeping people informed about local, national, and
      international affairs. Moreover, newspaper blogs have emerged as a dynamic
      platform that blends the traditional journalistic values with interactive
      elements, allowing readers to engage, comment, and share their
      perspectives on articles. This interactive approach enhances the sense of
      community and promotes a dialogue between the readers and the writers. On
      the other hand, magazines cater to diverse interests and passions,
      offering specialized content on topics such as lifestyle, fashion, travel,
      technology, health, and culture. They provide an avenue for in-depth
      features, interviews, and captivating visuals that captivate readers'
      attention and provide a deeper exploration of subjects. Whether through
      thought-provoking editorials, investigative reports, compelling stories,
      or stunning imagery, both newspapers and magazines continue to play a
      vital role in informing, inspiring, and entertaining audiences around the
      globe.
    </p>
  </section>
);

// Component export
export default Information;
