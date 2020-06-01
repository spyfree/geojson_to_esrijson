# geojson_to_esrijson

For AWS Athena, there are several geospatial function available. you can check
this [demo document](https://docs.aws.amazon.com/athena/latest/ug/geospatial-functions-list.html)


You can convert shape files to geojson file at [this website](https://mygeodata.cloud/converter)

But when i tried using a geojson file to create a external reference table like
counties in the example, it turns out *com.esri.hadoop.hive.serde.JsonSerde*
accepted format is [esrijson](https://doc.arcgis.com/en/arcgis-online/reference/geojson.htm), not regular geojson format.

This node script convert from geojson format to AWS Athena ESRI-compliant GeoJSON format using [arcgis-to-geojson-utils](https://github.com/Esri/arcgis-to-geojson-utils)


## Install
```
npm install @esri/arcgis-to-geojson-utils
```



## Usage

alter the script for your specific files and metadata 

``` 
node geojson_to_esrijson.js 
```

