import { ReactNode, CSSProperties } from "react";
import { ClassNameValue } from "../class-name-value/class-name-value";
import classNames from "classnames";
import styles from "./element.module.css";

export type ElementType = "html" | "component" | "expression" | "text";

export interface ElementProps {
  className?: string;
  type: ElementType;
  children?: ReactNode;
  classNameValues?: string | string[];
  indent?: number;
  selected?: boolean;
}

export const Element = ({
  className,
  type = "html",
  children,
  classNameValues,
  indent,
  selected,
}: ElementProps) => {
  const renderListOfClassNames = () => {
    if (
      type === "text" ||
      type === "expression" ||
      classNameValues?.length === 0
    ) {
      return;
    }

    if (Array.isArray(classNameValues) && classNameValues.length > 1) {
      return classNameValues.map((item) => (
        <ClassNameValue className={styles.classNameListItem} key={item}>
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
      className={classNames(
        styles.root,
        styles[type],
        selected && styles.selected,
        className
      )}
      style={
        {
          paddingLeft: `calc(${indent} * 16px)`,
          "--lanes-width": `calc(${indent} * 16px)`,
        } as CSSProperties
      }
      tabIndex={1}
    >
      <span className={styles.element}>
        {type === "expression"
          ? `{`
          : type === "component" || type === "html"
          ? `<`
          : null}
        {children}
        {type === "expression"
          ? `}`
          : type === "component" || type === "html"
          ? `>`
          : null}
        {/* {type === "expression"
          ? `{`
          : type === "component" || type === "html"
          ? null
          : '"'}
        {children}
        {type === "expression"
          ? `}`
          : type === "component" || type === "html"
          ? null
          : '"'} */}
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
