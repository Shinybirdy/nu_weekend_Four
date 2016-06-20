CREATE UNIQUE INDEX megans_morning_chores_pkey ON megans_morning_chores USING btree (id)

ALTER TABLE megans_morning_chores
ADD COLUMN "isitdone" BOOLEAN DEFAULT FALSE;

ALTER TABLE megans_morning_chores
DROP COLUMN completed;

ALTER TABLE megans_morning_chores
ALTER COLUMN day TYPE timestamp;

///Killed all that ^^^^^^^
/////
CREATE TABLE megans_chores(
chore_id serial PRIMARY KEY

)

ALTER TABLE megans_chores
DROP COLUMN day;
