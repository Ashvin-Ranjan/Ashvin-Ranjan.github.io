import TranslatePage from "../../components/TranslatePage";

// Cyrillic translate table
import cyrillic from "../../data/cyrillic.json";


export default function CyrillicTextGenerator() {
    return <TranslatePage name="Cyrillic Text Generator" dictionary={cyrillic} allowLowercase />
};
