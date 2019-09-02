import React from "react";
// react plugin used to create google maps
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyC2CzVh3itvUXmkB_naORLuaIXLjiH9MQs");
Geocode.enableDebug();

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={5.5}
      defaultCenter={{ lat: -1.7650444, lng: 118.9922917 }}
    />
  ))
);

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <MapWrapper
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2CzVh3itvUXmkB_naORLuaIXLjiH9MQs"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;
