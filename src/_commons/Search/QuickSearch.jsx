import axios from "axios";
import './QuickSearch.css';

export default function SearchBar({input,setInput, setResults }) {

    const handleChange = (e) => {
        setInput(e);
        fetchData(e);
    }

    const fetchData = (value) => {
        axios.get(`http://localhost:3001/products?q=${value}`)
            .then((res) => {
                const results = res.data.filter((product) => {
                    return value && product && product.name && product.name.toLowerCase().includes(value);
                });
                setResults(results);
            })
    }

    return (
        <>
            <form action="" method="get">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Rechercher ici..."
                    className="input-field"
                />
            </form>
        </>
    )
}