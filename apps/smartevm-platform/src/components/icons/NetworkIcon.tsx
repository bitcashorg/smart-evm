import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  max-height: 100%;
  max-width: 100%;

  .fill {
    fill: ${({ theme }) => theme.text1};
  }
`

export const NetworkIcon: React.FC<{ className?: string }> = (props) => (
  <Wrapper
    className={`networkIcon ${props.className}`}
    height="11"
    viewBox="0 0 8 8"
    width="11"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="fill"
      d="M7.779 5.316a4 4 0 0 0 0-2.632.288.288 0 0 0-.013-.036 4 4 0 0 0-7.529 0 .284.284 0 0 0-.013.036 4 4 0 0 0 0 2.632.288.288 0 0 0 .013.036 4 4 0 0 0 7.529 0 .286.286 0 0 0 .013-.036zM4 7.427c-.152 0-.4-.276-.6-.892a6.28 6.28 0 0 1-.236-1.011h1.677a6.285 6.285 0 0 1-.236 1.011c-.205.616-.451.892-.605.892zm-.907-2.476c-.028-.306-.042-.625-.042-.951s.015-.645.042-.951h1.818c.028.306.042.625.042.951s-.015.645-.042.951zM.575 4a3.417 3.417 0 0 1 .135-.951h1.808c-.027.312-.04.632-.04.951s.014.639.04.951H.71A3.417 3.417 0 0 1 .575 4zM4 .573c.152 0 .4.276.6.892a6.28 6.28 0 0 1 .236 1.011H3.163A6.279 6.279 0 0 1 3.4 1.465c.2-.616.45-.892.6-.892zm1.486 2.476h1.808a3.432 3.432 0 0 1 0 1.9H5.486c.027-.312.04-.632.04-.951s-.013-.637-.04-.949zm1.584-.573H5.42A5.5 5.5 0 0 0 4.9.693a3.441 3.441 0 0 1 2.17 1.783zM3.106.692a5.5 5.5 0 0 0-.522 1.783H.934A3.442 3.442 0 0 1 3.106.692zM.934 5.525h1.65a5.5 5.5 0 0 0 .522 1.783A3.442 3.442 0 0 1 .934 5.525zM4.9 7.308a5.5 5.5 0 0 0 .52-1.783h1.65A3.442 3.442 0 0 1 4.9 7.308z"
      opacity="0.7"
      transform="translate(-.002)"
    />
  </Wrapper>
)
