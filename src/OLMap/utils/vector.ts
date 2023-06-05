import { Vector as VectorSource } from 'ol/source';

interface TVectorProps {
    features: any;
}

const Vector = ({ features }:TVectorProps)=> {
    return new VectorSource({
        features
    });
}

export default Vector;