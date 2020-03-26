import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';
import { Link } from 'react-router-dom';

const Report = () => {
    let { state, dispatch } = useContext(Store);
    return (
        <div className="report">
            <ul className="report_items" >
                <li>
                    <div>
                        <Link className="report_title" to="/">
                            <h4>СПОСОБ НАВЕДЕНИЯ ТЕЛЕУПРАВЛЯЕМОЙ РАКЕТЫ</h4>
                        </Link>
                        <a target="_blank" className="report_file"></a>
                    </div>
                    <div className="report_snippet">
                        <span>Здесь ΔxЦР[n], ΔyЦР[n], ΔzЦР[n] - проекции относительной дальности ракета-цель на оси прямоугольной системы координат;</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Link className="report_title" to="/">
                            <h4>СПОСОБ ТЕЛЕУПРАВЛЕНИЯ РАКЕТОЙ</h4>
                        </Link>
                        <a target="_blank" className="report_file"></a>
                    </div>
                    <div className="report_snippet">
                        <span>Ξ - коэффициент относительного демпфирования, значение которого задают равным значению желательного коэффициента относительного демпфирования последовательных динамических звеньев “режекторный фильтр-ракета”, ξ=0.7.</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Report;
