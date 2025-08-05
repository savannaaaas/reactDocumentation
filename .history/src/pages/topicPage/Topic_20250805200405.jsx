import React, { useCallback } from "react";
import { ImportantPoints } from "../../components/ImportantPoints/ImportantPoints";
import { Fragment } from "react/jsx-runtime";
import { Code } from "../../components/Code/Code";
import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Title";
import "./index.scss";
import { NavButtons } from "../../components/Navigation/NavButtons";
import { BoldText } from "../../components/BoldText/BoldText";

export const Topic = ({ title, content = [] }) => {
  const getValue = useCallback(() => {
    return content.map((item) => {
      const [[key, value]] = Object.entries(item);
      switch (key) {
        case "p": {
          return <Text>{value}</Text>;
        }
        case "h": {
          return <Title>{value}</Title>;
        }
        case "c": {
          return <Code>{value}</Code>;
        }
        case "err": {
          return <ImportantPoints>{value}</ImportantPoints>;
        }
        case "b": {
          return <BoldText>{value}</BoldText>;
        }
      }
    });
  }, [content]);
  return (
    <>
      <h1 className="custom-typography">{title}</h1>
      {getValue(content).map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
      <NavButtons title={title} />
    </>
  );
};
//
