import { Button, Code, ScrollArea } from "@radix-ui/themes";
import { EditableLabel } from "./editable-label/editable-label";
import { propsPanelData } from "./props-panel-data";
import classNames from "classnames";
import styles from "./props-panel.module.css";
import { PlusIcon } from "@radix-ui/react-icons";
// import { PropItem } from "./prop-item/prop-item";
import { AddPropMenu } from "./add-prop-menu/add-prop-menu";
import { useEffect } from "react";

export interface PropsPanelProps {
  className?: string;
}

export const PropsPanel = ({ className }: PropsPanelProps) => {
  const myHobbies = ["reading", "coding", "traveling"];

  useEffect(() => {
    const name = "John Doe";
    const age = 30;
    const isDeveloper = true;
    const hobbies = ["reading", "coding", "traveling"];
    const address = {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    };
    const children = [
      {
        name: "Jane Doe",
        age: 10,
        isDeveloper: false,
        hobbies: ["drawing", "playing"],
        address: {
          street: "456 Elm St",
          city: "Los Angeles",
          state: "CA",
          zip: "90001",
        },
      },
      {
        name: "Alice Doe",
        age: 5,
        isDeveloper: false,
        hobbies: ["singing", "dancing"],
        address: {
          street: "789 Oak St",
          city: "Chicago",
          state: "IL",
          zip: "60001",
        },
      },
    ];

    const undefinedValue = undefined;
    const nullValue = null;

    const onSayHello = () => {
      console.log("Console log Hello");
    };

    const onContact = (phone: "mobile" | "office") => {
      // Do something
      if (phone === "mobile") {
        console.log("Calling mobile");
      } else {
        console.log("Calling office");
      }
    };
    const person = {
      name,
      age,
      isDeveloper,
      hobbies,
      address,
      children,
      undefinedValue,
      nullValue,
      onSayHello,
      onContact,
    };

    const greeting = onSayHello();
    const anotherGreeting = greeting;

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is Developer:", isDeveloper);
    console.log("Hobbies:", hobbies);
    console.log("Address:", address);
    console.log("Children:", children);
    console.log("Undefined:", undefinedValue);
    console.log("Null:", nullValue);
    console.log("On Say Hello:", onSayHello);

    console.log("Run Inline", onSayHello());
    // console.log("Greeting", greeting);
    // console.log("Another Greeting", anotherGreeting);

    console.log("On Contact:", onContact);
    console.log("Person:", person);
  }, []);

  return (
    <ScrollArea>
      <div className={classNames(styles.root, className)}>
        {propsPanelData.map((item) => (
          // <PropItem />
          <div className={styles.prop} key={item.prop}>
            <Code size="1" variant="ghost" className={styles.propName}>
              {item.prop}
            </Code>
            <EditableLabel
              className={styles.propValue}
              defaultValue={item.value}
            />
          </div>
        ))}
        <div className={styles.footer}>
          <AddPropMenu>
            <Button size="1" variant="soft">
              <PlusIcon />
              Add a property
            </Button>
          </AddPropMenu>
        </div>
      </div>
      {myHobbies.map((hobby) => (
        <div key={hobby}>{hobby}</div>
      ))}
      {myHobbies.length}
    </ScrollArea>
  );
};
