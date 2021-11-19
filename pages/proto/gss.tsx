import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import data from './gss_data.json';

const useStyles = makeStyles((theme) => ({
  appHeader: {
    backgroundColor: 'black',
    height: '100%',
    fontSize: 'calc(10px + 1vmin)',
    color: 'white',
    fontFamily: 'IBM Plex Mono',
    textAlign: 'left',
    padding: '2%',
    width: '100',
    wordWrap: 'break-word',
  },
  app: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'black',
  },
  option: {
    textDecoration: 'none',
    color: 'white',
  },
  healthHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

interface OptionEffect {
  go: string;
  grade_effect?: number;
  popularity_effect?: number;
  stress_effect?: number;
  reputation_effect?: number;
  can_game_over?: boolean;
}

interface OptionRandom {
  go: string;
  grade_effect?: number;
  popularity_effect?: number;
  stress_effect?: number;
  reputation_effect?: number;
  can_game_over?: boolean;
  chance: number;
}
interface Option {
  text: string;
  go: string;
  grade_effect?: number;
  popularity_effect?: number;
  stress_effect?: number;
  reputation_effect?: number;
  can_game_over?: boolean;
  random?: OptionRandom[];
}

export default function GunnStudentSimulator() {
  let [scene, setScene] = useState('title');
  let [grade, setGrade] = useState(0);
  let [popularity, setPopularity] = useState(0);
  let [stress, setStress] = useState(0);
  let [reputation, setReputation] = useState(0);
  let [gradeEffect, setGradeEffect] = useState(0);
  let [popularityEffect, setPopularityEffect] = useState(0);
  let [stressEffect, setStressEffect] = useState(0);
  let [reputationEffect, setReputationEffect] = useState(0);
  let [showIndicator, setShowIndicator] = useState(false);

  // Combat stuff
  let [inFight, setInFight] = useState(false);
  let [maxPlayerHealth, setMaxPlayerHealth] = useState(20);
  let [playerHealth, setPlayerHealth] = useState(maxPlayerHealth);
  let [maxEnemyHealth, setMaxEnemyHealth] = useState(10);
  let [enemyHealth, setEnemyHealth] = useState(10);
  let [combatText, setCombatText] = useState(['Combat begins!']);
  let [playerTurn, setPlayerTurn] = useState(true);
  let [attackMod, setAttackMod] = useState(0);
  let [defenseMod, setDefenseMod] = useState(0);

  const classes = useStyles();

  const reactifyText = (text: string) => {
    return text
      .replace(/  /g, '\u00a0\u00a0')
      .split('\n')
      .map((value, index) => {
        return (
          <span key={index}>
            {value}
            <br />
          </span>
        );
      });
  };

  const generateSelect = (v: Option) => {
    return () => {
      setShowIndicator(false);

      let out: OptionEffect = v;

      if (v.random) {
        let rand = Math.random();
        console.log(rand);
        for (let ev of v.random) {
          rand -= ev.chance;
          if (rand <= 0) {
            out = ev;
            break;
          }
        }
      }

      if (out.go === 'title') {
        setGrade(0);
        setPopularity(0);
        setStress(0);
        setReputation(0);
      } else {
        setGrade(clamp(grade + (out.grade_effect ?? -3), 0, 100));
        setPopularity(
          clamp(popularity + (out.popularity_effect ?? -3), 0, 100)
        );
        setStress(clamp(stress + (out.stress_effect ?? 3), 0, 100));
        setReputation(
          clamp(reputation + (out.reputation_effect ?? -3), 0, 100)
        );
      }
      if (out.can_game_over === false) {
        setScene(out.go);
      } else {
        if (grade + (out.grade_effect ?? -3) <= 0) {
          setScene('gradegm');
        } else if (popularity + (out.popularity_effect ?? -3) <= 0) {
          setScene('popularitygm');
        } else if (stress + (out.stress_effect ?? 3) >= 100) {
          setScene('stressgm');
        } else if (reputation + (out.reputation_effect ?? -3) <= 0) {
          setScene('reputationgm');
        } else {
          setScene(out.go);
        }
      }
    };
  };

  let gradeIndicator = (
    <span style={{ opacity: showIndicator ? 100 : 0 }}>
      ({gradeEffect === 0 ? ' ' : Math.abs(gradeEffect) <= 5 ? '-' : '='})
    </span>
  );
  let popularityIndicator = (
    <span style={{ opacity: showIndicator ? 100 : 0 }}>
      (
      {popularityEffect === 0
        ? ' '
        : Math.abs(popularityEffect) <= 5
        ? '-'
        : '='}
      )
    </span>
  );
  let stressIndicator = (
    <span style={{ opacity: showIndicator ? 100 : 0 }}>
      ({stressEffect === 0 ? ' ' : Math.abs(stressEffect) <= 5 ? '-' : '='})
    </span>
  );
  let reputationIndicator = (
    <span style={{ opacity: showIndicator ? 100 : 0 }}>
      (
      {reputationEffect === 0
        ? ' '
        : Math.abs(reputationEffect) <= 5
        ? '-'
        : '='}
      )
    </span>
  );

  if (!inFight) {
    return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <span style={{ color: 'cyan' }}>Grade</span>: {grade} {gradeIndicator}{' '}
          | <span style={{ color: 'yellow' }}>Popularity</span>: {popularity}{' '}
          {popularityIndicator} | <span style={{ color: 'green' }}>Stress</span>
          : {stress} {stressIndicator} |{' '}
          <span style={{ color: 'red' }}>Reputation</span>: {reputation}{' '}
          {reputationIndicator} <br />
          {reactifyText(((data as any)[scene] ?? data.error).text)}
          <br />
          {((data as any)[scene] ?? data.error).options.map((v: Option) => (
            <>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={generateSelect(v)}
                style={{ color: 'pink', cursor: 'pointer' }}
                onMouseEnter={() => {
                  setGradeEffect(v.grade_effect ?? 0);
                  setStressEffect(v.stress_effect ?? 0);
                  setPopularityEffect(v.popularity_effect ?? 0);
                  setReputationEffect(v.reputation_effect ?? 0);
                  setShowIndicator(true);
                }}
                onMouseLeave={() => {
                  setShowIndicator(false);
                }}
              >
                {'['}
                <u>{v.text}</u>
                {']'}
              </span>
            </>
          ))}
        </header>
      </div>
    );
  } else {
    return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <div className={classes.healthHeader}>
            <span>
              You:{' '}
              <span style={{ color: 'green' }}>
                {playerHealth}/{maxPlayerHealth}
              </span>
            </span>
            <span>
              Enemy:{' '}
              <span style={{ color: 'red' }}>
                {enemyHealth}/{maxEnemyHealth}
              </span>
            </span>
          </div>{' '}
          <br />
          {combatText.map((v) => (
            <>
              {v}
              <br />
            </>
          ))}
          <br />
          {playerTurn ? (
            <>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  let heal = Math.floor(Math.random() * 4 + 1);
                  setPlayerHealth(
                    clamp(playerHealth + heal, 0, maxPlayerHealth)
                  );
                  setCombatText(
                    combatText.concat(`You heal for ${heal} health`)
                  );
                  setPlayerTurn(false);
                }}
                style={{ color: 'pink', cursor: 'pointer' }}
              >
                {'['}
                <u>Heal</u>
                {']'}
              </span>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  let attack = Math.floor(Math.random() * 4 + 1) + attackMod;
                  setEnemyHealth(
                    clamp(enemyHealth - attack, 0, maxPlayerHealth)
                  );
                  setCombatText(
                    combatText.concat(`You attack for ${attack} health`)
                  );
                  setAttackMod(0);
                  setPlayerTurn(false);
                }}
                style={{ color: 'pink', cursor: 'pointer' }}
              >
                {'['}
                <u>Attack</u>
                {']'}
              </span>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  setAttackMod(attackMod + 1);
                  setCombatText(combatText.concat(`You pumped yourself up`));
                  setPlayerTurn(false);
                }}
                style={{ color: 'pink', cursor: 'pointer' }}
              >
                {'['}
                <u>Brood</u>
                {']'}
              </span>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  setDefenseMod(Math.floor(Math.random() * 3 + 1));
                  setCombatText(combatText.concat(`You braced yourself`));
                  setPlayerTurn(false);
                }}
                style={{ color: 'pink', cursor: 'pointer' }}
              >
                {'['}
                <u>Defend</u>
                {']'}
              </span>
            </>
          ) : (
            <>
            ======================================================<br/>
            #     |     #<br/>
            ======================================================
            </>
          )}
        </header>
      </div>
    );
  }
}
