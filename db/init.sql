CREATE TABLE IF NOT EXIST spaceData (
  id varchar(255) NOT NULL,
  spaceItem varchar(8000) NOT NULL,
  PRIMARY KEY (id)
);
ALTER TABLE `spaceData` CHANGE `spaceItem` `spaceItem` JSON NULL DEFAULT NULL;