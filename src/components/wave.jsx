import React, { useState } from 'react';
import { css } from '@emotion/core';

const waveButtonCss = css`
	background: rebeccapurple;
	border: none;
	color: white;
	font-size: 1.25rem;
`;

const Wave = () => {
	const [ waves, setWaves ] = useState(0);
	const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

	return (
		<button css={waveButtonCss} onClick={() => setWaves(waves + 1)}>
			{label}
		</button>
	);
};

export default Wave;
