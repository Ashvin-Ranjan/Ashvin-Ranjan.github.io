import TranslatePage from "../../components/TranslatePage";

// Similar translate table
import similar from "../../data/similar.json";


export default function SimilarTextGenerator() {
    return <TranslatePage name="Similar Text Generator" dictionary={similar} allowLowercase highlightUntranslated />
};
