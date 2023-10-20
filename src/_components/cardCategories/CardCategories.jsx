import { Link } from 'react-router-dom';
import './CardCategories.css'
import { categories, categoriesOnScreen, components, componentsOnScreen, peripherals, peripheralsOnScreen } from '../../const/const';
import { useEffect, useReducer } from 'react';

const CardCategories = ({ category }) => {

    const reducer = (nameOnScreen, action) => {
        if (action.type === 'UPDATE_NAME') {

            if (categoriesOnScreen[categories.indexOf(category.name)] !== undefined) {
                return {
                    name: categoriesOnScreen[categories.indexOf(category.name)],
                    picture: category.picture
                }
            }

            if (componentsOnScreen[components.indexOf(category.name)] !== undefined) {
                return {
                    ...nameOnScreen,
                    name: componentsOnScreen[components.indexOf(category.name)],
                }
            }

            if (peripheralsOnScreen[peripherals.indexOf(category.name)] !== undefined) {
                return {
                    ...nameOnScreen,
                    name: peripheralsOnScreen[peripherals.indexOf(category.name)]
                }
            }
        }
        return nameOnScreen
    }


    const [nameOnScreen, dispatch] = useReducer(reducer, category);

    useEffect(() => {
        dispatch({ type: 'UPDATE_NAME' })
    }, [])

    return (
        <div className="col s12 m6 l4">
            <div className='card'>
                <Link to={`http://localhost:3000/shop/${category.name}`} >
                    <div className="card-image">
                        <img src={nameOnScreen.picture} alt={nameOnScreen.name} />
                    </div>
                    <div className="card-content">
                        <p>{nameOnScreen.name}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardCategories;