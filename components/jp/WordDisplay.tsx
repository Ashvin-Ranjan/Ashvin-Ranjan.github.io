import { Definition } from "../../util/types/jp";

export default function VerticalText(props: { word: Definition }) {
  const { word } = props;

  if (word.main_kana == "") {
    return (
      <>
        {word.main_reading}
      </>
    );
  }
  if (word.only_kana) {

    return (
      <>
        {word.main_kana}「{word.main_reading}」
      </>
    );
  }
  return (
    <>
      {word.main_reading}「{word.main_kana}」
    </>
  );
};
