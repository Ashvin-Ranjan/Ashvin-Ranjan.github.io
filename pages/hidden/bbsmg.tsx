// Data
import data from '../../data/bbsmg.json';
import GeneratorPage from '../../components/GeneratorPage';

export const BecauseBreadStarredMessageGeneator = () => {
  return (
    <GeneratorPage
      data={data}
      pageTitle="Because Bread Starred Message Generator"
      contextLower={1}
      contextUpper={10}
      contextDefault={5}
    />
  );
};

export default BecauseBreadStarredMessageGeneator;
