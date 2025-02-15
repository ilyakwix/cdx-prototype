import { Element } from "./element/element";
import classNames from "classnames";
import styles from "./elements.module.css";

export interface ElementsProps {
  className?: string;
}

export const Elements = ({ className }: ElementsProps) => {
  return (
    <section className={classNames(styles.root, className)}>
      <ul className={styles.tree}>
        <Element type="html">html</Element>
        <Element type="html" indent={1}>
          head
        </Element>
        <Element type="html" indent={1}>
          body
        </Element>
        <Element type="html" indent={2} classNameValues="root">
          div
        </Element>
        <Element type="html" indent={3} classNameValues="habitsListHeader">
          header
        </Element>
        <Element
          type="html"
          classNameValues={["headingLarge", "pageTitle"]}
          indent={4}
        >
          h1
        </Element>
        <Element type="text" indent={5}>
          Daily Habit Tracker
        </Element>
        <Element
          type="html"
          classNameValues={["button", "primary", "createHabitButton"]}
          indent={4}
        >
          button
        </Element>
        <Element type="text" indent={5}>
          Create Habit
        </Element>
        <Element type="html" classNameValues="habitList" indent={3} selected>
          ul
        </Element>
        <Element type="html" classNameValues="item" indent={4}>
          li
        </Element>
        <Element type="html" classNameValues="habitTitle" indent={5}>
          h3
        </Element>
        <Element type="text" indent={6}>
          Read a book
        </Element>
        <Element type="html" classNameValues="status" indent={7}>
          input
        </Element>
        <Element type="html" classNameValues="item" indent={4}>
          li
        </Element>
        <Element type="html" classNameValues="habitTitle" indent={5}>
          h3
        </Element>
        <Element type="text" indent={6}>
          Workout
        </Element>
        <Element type="html" classNameValues="status" indent={7}>
          input
        </Element>
        <Element type="html" classNameValues="item" indent={4}>
          li
        </Element>
        <Element type="html" classNameValues="habitTitle" indent={5}>
          h3
        </Element>
        <Element type="text" indent={6}>
          Meditate
        </Element>
        <Element type="html" classNameValues="status" indent={7}>
          input
        </Element>
      </ul>
    </section>
  );
};
