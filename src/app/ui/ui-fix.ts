/**
 * 개발자: 이현호
 * 작성 날짜: 2024-10-19
 * 기능: 컴포넌트를 간편하고 빠르게 개발할 수 있는 스타일링 기능 구현
 */

import styled from "styled-components";

export const Container = styled.div<{
    width: string,
    height?: string
}>`
    width: ${(props) => props.width}px;
`