import { ImportantPoints } from "../../components/ImportantPoints/ImportantPoints";
import { CustomTypography } from "../../components/CustomTypography/CustomTypography";
import { Fragment } from "react/jsx-runtime";
import { Code } from "../../components/Code/Code";
import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Title";
export const Topic = ({ title, content = [] }) => {
  console.log(title);
  const getValue = (content) => {
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
      }
    });
  };
  return (
    <>
      <h1 className="custom-typography">{title}</h1>
      {getValue(content).map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </>
  );
};
