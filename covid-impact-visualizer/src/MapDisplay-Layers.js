import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { WMTS as WMTSSource } from "ol/source";
import { Style as StyleMap } from "ol/style";
import { Point } from "ol/geom";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { Markers } from "ol/layer";

const URL = "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best";
var dateParameter = "/?TIME=2020-05-29";

const baseLayer = new TileLayer({
  source: new WMTSSource({
    //TODO: first option gives real time map however data may not be available for current day yet
    //      second option retrieves data at given date
    //url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/',
    url: URL + dateParameter,
    layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
    format: "image/jpeg",
    matrixSet: "EPSG4326_250m",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "BaseLayer",
});
export { baseLayer };

const populationDensityLayer = new TileLayer({
  source: new WMTSSource({
    url: URL,
    layer: "GPW_Population_Density_2020",
    format: "image/png",
    matrixSet: "EPSG4326_1km",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "PopulationDensity",
});
export { populationDensityLayer };

const landSurfaceDayTempLayer = new TileLayer({
  source: new WMTSSource({
    url: URL + dateParameter,
    layer: "MODIS_Terra_Land_Surface_Temp_Day",
    format: "image/png",
    matrixSet: "EPSG4326_1km",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "LandSurfaceDayTemperature",
});
export { landSurfaceDayTempLayer };

const landSurfaceNightTempLayer = new TileLayer({
  source: new WMTSSource({
    url: URL + dateParameter,
    layer: "MODIS_Terra_Land_Surface_Temp_Night",
    format: "image/png",
    matrixSet: "EPSG4326_1km",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "LandSurfaceNightTemperature",
});
export { landSurfaceNightTempLayer };

const UVDoesAndIndexLayer = new TileLayer({
  source: new WMTSSource({
    url: URL,
    layer: "OMI_UV_Erythemal_Daily_Dose",
    format: "image/png",
    matrixSet: "EPSG4326_2km",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "UVDoesAndIndex",
});

export { UVDoesAndIndexLayer };

const nightTimeLightsLayer = new TileLayer({
  source: new WMTSSource({
    url: URL + dateParameter,
    layer: "VIIRS_SNPP_DayNightBand_ENCC",
    format: "image/png",
    matrixSet: "EPSG4326_500m",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "NightTimeLights",
});

export { nightTimeLightsLayer };

const referenceLayer = new TileLayer({
  source: new WMTSSource({
    url: URL,
    layer: "Reference_Labels",
    format: "image/png",
    matrixSet: "EPSG4326_250m",
    tileGrid: new WMTSTileGrid({
      origin: [-180, 90],
      resolutions: [
        0.5625,
        0.28125,
        0.140625,
        0.0703125,
        0.03515625,
        0.017578125,
        0.0087890625,
        0.00439453125,
        0.002197265625,
      ],
      matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tileSize: 512,
    }),
  }),
  name: "PlaceLabels",
});

export { referenceLayer };
