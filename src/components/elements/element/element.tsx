import { ReactNode, CSSProperties } from "react";
import { ClassNameValue } from "../class-name-value/class-name-value";
import classNames from "classnames";
import styles from "./element.module.css";

export type ElementType = "html" | "component" | "expression";

export interface ElementProps {
  className?: string;
  type: ElementType;
  children?: ReactNode;
  classNameValues?: string | string[];
  indent?: number;
}

export const Element = ({
  className,
  type = "html",
  children,
  classNameValues,
  indent,
}: ElementProps) => {
  const renderListOfClassNames = () => {
    if (Array.isArray(classNameValues)) {
      return classNameValues.map((item) => (
        <ClassNameValue className={styles.classNameListItem}>
          {item}
        </ClassNameValue>
      ));
    }
    return (
      <ClassNameValue className={styles.classNameListItem}>
        {classNameValues}
      </ClassNameValue>
    );
  };

  return (
    <li
      className={classNames(styles.root, styles[type], className)}
      style={
        {
          paddingLeft: `calc(${indent} * 16px)`,
          "--lanes-width": `calc(${indent} * 16px)`,
        } as CSSProperties
      }
    >
      <span className={styles.element}>
        {type === "expression" ? `{` : `<`}
        {children}
        {type === "expression" ? `}` : `>`}
      </span>
      {!!classNameValues && (
        <span className={styles.classNamesList}>
          {renderListOfClassNames()}
        </span>
      )}
      <span
        className={styles.lanesIndication}
        style={
          {
            "--lanes-width": `calc(${indent} * 16px)`,
          } as CSSProperties
        }
      />
    </li>
  );
};
