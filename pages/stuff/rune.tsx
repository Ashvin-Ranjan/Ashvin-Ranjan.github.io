import TranslatePage from '../../components/stuff/TranslatePage';

// Rune translate table
import rune from '../../data/rune.json';

export default function RuneTextGenerator() {
  return <TranslatePage name='Rune Text Generator' dictionary={rune} />;
}
