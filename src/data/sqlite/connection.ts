import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'timeledger.db';

export const openDatabase = (): SQLite.SQLiteDatabase => {
  return SQLite.openDatabaseSync(DATABASE_NAME);
};
