import { makeStyles } from '@material-ui/core/styles';
import { createRef, useEffect, useState, RefObject } from 'react';
import data from './gss_data.json';
import Head from 'next/head';

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
    color: 'pink',
    cursor: 'pointer',
  },
  healthHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  optionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  attack_effect?: number;
  defense_effect?: number;
  can_game_over?: boolean;
}

interface OptionRandom {
  go: string;
  grade_effect?: number;
  popularity_effect?: number;
  stress_effect?: number;
  reputation_effect?: number;
  attack_effect?: number;
  defense_effect?: number;
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
  attack_effect?: number;
  defense_effect?: number;
  can_game_over?: boolean;
  random?: OptionRandom[];
}

interface Fight {
  win: string;
  lose: string;
  enemy_health: number;
  enemy_damage_mul: number;
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
  let baseChange = 3;

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
  let [fightEnd, setFightEnd] = useState(false);
  let [permanentAttackMod, setPermanentAttackMod] = useState(0);
  let [permanentDefenseMod, setPermanentDefenseMod] = useState(0);

  // Attack bar thing
  const attackBar: RefObject<HTMLSpanElement> = createRef();
  const attackBarElement = (
    <span ref={attackBar}>
      ===================
      <br />
      # | #<br />
      ===================
    </span>
  );
  let attackBarCharge = 0;

  useEffect(() => {
    let update = setInterval(() => {
      if (attackBar.current && !playerTurn) {
        attackBar.current.innerHTML = `
        ${'\u00a0'.repeat(9)}v<br />
        ===================<br />
        #${'\u00a0'.repeat(attackBarCharge)}|${'\u00a0'.repeat(
          16 - attackBarCharge
        )}#<br />
        ===================<br />
        ${'\u00a0'.repeat(9)}^
        `;
        attackBarCharge = (attackBarCharge + 1) % 17;
      }
    }, 30);
    return () => {
      clearInterval(update);
    };
  }, [playerTurn, attackBarCharge]);

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

  const resetFight = (fight: Fight) => {
    setInFight(true);
    setPlayerHealth(maxPlayerHealth);
    setMaxEnemyHealth(fight.enemy_health);
    setEnemyHealth(fight.enemy_health);
    setCombatText([]);
    setPlayerTurn(true);
    setAttackMod(0);
    setDefenseMod(0);
    setFightEnd(false);
  };

