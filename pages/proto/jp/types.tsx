export interface Reading {
  reading: string,
  word?: string,
}

export interface Definition {
  main_reading: string,
  main_kana: string,
  other_readings: Reading[],
  only_kana: boolean,
  definitions: string[][],
}