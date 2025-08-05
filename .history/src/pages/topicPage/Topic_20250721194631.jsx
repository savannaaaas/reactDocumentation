import { CustomTypography } from "../../components/Typography/CustomTypography";
import { data } from "../../data/data";
export const Topic = ({ title, content = [] }) => {
  const getValue = (content) => {
    const [[key, value]] = Object.entries(content);
    switch (key) {
      case "p": {
        return <CustomTypography variant>{}</CustomTypography>;
      }
    }
  };
};
