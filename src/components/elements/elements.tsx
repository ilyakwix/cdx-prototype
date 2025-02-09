import { Element } from "./element/element";
import { ScrollArea } from "../shared/scroll-area/scroll-area";
import classNames from "classnames";
import styles from "./elements.module.css";

export interface ElementsProps {
  className?: string;
}

export const Elements = ({ className }: ElementsProps) => {
  return (
    <ScrollArea>
      <section className={classNames(styles.root, className)}>
        <ul className={styles.tree}>
          <Element type="html" classNameValues="root">
            div
          </Element>
          <Element type="html" indent={1} classNameValues="habitsList">
            section
          </Element>
          <Element type="html" indent={2} classNameValues="habitsListHeader">
            header
          </Element>
          <Element
            type="component"
            classNameValues={["button", "primary", "createHabitButton"]}
            indent={3}
          >
            Button
          </Element>
          <Element type="expression" indent={4}>{`children`}</Element>
          <Element type="html" classNameValues="listOfHabits" indent={2}>
            ul
          </Element>
          <Element
            type="expression"
            indent={3}
          >{`habitsList.map(habit => ( ... ))`}</Element>
          <Element type="html" classNameValues="habit" indent={4}>
            li
          </Element>
          <Element type="component" indent={5}>
            Habit
          </Element>
        </ul>
      </section>
    </ScrollArea>
  );
};
