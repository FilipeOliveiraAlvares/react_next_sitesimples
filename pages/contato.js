import React from 'react';
import Head from 'next/head';
import { Spinner } from 'reactstrap';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div>
            <Head>
                <title>
                    Contato - Site Filipe
                </title>
            </Head>

            <Menu />
        Contato

            <div class="d-flex justify-content-center">
                <Spinner color="dark" />
            </div>
        </div>
    );
}

export default Contato