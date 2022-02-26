// Data
import data from './bbgmg.json';
import GeneratorPage from '../../components/GeneratorPage';

export const BecauseBreadMessageGeneator = () => {
  return (
    <GeneratorPage
      data={data}
      pageTitle="Because Bread #General Message Generator (The other one but worse)"
      contextLower={1}
      contextUpper={14}
      contextDefault={6}
    />
  );
};

export default BecauseBreadMessageGeneator;
