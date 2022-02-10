import { makeStyles } from '@material-ui/core/styles';
import { ColorState, SquareData } from '../pages/stuff/crosswordle';

const useStyles = makeStyles((theme) => ({
  square: {
    minWidth: '4.25rem',
    height: '4.25rem',
    outlineStyle: 'solid',
    lineHeight: '3.75rem',
  },
}));

interface WordleSquareProps {
  selected?: boolean;
  onClick?: () => void;
  data: SquareData;
  correctState: ColorState;
}

export default function WordleSquare(props: WordleSquareProps) {
  const { selected, data, onClick, correctState } = props;

  const classes = useStyles();
  return (
    <div
      className={classes.square}
      style={{
        outlineColor: selected ? 'gold' : 'grey',
        outlineWidth: data.letter ? 1 : 0,
        backgroundColor: correctState,
      }}
      onClick={onClick}
    >
      {data.letter ?? ''}
    </div>
  );
}
