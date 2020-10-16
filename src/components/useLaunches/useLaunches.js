import { useEffect, useState} from 'react';
import FetchData from '../../service/FetchData';

const useLaunches = () => {

    const fetchData = new FetchData();

	const [data, setData] = useState([]);

	useEffect(() =>{
		fetchData.getLaunches()
			.then(launches => setData(state => [...launches]))
    }, []);
    
    const getLaunch = id => data.find(item => item.id === id);

    return{ data, getLaunch }
}

export default useLaunches;