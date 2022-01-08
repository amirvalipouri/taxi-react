import React from 'react'
import { Layout} from 'antd';
import MapImage from '../../assert/map.png'
import './Map.css'
import Collapsee from './Collapsee';
const { Content } = Layout;

const Map = (props) =>{
    return(
        <Layout>
            <Content>
                <div className="div-image">
                    <img src={MapImage} alt="Map" />
                </div>
                
                <div className="divCollapse">
                    <h2>Drivers</h2>
                    <Collapsee/>
                </div>
            </Content>
        </Layout>

    );
};

export default Map
