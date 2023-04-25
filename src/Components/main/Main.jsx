import React, { useEffect, useState } from 'react';
import './Main.css';
import service from '../../service';
import searchIco from '../../assets/search.svg';
import Grid from '../Sceleton/Sceleton';
import ImgSceleton from '../Sceleton/ImgSceleton';

import { Loading } from '../Loading/Loading';

export const Main = (props) => {

    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');

    const [filterType, setFilterType] = useState('Достопримечательность');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = service();

    const userClick = (e) => {
        e.preventDefault();

        setLoading(true);

        if (message != '') {
            request.getData(message)
                .then(res => success(res, e))
                .catch(onError);
        } else {
            alert('Введите название объекта поиска');
        }
    }

    const success = (res, e) => {

        setData(res.data)

        setError(false);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const filterClick = (e) => {
        setFilterType(e.target.childNodes[0].data);
        clearAlFilters();
        e.target.classList.add('filters__btn--active');
    }

    const clearAlFilters = () => {
        document.querySelectorAll('.filters__btn')
            .forEach(el => {
                el.classList.remove('filters__btn--active');
            })
    }

    const item = data.map((el, i) => {
        if (el.result_type != 'geos' && el.result_object.category.name == `${filterType}`) {
            return (
                <>
                    <div className="cart" key={i}>
                        <img className='img' src={el.result_object.photo.images.original.url} alt="" />
                        <h3 className='title'>
                            {el.result_object.name.length > 50 ?

                                `${el.result_object.name.slice(0, 50)}...`

                                : el.result_object.name}
                        </h3>
                        <span className="subtitle">{el.result_object.address}</span>
                        <span className='cart-type'>{el.result_object.category.name}</span>
                    </div>
                </>
            )
        }
    })

    const spinner = loading ? <Loading /> : null;
    const errorMessage = error ? <h1>Что-то пошло не так</h1> : null;
    const content = !(loading || error) ? item : null;
    const sceleton = data.length == 0 && !loading ? <Grid /> : null;

    const Img = data.length != 0 && !loading ?
        <img
            className='city-img'
            src={data.length > 0 ? data[0].result_object.photo.images.original.url : null}
            alt="" />
        : <ImgSceleton />;

    return (
        <>
            <h1 className='results-title'>{data.length > 0 ? 'Результаты поиска:' : 'Введите название города'}</h1>
            <div className="wrapper">
                <div className="results">
                    <div className="inner">
                        {sceleton}
                        {spinner}
                        {content}
                        {errorMessage}
                    </div>
                </div>
                <div className="search-wrapper">
                    <form className='form' onSubmit={(e) => userClick(e)}>
                        <input className="input" type="text" placeholder='название города' onChange={(e) => setMessage(e.target.value)} />
                        <img src={searchIco} alt="" />
                    </form>
                    <div className="request">
                        <div className="request__item">
                            <span className="request__item-key">место поиска:</span>
                            <span className="request__item-value">{message}</span>
                        </div>
                        <div className="request__item">
                            <span className="request__item-key">Фильтер:</span>
                            <span className="request__item-value">
                                {filterType}
                            </span>
                        </div>
                        <div className="filters">
                            <button className='filters__btn filters__btn--active'
                                onClick={(e) => filterClick(e)}>
                                Достопримечательность
                            </button>

                            <button className='filters__btn'
                                onClick={(e) => filterClick(e)}>
                                Отель
                            </button>

                            <button className='filters__btn'
                                onClick={(e) => filterClick(e)}>
                                Ресторан  
                            </button>

                            <button className='filters__btn'
                                onClick={(e) => filterClick(e)}>
                                Авиакомпания  
                            </button>
                        </div>
                        <div className="city">
                            <h1>{data.length > 0 ? data[0].result_object.name : null}</h1>
                            <p>{data.length > 0 ? data[0].result_object.location_string : null}</p>
                            {Img}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
