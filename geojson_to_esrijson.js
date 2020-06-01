

const esriUtils = require('@esri/arcgis-to-geojson-utils');
const fs = require('fs');

//geojson file is converted from shape zip files using https://mygeodata.cloud/converter/.
let rawdata = fs.readFileSync('./taxi_zones.geojson')
let geojson = JSON.parse(rawdata);

//convert to earijson format
let esrijson = esriUtils.geojsonToArcGIS(geojson)

//in order for athena com.esri.hadoop.hive.serde.JsonSerde to parse correctly, need 
//
//1.. delete spatialReference key for every entry
for(var i =0;i<esrijson.length;i++){
  delete esrijson[i].geometry.spatialReference
}

//2. add additional metadata
//ToDo: infer and extract additional metadata from origin geojson
json_full =
{
  "displayFieldName" : "",
  "fieldAliases" : {
    "OBJECTID" : "OBJECTID",
    "Shape_Leng" : "Shape_Leng",
    "Shape_Area" : "Shape_Area",
    "zone" : "zone",
    "LocationID" : "LocationID",
    "borough" : "borough"
  },
  "geometryType" : "esriGeometryPolygon",
  "spatialReference" : {
    "wkid" : null
  },
  "fields" : [
    {
      "name" : "OBJECTID",
      "type" : "esriFieldTypeOID",
      "alias" : "OBJECTID"
    },
    {
      "name" : "Shape_Length",
      "type" : "esriFieldTypeDouble",
      "alias" : "Shape_Length"
    },
    {
      "name" : "Shape_Area",
      "type" : "esriFieldTypeDouble",
      "alias" : "Shape_Area"
    },
    {
      "name" : "zone",
      "type" : "esriFieldTypeString",
      "alias" : "zone",
      "length" : 90
    },
    {
      "name" : "LocationID",
      "type" : "esriFieldTypeInt",
      "alias" : "LocationID"
    },
    {
      "name" : "borough",
      "type" : "esriFieldTypeString",
      "alias" : "borough",
      "length" : 90
    }
  ],],"features":esrijson}


let esri_data = JSON.stringify(json_full);
fs.writeFileSync('./taxi_zone.json', esri_data);
