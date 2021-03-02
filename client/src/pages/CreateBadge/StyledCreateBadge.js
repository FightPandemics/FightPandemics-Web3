/* eslint-disable no-tabs */
import styled from "styled-components";
import { mq, theme } from "../../constants/theme";
const { white, darkerGray, royalBlue } = theme.colors;
const { display } = theme.typography.font.family;

export const CreateBadgeContainer = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: ${darkerGray};
	margin: 0 auto;
	background-color: ${white};
	letter-spacing: normal;
	font-style: normal;
	font-stretch: normal;
	@media screen and (max-width: ${mq.phone.wide.maxWidth}) {
		padding: 0 3rem;
	}
	margin-bottom: 104px;
	h1 {
		font-family: ${display.poppins};
		font-size: 32px;
		margin: 1em 0;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
		letter-spacing: 0em;
		text-align: left;

		/* Color/Primary Text */

		color: #282828;
		@media screen and (max-width: ${mq.phone.wide.maxWidth}) {
			font-size: 2.6rem;
			line-height: 2.8rem;
		}
	}
`;

export const FormContainer = styled.div`
	position: relative;
	width: 800px;
	height: 673px;
	margin: auto;
	margin-bottom: 104px;
	border: 1px solid #c4c4c4;
	box-sizing: border-box;

	#create-badge-form {
		align-content: center;
		justify-content: center;
		position: absolute;
		left: 17.12%;
		right: 17.12%;
		top: 7.85%;
		bottom: 75.7%;
	}

	.ant-btn {
		position: relative;
		background-color: white;
		color: ${royalBlue};
	}

	p {
		font-family: ${display.worksans};
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: center;
	}

	.ant-btn-primary {
		border-radius: 46px;
		background-color: ${royalBlue};
		color: white;
		align-items: right;
	}

	.ant-btn-secondary {
		border-radius: 46px;
		background-color: ${white};
		color: ${royalBlue};
		border: 1px solid ${royalBlue};
		height: 44px;
		width: 200px;
		left: 0px;
		top: 0px;
		font-weight: 500;
	}
`;
