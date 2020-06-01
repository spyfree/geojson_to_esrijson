CREATE EXTERNAL TABLE `taxi_zones`(
  `zone` string COMMENT 'zone name', 
  `locationid` int COMMENT 'locationid', 
  `boundaryshape` binary COMMENT 'the plygon of the zone')
ROW FORMAT SERDE 
  'com.esri.hadoop.hive.serde.JsonSerde' 
STORED AS INPUTFORMAT 
  'com.esri.json.hadoop.EnclosedJsonInputFormat' 
OUTPUTFORMAT 
  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
  's3://my-bucket/geojson'
