import { ReactNode, useEffect, useState } from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  letters: {
    marginRight: '5%',
    fontSize: '400%',
  },
  title: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: '200%',
    marginBottom: '5%',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function Home() {
  const classes = useStyles();
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if ((localStorage.getItem('fade') ?? '1') === '1') {
      localStorage.setItem('fade', '0');
    } else {
      setFadeIn(false);
    }
  });

  function TypographyLink(props: {
    href: string;
    children: ReactNode;
    style?: Object;
  }) {
    return (
      <Typography className={classes.letters} style={props.style}>
        <a href={props.href} className={classes.link}>
          {props.children}
        </a>
      </Typography>
    );
  }

  let styles = [
    {
      opacity: 0,
      animation: `fade 2000ms linear 0ms forwards`,
    },
  ];

  if (fadeIn) {
    for (let i = 0; i < 7; i++) {
      styles.push({
        opacity: 0,
        animation: `fade 500ms linear ${2000 + i * 500}ms forwards`,
      });
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <div className={classes.title} style={styles[0]}>
            Choose one
          </div>
          <div className={classes.container}>
            <TypographyLink href='/about' style={styles[1]}>
              A
            </TypographyLink>
            <TypographyLink href='/stuff' style={styles[2]}>
              s
            </TypographyLink>
            <TypographyLink href='/help' style={styles[3]}>
              h
            </TypographyLink>
            <TypographyLink href='/github' style={styles[4]}>
              .
            </TypographyLink>
            <TypographyLink href='/videos' style={styles[5]}>
              v
            </TypographyLink>
            <TypographyLink href='/internals' style={styles[6]}>
              i
            </TypographyLink>
            <TypographyLink href='/N' style={styles[7]}>
              n
            </TypographyLink>
          </div>
        </div>
      </header>
    </div>
  );
}
