import React from 'react';

//helpers
import { calcTime, convertMoney } from '../../../helpers';

import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue }) =>
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(time)}</p>
            </div>
            <div className='column'>
                <p>Revenue: {convertMoney(time)}</p>
            </div>
        </Content>
    </Wrapper>

export default MovieInfoBar;