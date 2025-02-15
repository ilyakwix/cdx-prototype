import { Element, ElementType } from "./element/element";
import { componentsContent } from "./components-content";
import classNames from "classnames";
import styles from "./components.module.css";

export interface ComponentsProps {
  className?: string;
}

export const Components = ({ className }: ComponentsProps) => {
  return (
    <section className={classNames(styles.root, className)}>
      <ul className={styles.tree}>
        {componentsContent.map((element, index) => (
          <Element
            key={index}
            type={element.type as ElementType}
            indent={element.indent}
            classNameValues={element.classNameValues}
            selected={element.selected}
          >
            {element.value}
          </Element>
        ))}
      </ul>
    </section>
  );
};
