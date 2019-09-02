import React from 'react';

// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Table
} from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from 'actions';
import PropTypes from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nik: '',
      nama_lgkp: '',
      namaibu: '',
      searchModal: false,
      imageUrl: 'data:image/png;Base64,'
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({
      searchModal: !this.state.searchModal
    });
  };

  searchAction = () => {
    const self = this;
    const { nama_lgkp, namaibu } = this.state;
    const value = {
      nama_lgkp: nama_lgkp,
      namaibu: namaibu
    };
    this.props.getDetail(value).then(function(resp) {
      self.toggle();
    });
  };

  searchAction2 = () => {
    const { nik } = this.state;
    const value = {
      nik: nik
    };
    this.props.getData(value);
  };

  render() {
    let showingdata = this.state.nik === '' ? 'hidedata' : 'showdata';
    const { pend } = this.props.pend;
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='12'>
              <Card>
                <div className='card-user'>
                  <CardBody>
                    <h5>Cari Data</h5>
                    <Form>
                      <FormGroup>
                        <Label for='nik'>Nik</Label>
                        <Input
                          type='string'
                          name='nik'
                          id='nik'
                          placeholder='Input nik'
                          value={this.state.nik}
                          onChange={this.onChange}
                        />
                      </FormGroup>
                    </Form>
                    <Button
                      className='btn btn-primary'
                      onClick={() => this.searchAction2()}
                    >
                      Search
                    </Button>
                    <Button
                      className='btn btn-primary'
                      onClick={() => this.searchAction()}
                    >
                      Search Detail Data
                    </Button>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>

          <div className={showingdata}>
            <Row>
              <Col md='3'>
                <Card className='card-user'>
                  <CardHeader style={{ textAlign: 'center' }}>
                    <h3>Photo Profil</h3>
                  </CardHeader>
                  <CardBody style={{ marginTop: '40px' }}>
                    <div className='author'>
                      <img
                        style={{ width: '100%' }}
                        alt='...'
                        className='img-thumbnail'
                        src={this.state.imageUrl + pend.photo}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md='9'>
                <Card className='card-user'>
                  <CardHeader>
                    <Row>
                      <Col className='pr-1' md='6'>
                        <CardTitle tag='h5'>Detail</CardTitle>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <Modal
                        isOpen={this.state.searchModal}
                        toggle={this.toggle}
                        className={this.props.className}
                      >
                        <ModalHeader toggle={this.toggle}>
                          Cari Data disini
                        </ModalHeader>
                        <ModalBody>
                          <Form>
                            <FormGroup>
                              <Label for='nama_lgkp'>Nama Lengkap</Label>
                              <Input
                                type='string'
                                name='nama_lgkp'
                                id='nama_lgkp'
                                placeholder='Input Nama Lengkap'
                                value={this.state.nama_lgkp}
                                onChange={this.onChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for='namaibu'>Nama Ibu Kandung</Label>
                              <Input
                                type='text'
                                name='namaibu'
                                id='namaibu'
                                value={this.state.namaibu}
                                onChange={this.onChange}
                                placeholder='Input Name'
                              />
                            </FormGroup>
                          </Form>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color='primary'
                            onClick={() => this.searchAction()}
                          >
                            Search Detail
                          </Button>{' '}
                          <Button color='secondary' onClick={this.toggle}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                    {/* //Form Colom */}
                    <Form>
                      <Row key={pend.id}>
                        <Col className='pr-1' md='4'>
                          <FormGroup>
                            <label>Nomor Kependudukan</label>
                            <Input
                              placeholder={pend.nik}
                              type='text'
                              readOnly
                            />
                          </FormGroup>
                        </Col>
                        <Col md='1' />
                        <Col md='7'>
                          <FormGroup>
                            <label>Nama Lengkap</label>
                            <Input
                              placeholder={pend.nama_lgkp}
                              type='text'
                              readOnly
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className='pr-1' md='3'>
                          <FormGroup>
                            <label>Tempat Lahir</label>
                            <Input
                              disabled
                              placeholder={pend.tmpt_lhr}
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col className='pr-1' md='3'>
                          <FormGroup>
                            <label>Tanggal Lahir</label>
                            <Input
                              disabled
                              placeholder={pend.tgl_lhr}
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col className='pr-1' md='3'>
                          <FormGroup>
                            <label>Nama Ibu Kandung</label>
                            <Input
                              disabled
                              placeholder={pend.namaibu}
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                        <Col className='pl-1' md='3'>
                          <FormGroup>
                            <label>Golongan Darah</label>
                            <Input
                              disabled
                              placeholder={pend.goldarah}
                              type='text'
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='10'>
                          <FormGroup>
                            <label>Alamat</label>
                            <Input placeholder='Home Address' type='text' />
                          </FormGroup>
                        </Col>
                        <Col className='pl-1' md='1'>
                          <FormGroup>
                            <label>RT</label>
                            <Input placeholder='Home Address' type='text' />
                          </FormGroup>
                        </Col>
                        <Col className='pl-1' md='1'>
                          <FormGroup>
                            <label>RW</label>
                            <Input placeholder='Home Address' type='text' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className='pr-1' md='3'>
                          <FormGroup>
                            <label>Kelurahan</label>
                            <Input placeholder='City' type='text' />
                          </FormGroup>
                        </Col>
                        <Col className='px-1' md='3'>
                          <FormGroup>
                            <label>Kecamatan</label>
                            <Input placeholder='Country' type='text' />
                          </FormGroup>
                        </Col>
                        <Col className='pl-1' md='3'>
                          <FormGroup>
                            <label>Kab/Kota</label>
                            <Input placeholder='ZIP Code' type='number' />
                          </FormGroup>
                        </Col>
                        <Col className='pl-1' md='3'>
                          <FormGroup>
                            <label>Provinsi</label>
                            <Input placeholder='ZIP Code' type='number' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='12'>
                          <FormGroup>
                            <label>Data Keluarga</label>
                            <CardBody>
                              <Table responsive>
                                <thead className='text-primary'>
                                  <tr>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th className='text-right'>Salary</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Dakota Rice</td>
                                    <td>Niger</td>
                                    <td>Oud-Turnhout</td>
                                    <td className='text-right'>$36,738</td>
                                  </tr>
                                  <tr>
                                    <td>Minerva Hooper</td>
                                    <td>Curaçao</td>
                                    <td>Sinaai-Waas</td>
                                    <td className='text-right'>$23,789</td>
                                  </tr>
                                  <tr>
                                    <td>Sage Rodriguez</td>
                                    <td>Netherlands</td>
                                    <td>Baileux</td>
                                    <td className='text-right'>$56,142</td>
                                  </tr>
                                  <tr>
                                    <td>Philip Chaney</td>
                                    <td>Korea, South</td>
                                    <td>Overland Park</td>
                                    <td className='text-right'>$38,735</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </CardBody>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

User.propTypes = {
  getDetail: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  pend: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  pend: state.pend
});

export default connect(
  mapStateToProps,
  actions
)(User);
