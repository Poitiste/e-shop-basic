import './SearchBarResults.css';
import { useNavigate } from 'react-router-dom';

export default function SearchBarResults({ results, setResults, setInput }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/shop/detail/${id}`)
        setInput('')
        setResults([])
    }

    return (
        <div className="result-list">
            {results.map((result, id) => {
                return (
                    <div
                        key={id}
                        className="search-result"
                        value={result.name}
                        onClick={()=>handleClick(result.id)}
                    >
                        {result.name}
                    </div>
                )
            })}
        </div>
    )
}