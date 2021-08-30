type TranslatedTextProps = {
    translate: {[key: string]: string},
    text: string, className?: string,
    allowLowercase?: boolean, highlightUntranslated?: boolean,
}
export default function TranslatedText(props: TranslatedTextProps) {
    const {translate, text, className, allowLowercase, highlightUntranslated} = props;

    console.log();
    return (
        <span className={className}>
            {(allowLowercase ? text : text.toUpperCase()).split("").map((v) => {
                return translate[v] && translate[v] !== v ? (
                  <>{translate[v]}</>
                ) : highlightUntranslated ? (
                  <span style={{backgroundColor: "red"}}>{v}</span>
                ) : (
                  <>{v}</>
                );
            })}
        </span>
    );
};
