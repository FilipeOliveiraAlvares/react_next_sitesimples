import React from 'react';
import { Spinner } from 'reactstrap';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div>

            <Menu />
        Contato

            <div class="d-flex justify-content-center">
                <Spinner color="dark" />
            </div>
        </div>
    );
}

export default Contato