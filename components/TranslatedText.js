// React
import React from "react";

const TranslatedText = ({
  translate,
  text,
  className,
  allowLowercase,
  highlightUntranslated,
}) => {
  console.log();
  return (
    <span className={className}>
      {(allowLowercase ? text : text.toUpperCase()).split("").map((v) => {
        return translate[v] && translate[v] !== v ? (
          <>{translate[v]}</>
        ) : highlightUntranslated ? (
          <span style={{ backgroundColor: "red" }}>{v}</span>
        ) : (
          <>{v}</>
        );
      })}
    </span>
  );
};

export default TranslatedText;
