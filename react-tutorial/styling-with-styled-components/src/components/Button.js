import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    ${({ theme, color }) => {
        const selectedColor = theme.palette[color];
        return css`
            background: ${selectedColor};
            &:hover {
                background: ${lighten(0.1, selectedColor)};
            }
            &:active {
                background: ${darken(0.1, selectedColor)};
            }
        `;
    }}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
};

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    ${colorStyles}

    /* 크기 */
    ${sizeStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function Button({ children, color, size, ...rest }) {
    return (
        <StyledButton color={color} size={size} {...rest}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;
