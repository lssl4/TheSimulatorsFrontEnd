import React, {Component} from 'react';
import {Map, View} from 'ol';
import {Tile as TileLayer} from 'ol/layer';
import {WMTS as WMTSSource} from 'ol/source';
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import {ScaleLine, ZoomSlider, defaults as DefaultControls} from 'ol/control';


class MapDisplay extends Component {

    constructor(props) {
        super(props)
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    //TODO: Fix up dimensions as currently the user needs to scroll down in order to see the map
    updateDimensions() {
        const h = window.innerWidth >= 992 ? window.innerHeight : window.height
        this.setState({height : h})
    }

    componentWillMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentDidMount() {

        // Create an Openlayer Map instance which will hold the different map layers
        const map = new Map({
            //Display the map in the div with the id of 'map'
            target: 'map',
            layers: [
                new TileLayer({
                    source: new WMTSSource({
                        //TODO: first option gives real time map however data may not be available for current day yet
                        //      second option retrieves data at given date
                        //url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/',
                        url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/?TIME=2020-05-29',
                        layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
                        format: 'image/jpeg',
                        matrixSet: 'EPSG4326_250m',
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
                            0.002197265625
                          ],
                          matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                          tileSize: 512
                        })
                    }),
                    name: 'BaseLayer'
                }),
                new TileLayer({
                    source: new WMTSSource({
                        url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/',
                        layer: 'GPW_Population_Density_2020',
                        format: 'image/png',
                        matrixSet: 'EPSG4326_1km',
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
                            0.002197265625
                          ],
                          matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                          tileSize: 512
                        })
                    }),
                    name: 'PopulationDensity'
                })
            ],
            //Add in the following map controls
            controls: DefaultControls().extend([
                new ZoomSlider(),
                new ScaleLine()
            ]),
            //Render the tile layers in a map view with a Mercator projection
            view: new View({
                projection: 'EPSG:4326',
                center:[0, 0],
                zoom: 1
            })
        })
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimensions)
    }

    render(){
        const style = {
            width: '100%',
            height: this.state.height,
            backgroundColor: '#cccccc'
        }
        return (
            <div id='map' style={style}></div>
        )
    }

}

export default MapDisplay;