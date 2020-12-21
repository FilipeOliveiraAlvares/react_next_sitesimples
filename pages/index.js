import React from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


const Home = (data) => (
    <div>
        <Head>
            <title>
                Home - Site Filipe
                </title>
            <meta name='description'
                content='Site simples desenvolvido por filipe o qual utiliza React e Next'
            />
            <meta name='author'
                content='Filipe'
            />

        </Head>

        <Menu />
        <Jumbotron fluid className='servicos'>
            <style>{`
                .servicos{
                    padding-top:80px;
                    padding-bottom;80px;
                    background-color:#000;
                    color:white;
                }
                .circulo{
                    width:140px;
                    height:140px;
                    background-color:#fed136;
                    font-size: 50px;
                    padding-top: 24px;
                }
                .centralizar{
                    margin: 0 auto!important;
                    float: none !important;
                }

                `}
            </style>
            <Container className='text-center'>
                <div>
                    <h1 className='display-4'>{data.response.titulo}</h1>
                    <p className='lead pb-4'>{data.response.subtitulo}</p>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.servUmIcone} />
                        </div>
                        {console.log(data)}
                        <h2 className='mt-4 mb-4'>{data.response.servUmTitulo}</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                    </div>
                    <div class="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon="project-diagram" />
                        </div>
                        <h2 className='mt-4 mb-4'>Exemplo</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                    </div>
                    <div class="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon="dolly-flatbed" />
                        </div>
                        <h2 className='mt-4 mb-4'>Exemplo</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                    </div>
                </div>
            </Container>
        </Jumbotron>
    </div>
);

Home.getInitialProps = async () => {
    var response = await axios.get('http://localhost:8081/home');
    //console.log(response.data);
    return { response: response.data }
}
export default Home;