  const generateSelect = (v: Option) => {
    return () => {
      setShowIndicator(false);

      let out: OptionEffect = v;

      if (v.random) {
        let rand = Math.random();
        for (let ev of v.random) {
          rand -= ev.chance;
          if (rand <= 0) {
            out = ev;
            break;
          }
        }
      }

      let gradeMove = clamp(grade + (out.grade_effect ?? -baseChange), 0, 100);
      let popularityMove = clamp(
        popularity + (out.popularity_effect ?? -baseChange),
        0,
        100
      );
      let stressMove = clamp(
        stress + (out.stress_effect ?? baseChange),
        0,
        100
      );
      let reputationMove = clamp(
        reputation + (out.reputation_effect ?? -baseChange),
        0,
        100
      );
      let attackMove = permanentAttackMod + (out.attack_effect ?? 0);
      let defenseMove = permanentDefenseMod + (out.defense_effect ?? 0);

      if (out.go === 'title') {
        setGrade(0);
        setPopularity(0);
        setStress(0);
        setReputation(0);
        setPermanentAttackMod(0);
        setPermanentDefenseMod(0);
      } else {
        setGrade(gradeMove);
        setPopularity(popularityMove);
        setStress(stressMove);
        setReputation(reputationMove);
      }
      if (out.can_game_over === false) {
        let maybeFight: Fight = ((data as any)[out.go] ?? data.error).fight;
        if (maybeFight) {
          resetFight(maybeFight);
        }
        setScene(out.go);
      } else {
        if (gradeMove <= 0) {
          setScene('gradegm');
        } else if (popularityMove <= 0) {
          setScene('popularitygm');
        } else if (stressMove >= 100) {
          setScene('stressgm');
        } else if (reputationMove <= 0) {
          setScene('reputationgm');
        } else {
          let maybeFight: Fight = ((data as any)[out.go] ?? data.error).fight;
          if (maybeFight) {
            resetFight(maybeFight);
          }
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
        <Head>
          <title>Gunn Student Simulator 2 | ash.vin</title>
          <meta
            name='description'
            content='A totally original idea of a text-based game to totally accuratly portray life as a Gunn School student, totally not based on something by Sean Yen.'
          />
          <meta
            name='keywords'
            content='Gunn Student Simulator 2, Gunn Student Simulator, Gunn, Student Simulator, Gunn High School'
          />
          <meta name='author' content='Ashvin Ranjan' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <header className={classes.appHeader}>
          <span style={{ color: 'cyan' }}>Grade</span>: {grade} {gradeIndicator}{' '}
          | <span style={{ color: 'yellow' }}>Popularity</span>: {popularity}{' '}
          {popularityIndicator} | <span style={{ color: 'green' }}>Stress</span>
          : {stress} {stressIndicator} |{' '}
          <span style={{ color: 'red' }}>Reputation</span>: {reputation}{' '}
          {reputationIndicator} <br />
          {reactifyText(((data as any)[scene] ?? data.error).text)}
          <br />
          <div className={classes.optionWrapper}>
            {((data as any)[scene] ?? data.error).options.map((v: Option) => (
              <>
                {'\u00a0'}
                <div
                  className={classes.option}
                  onClick={generateSelect(v)}
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
                </div>
              </>
            ))}
          </div>
        </header>
      </div>
    );
  } else if (fightEnd) {
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
          {'\u00a0'}
          <span
            className={classes.option}
            onClick={() => {
              setInFight(false);
              if (playerHealth === 0) {
                setScene((data as any)[scene].fight.lose);
              } else {
                setScene((data as any)[scene].fight.win);
              }
            }}
          >
            {'['}
            <u>Continue</u>
            {']'}
          </span>
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
          {reactifyText(((data as any)[scene] ?? data.error).text)}
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
              >
                {'['}
                <u>Heal</u>
                {']'}
              </span>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  let attack =
                    Math.floor(Math.random() * 4 + 1) +
                    (attackMod + permanentAttackMod);
                  setEnemyHealth(
                    clamp(enemyHealth - attack, 0, maxEnemyHealth)
                  );
                  setCombatText(
                    combatText.concat(`You attack for ${attack} health`)
                  );
                  if (clamp(enemyHealth - attack, 0, maxPlayerHealth) == 0) {
                    setCombatText(
                      combatText.concat([
                        `You attack for ${attack} health`,
                        `You win!`,
                      ])
                    );
                    setFightEnd(true);
                  }
                  setPlayerTurn(false);
                }}
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
              >
                {'['}
                <u>Brood</u>
                {']'}
              </span>
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  setDefenseMod(defenseMod + 1);
                  setCombatText(combatText.concat(`You braced yourself`));
                  setPlayerTurn(false);
                }}
              >
                {'['}
                <u>Defend</u>
                {']'}
              </span>
            </>
          ) : (
            <>
              {attackBarElement}
              <br />
              {'\u00a0'}
              <span
                className={classes.option}
                onClick={() => {
                  let damage = clamp(
                    Math.floor(
                      Math.abs(9 - attackBarCharge) -
                        (defenseMod + permanentDefenseMod) *
                          ((data as any)[scene].enemy_damage_mul ?? 1)
                    ),
                    0,
                    maxPlayerHealth
                  );
                  setPlayerHealth(
                    clamp(playerHealth - damage, 0, maxPlayerHealth)
                  );
                  setCombatText(
                    combatText.concat(
                      `The enemy attacked you for ${damage} health`
                    )
                  );
                  if (clamp(playerHealth - damage, 0, maxPlayerHealth) == 0) {
                    setCombatText(
                      combatText.concat([
                        `The enemy attacked you for ${damage} health`,
                        `You lose!`,
                      ])
                    );
                    setFightEnd(true);
                  }
                  setPlayerTurn(true);
                }}
              >
                {'['}
                <u>Block</u>
                {']'}
              </span>
            </>
          )}
        </header>
      </div>
    );
  }
}
